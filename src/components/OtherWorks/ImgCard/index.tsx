import React from 'react';
import { Container } from './styled';
import ImgInfo from '../../ImgInfo';
import image from '../../../assets/image.png';
export default function ImgCard() {
  return (
    <Container>
      <img id="main_pic" src={image} alt="Charles V" />
      <ImgInfo />
    </Container>
  );
}
