import React, { useState } from 'react';
import searchImg from '../../assets/search.png';
import {
  SearchContainer,
  SearchIcon,
  SearchInput,
  SearchForm,
  ErrorMessage,
} from './styled';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const validateSearch = (input: string) => {
    if (input.trim() === '') {
      setError('Поле не может быть пустым');
      return false;
    }
    if (input.length < 3) {
      setError('Введите минимум 3 символа');
      return false;
    }
    if (/[^a-zA-Z0-9\s]/.test(input)) {
      setError('Недопустимые символы в поисковом запросе');
      return false;
    }
    setError('');
    return true;
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateSearch(query)) {
    }
  };

  return (
    <SearchForm onSubmit={handleSearch}>
      <SearchContainer error={!!error}>
        <SearchInput
          type="text"
          value={query}
          placeholder="Search Art, Artist, Work..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchIcon>
          <img src={searchImg} alt="Search icon"></img>
        </SearchIcon>
      </SearchContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </SearchForm>
  );
}
