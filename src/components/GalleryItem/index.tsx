import React from 'react';
import { Container, Image } from './styled';
import ImageInformation from '../../constants/ImageInformation';
import ImgCardInfo from '../ImgCardInfo';

export default function GalleryItem(props: ImageInformation) {
  return (
    <Container>
      <Image src={props.imgURL} alt={props.title} />
      <ImgCardInfo {...props} />
    </Container>
  );
}
