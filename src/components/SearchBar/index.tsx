import searchImg from '@assets/search.png';
import ImgList from '@components/ImgList';
import Loader from '@components/Loader';
import SortSelector from '@components/SortSelector';
import StandardHeading from '@components/StandardHeading';
import { useEffect, useState } from 'react';

import ImageInformation from '../../mytypes/ImageInformation';
import { parseImages } from '../../utils/parseImages';
import {
  ErrorMessage,
  SearchContainer,
  SearchForm,
  SearchIcon,
  SearchInput,
} from './styled';

export default function SearchBar() {
  const [images, setImages] = useState<Array<ImageInformation>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>(() => {
    return sessionStorage.getItem('lastQuery') ?? '';
  });
  const [error, setError] = useState<string>('');
  const [isResultsVisible, setisResultsVisible] = useState<boolean>(false);
  const [sortCriteria, setSortCriteria] = useState<string>(() => {
    return sessionStorage.getItem('lastSortCriteria') ?? '';
  });

  useEffect(() => {
    if (!error) {
      debouncedSearch(query);
    }
  }, [query, error]);

  const debounce = (func: (...args: any[]) => void, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;

    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const debouncedSearch = debounce(findImages, 500);

  const validateSearch = (input: string) => {
    if (input.length == 0) {
      setImages([]);
      sessionStorage.removeItem('lastSortCriteria');
      sessionStorage.removeItem('lastQuery');
      setisResultsVisible(false);
      setError('');
      return;
    }
    if (input.length < 3) {
      setImages([]);
      setisResultsVisible(false);
      setError('Enter at least 3 characters');
      return;
    }
    if (/[^a-zA-Z0-9\s]/.test(input)) {
      setImages([]);
      setisResultsVisible(false);
      setError('Invalid characters in search query');
      return;
    }
    setError('');
    return;
  };

  function findImages(q: string) {
    if (q.length === 0) {
      return;
    }
    sessionStorage.setItem('lastQuery', q);
    setisResultsVisible(true);
    setLoading(true);
    fetch(
      'https://api.artic.edu/api/v1/artworks/search?q=' +
        q +
        '&fields=id,image_id,title,artist_title,date_display'
    )
      .then(function (response) {
        if (response.ok) return response.json();
        else {
          alert('HTTP error: ' + response.status);
        }
      })
      .then(function (imagesInfo) {
        setImages(parseImages(imagesInfo));
      })
      .finally(() => setLoading(false));
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setQuery(q);
    validateSearch(q);
  };

  const handleSortChange = (criteria: string) => {
    setSortCriteria(criteria);
    sessionStorage.setItem('lastSortCriteria', criteria);
  };

  const sortedImages = [...images].sort((a, b) => {
    const fieldA = a[sortCriteria as keyof typeof a] || '';
    const fieldB = b[sortCriteria as keyof typeof b] || '';

    return fieldA ? (fieldB ? fieldA.localeCompare(fieldB) : -1) : 1;
  });

  return (
    <SearchForm>
      <SearchContainer $error={error !== ''}>
        <SearchInput
          type="text"
          value={query}
          placeholder="Search Art, Artist, Work..."
          onChange={(e) => handleInputChange(e)}
        />
        <SearchIcon>
          <img src={searchImg} alt="Search icon"></img>
        </SearchIcon>
      </SearchContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading && <Loader />}
      {images.length > 0 && isResultsVisible && query !== '' && (
        <>
          <StandardHeading text="Search results" />
          <SortSelector
            selectedSort={sortCriteria}
            onSortChange={handleSortChange}
          />
          <ImgList imgs={sortedImages} />
        </>
      )}
      {images.length === 0 && isResultsVisible && <p>No results found</p>}
    </SearchForm>
  );
}
