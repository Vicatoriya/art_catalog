import styled from 'styled-components';

export const ImgListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 0 10%;

  @media (min-width: 600px) and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 20px;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 20px;
  }
`;
