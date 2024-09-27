import React from 'react';
import { GalleryItemInfo, Span } from './styled';
import FavIcon from '../FavIcon';
export default function ImgInfo() {
  return (
    <>
      <GalleryItemInfo>
        <p>
          Charles V, bust length... <br />
          <span>Giovanni Britto</span>
        </p>
        <Span>Public</Span>
      </GalleryItemInfo>
      <FavIcon />
    </>
  );
}
