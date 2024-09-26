import React from 'react';
import { GalleryItemInfo, Span, FavIcon } from './styled';
import fav from '../../assets/fav.png';
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
      <FavIcon>
        <img src={fav} alt="Add to favorites" />
      </FavIcon>
    </>
  );
}
