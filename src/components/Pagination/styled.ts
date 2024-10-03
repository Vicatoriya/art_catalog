import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: center;
  margin-top: 50px;
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
