import styled from 'styled-components';

export const GalleryWrapper = styled.section`
  margin-bottom: 50px;
  @media (max-width: 420px) {
    margin-bottom: 35px;
    margin-top: 20px;
  }
`;

export const Gallery = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  transition: opacity 0.5s ease-in-out;
  opacity: 1;

  &.fade-out {
    opacity: 0;
  }

  @media (max-width: 420px) {
    gap: 10px;
  }
`;
