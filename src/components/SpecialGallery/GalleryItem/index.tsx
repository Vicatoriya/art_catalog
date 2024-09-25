import React from 'react';
import { Container, Image, GalleryItemInfo, Span, FavIcon } from './styled';
import image from '../../../assets/image.png';
import fav from '../../../assets/fav.png';
export default function GalleryItem() {
  return (
    <Container>
      <Image src={image} alt="Charles V" />
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
    </Container>
  );
}
