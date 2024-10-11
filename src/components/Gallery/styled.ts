import styled from 'styled-components';

export const GalleryWrapper = styled.section`
  max-width: 95%;
  margin: auto;
  @media (max-width: 420px) {
    margin-bottom: 35px;
    margin-top: 20px;
  }
`;

export const GalleryGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  transition: opacity 0.5s ease-in-out;
  @media (max-width: 420px) {
    gap: 10px;
  }
`;
