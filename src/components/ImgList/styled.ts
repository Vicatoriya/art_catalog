import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 0 10%;
  @media (max-width: 420px) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 20px;
  }
`;
