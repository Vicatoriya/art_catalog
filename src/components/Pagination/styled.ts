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
  background-color: ${(props) =>
    props.$active ? 'rgba(230, 126, 34, 1)' : 'transparent'};
  color: ${(props) => (props.$active ? 'white' : 'rgba(51, 51, 51, 1)')};
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  @media (max-width: 420px) {
    font-size: 12px;
    padding: 4px 8px;
    margin: 0 3px;
  }

  &:hover {
    background-color: ${(props) =>
      props.$active ? 'rgba(211, 84, 0, 1)' : 'rgba(242, 242, 242, 1)'};
  }

  &:disabled {
    cursor: default;
    color: rgba(187, 187, 187, 1);
  }
`;

export const ArrowButton = styled(PageButton)`
  font-size: 16px;
  padding: 5px 10px;
`;
