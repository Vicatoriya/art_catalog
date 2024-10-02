import React from 'react';
import searchImg from '../../assets/search.png';
import {
  SearchContainer,
  SearchIcon,
  SearchInput,
  SearchSection,
} from './styled';

export default function SearchBar() {
  return (
    <SearchSection>
      <SearchContainer>
        <SearchInput placeholder="Search Art, Artist, Work..." />
        <SearchIcon>
          <img src={searchImg} alt="Search icon"></img>
        </SearchIcon>
      </SearchContainer>
    </SearchSection>
  );
}
