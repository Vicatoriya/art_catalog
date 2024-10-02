import React from 'react';
import { Container, SingleLineEllipsis } from './styled';
import ImageInformation from '../../constants/ImageInformation';

export default function GalleryItemInfo(props: ImageInformation) {
  return (
    <>
      <Container>
        <SingleLineEllipsis id="title">{props.title}</SingleLineEllipsis>
        <SingleLineEllipsis id="artist">{props.artist}</SingleLineEllipsis>
        <SingleLineEllipsis id="date">{props.date}</SingleLineEllipsis>
      </Container>
    </>
  );
}
