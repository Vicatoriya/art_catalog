import getInfoFromAPI from '@api/getInfoFromAPI';
import { parseImagesInfo } from '@api/parseImages';
import ErrorPopUp from '@components/ErrorPopUp';
import ImgList from '@components/ImgList';
import Loader from '@components/Loader';
import SortSelector from '@components/SortSelector';
import StandardHeading from '@components/StandardHeading';
import { ICONS } from '@constants/Icons';
import {
  QUERY_KEY,
  SORT_SELECTOR_KEY,
} from '@constants/SessionStorageConstants';
import useDebounce from '@hooks/useDebounce';
import ImageInformation from '@mytypes/ImageInformation';
import ImagesAPIData from '@mytypes/ImagesAPIData';
import SessionStorageService from '@utils/SessionStorageService';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import {
  ErrorMessage,
  SearchContainer,
  SearchForm,
  SearchIcon,
  SearchInput,
} from './styled';

export default function SearchBar() {
  const [images, setImages] = useState<Array<ImageInformation>>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const storage = new SessionStorageService();
  const [sortCriteria, setSortCriteria] = useState<string>(() => {
    return storage.getItem(SORT_SELECTOR_KEY) ?? 'title';
  });
  const queryInitialValue: string = storage.getItem(QUERY_KEY) ?? '';
  const ValidationShema = z
    .object({
      query: z
        .string()
        .min(3, 'Enter at least 3 characters')
        .regex(/[a-zA-Z0-9\s]/, 'Invalid characters in search query'),
    })
    .optional()
    .or(z.literal(''));
  const formik = useFormik({
    initialValues: { query: queryInitialValue },
    validationSchema: toFormikValidationSchema(ValidationShema),
    onSubmit: () => {
      console.log();
    },
  });

  const debouncedSearchTerm = useDebounce(formik.values.query, 500);

  useEffect(() => {
    if (debouncedSearchTerm && formik.errors.query === undefined) {
      fetchImages();
      storage.setItem(QUERY_KEY, formik.values.query);
    } else {
      setImages([]);
    }
  }, [debouncedSearchTerm]);

  const fetchImages = async () => {
    const result = await getInfoFromAPI({
      request:
        'https://api.artic.edu/api/v1/artworks/search?q=' +
        formik.values.query +
        '&fields=id,image_id,title,artist_title,date_display',
      setLoading,
      setError,
    });
    if (result !== null) {
      setImages(parseImagesInfo(result as ImagesAPIData));
    }
  };

  const handleSortChange = (criteria: string) => {
    setSortCriteria(criteria);
    storage.setItem(SORT_SELECTOR_KEY, criteria);
  };

  const sortedImages = [...images].sort((a, b) => {
    const fieldA = a[sortCriteria as keyof typeof a] || '';
    const fieldB = b[sortCriteria as keyof typeof b] || '';

    return fieldA ? (fieldB ? fieldA.localeCompare(fieldB) : -1) : 1;
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
    if (e.target.value == '') {
      storage.removeItem(QUERY_KEY);
      storage.removeItem(SORT_SELECTOR_KEY);
    }
  };

  const popUpCloseHandler = () => {
    setError('');
  };

  return (
    <SearchForm>
      <ErrorPopUp
        error={error}
        visible={error != ''}
        onClose={popUpCloseHandler}
      />
      <SearchContainer $error={formik.errors.query != undefined}>
        <SearchInput
          name="query"
          onChange={onChangeHandler}
          value={formik.values.query}
        ></SearchInput>
        <SearchIcon>
          <img src={ICONS.search} alt="Search icon"></img>
        </SearchIcon>
      </SearchContainer>
      <ErrorMessage>{formik.errors.query}</ErrorMessage>
      {isLoading && <Loader />}
      {(images.length != 0 && (
        <>
          <StandardHeading text="Search results" />
          <SortSelector
            selectedSort={sortCriteria}
            onSortChange={handleSortChange}
          />
          <ImgList imgs={sortedImages} />
        </>
      )) ||
        (formik.values.query != '' && (
          <ErrorMessage>No results found</ErrorMessage>
        ))}
    </SearchForm>
  );
}
