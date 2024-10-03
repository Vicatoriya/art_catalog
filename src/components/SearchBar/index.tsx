import React, { useState, useEffect } from 'react';
import searchImg from '../../assets/search.png';
import ImageInformation from '../../types/ImageInformation';
import ImgList from '../ImgList';
import StandardHeading from '../StandardHeading';
import Loader from '../Loader';
import {
  SearchContainer,
  SearchIcon,
  SearchInput,
  SearchForm,
  ErrorMessage,
} from './styled';

export default function SearchBar() {
  const [images, setImages] = useState<Array<ImageInformation>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isResultsVisible, setisResultsVisible] = useState<boolean>(false);

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
      setisResultsVisible(false);
      setError('');
      return;
    }
    if (input.length < 3) {
      setImages([]);
      setisResultsVisible(false);
      setError('Введите минимум 3 символа');
      return;
    }
    if (/[^a-zA-Z0-9\s]/.test(input)) {
      setImages([]);
      setisResultsVisible(false);
      setError('Недопустимые символы в поисковом запросе');
      return;
    }
    setError('');
    return;
  };

  function findImages(q: string) {
    if (q.length == 0) {
      return;
    }
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
          alert('Ошибка HTTP: ' + response.status);
        }
      })
      .then(function (json) {
        setImages(parseImagesJSON(json));
      })
      .finally(() => setLoading(false));
  }

  function parseImagesJSON(json: any): Array<ImageInformation> {
    let arr: Array<ImageInformation> = [];
    for (let i = 0; i < json.data.length; i++) {
      arr[i] = {
        id: json.data[i].id,
        title: json.data[i].title,
        artist: json.data[i].artist_title,
        date: json.data[i].date_display,
        imgURL:
          json.config.iiif_url +
          '/' +
          json.data[i].image_id +
          '/full/843,/0/default.jpg',
      };
    }
    return arr;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setQuery(q);
    validateSearch(q);
  };

  return (
    <SearchForm>
      <SearchContainer $error={error != ''}>
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
      {images.length > 0 && isResultsVisible && query != '' && (
        <>
          <StandardHeading text="Search results" />
          <ImgList imgs={images} />
        </>
      )}
      {images.length === 0 && isResultsVisible && <p>No results found</p>}
    </SearchForm>
  );
}