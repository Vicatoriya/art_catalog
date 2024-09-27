import React from 'react';
import { GalleryItemInfo, Span } from './styled';
import FavIcon from '../FavIcon';
import fav from '../../assets/fav_bright.png';
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
