import React from 'react';
import { Container, Image } from './styled';
import ImgInfo from '../../ImgInfo';
import image from '../../../assets/image.png';
import fav from '../../../assets/fav.png';
export default function GalleryItem() {
  return (
    <Container>
      <Image src={image} alt="Charles V" />
      <ImgInfo />
    </Container>
  );
}
