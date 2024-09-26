import React from 'react';
import { Gallery, GalleryGrid } from './styled';
import GalleryItem from './GalleryItem';
import Pagination from './Pagination';
import Heading from '../Heading';
export default function SpecialGallery() {
  return (
    <Gallery>
      <Heading text="Our special gallery" />
      <GalleryGrid>
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
      </GalleryGrid>
      <Pagination></Pagination>
    </Gallery>
  );
}
