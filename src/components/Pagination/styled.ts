import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: center;
  margin-top: 50px;

  @media (max-width: 420px) {
    margin-top: 25px;
  }
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  background-color: ${(props) => (props.$active ? '#e67e22' : 'transparent')};
  color: ${(props) => (props.$active ? '#fff' : '#333')};
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  @media (max-width: 420px) {
    font-size: 12px;
    padding: 4px 8px;
    margin: 0 3px;
  }

  &:hover {
    background-color: ${(props) => (props.$active ? '#d35400' : '#f2f2f2')};
  }

  &:disabled {
    cursor: default;
    color: #bbb;
  }
`;

export const ArrowButton = styled(PageButton)`
  font-size: 16px;
  padding: 5px 10px;
`;
