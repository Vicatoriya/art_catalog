import React from "react";
import { Gallery, GalleryHeading, GalleryGrid } from "./styled";
import GalleryItem from "./GalleryItem";
import Pagination from "./Pagination";
export default function SpecialGallery() {
  return (
    <Gallery>
      <GalleryHeading>Our special gallery</GalleryHeading>
      <GalleryGrid>
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
      </GalleryGrid>
      <Pagination></Pagination>
    </Gallery>
  );
}
