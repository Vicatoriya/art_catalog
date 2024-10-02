import React from 'react';
import { Container } from './styled';
import ImageInformation from '../../constants/ImageInformation';

export default function ImgCardInfo(props: ImageInformation) {
  return (
    <>
      <Container>
        <p id="title">{props.title}</p>
        <p id="artist">{props.artist}</p>
        <p id="date">{props.date}</p>
      </Container>
    </>
  );
}
