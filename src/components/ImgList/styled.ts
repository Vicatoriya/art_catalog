import styled from 'styled-components';

export const ImgListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  padding: 0 10%;
  justify-content: center;

  @media (max-width: 600px) {
    margin-top: 20px;
  }
`;
