import styled from 'styled-components';

export const SearchContainer = styled.div<{ $error: boolean }>`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: ${(props) => (props.$error ? '2px solid red;' : 'none')};
  background-color: rgb(245, 245, 245);
  border-radius: 25px;
  padding: 10px 20px;
  width: 80%;
  max-width: 500px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  flex: 1;
  font-size: 16px;
  color: rgba(119, 119, 119, 1);

  ::placeholder {
    color: rgba(170, 170, 170, 1);
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
    color: rgba(85, 85, 85, 1);
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 15px;
  text-align: center;
  text-align: center;
`;
