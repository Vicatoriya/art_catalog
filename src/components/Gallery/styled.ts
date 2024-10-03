import styled from 'styled-components';

export const Gallery = styled.section`
  margin-bottom: 50px;
`;

export const GalleryGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  transition: opacity 0.5s ease-in-out;
  opacity: 1;

  &.fade-out {
    opacity: 0;
  }
`;
