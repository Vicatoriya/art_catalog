import styled from 'styled-components';

export const SelectWrapper = styled.div`
  margin-bottom: 20px;
  @media (max-width: 420px) {
    margin-bottom: 0;
  }
`;

export const SortLabel = styled.label`
  margin-right: 10px;
  font-size: 18px;
  font-weight: 500;
`;

export const SortSelect = styled.select`
  padding: 5px;
  font-size: 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
`;
