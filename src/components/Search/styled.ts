import styled from 'styled-components';

export const SearchSection = styled.section`
  margin: 25px 0;
`;

export const SearchContainer = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f5f5;
  border-radius: 25px;
  padding: 10px 20px;
  max-width: 500px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  flex: 1;
  font-size: 16px;
  color: #777;

  ::placeholder {
    color: #aaa;
  }
`;

export const SearchIcon = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  padding: 0;

  img {
    width: 20px;
    height: 20px;
    color: #555;
  }
`;
