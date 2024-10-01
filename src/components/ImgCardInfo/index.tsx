import React from 'react';
import { Container, Span, ClampedParagraph } from './styled';
import FavIcon from '../FavIcon';
import ImageInformation from '../../constants/ImageInformation';

export default function ImgCardInfo(props: ImageInformation) {
  const addToFavClickHandler = () => {
    if (sessionStorage.getItem(props.id) != null) {
      sessionStorage.removeItem(props.id);
    } else {
      sessionStorage.setItem(props.id, '');
    }
  };

  let isFavorited: boolean = sessionStorage.getItem(props.id) != null;
  return (
    <>
      <Container>
        <ClampedParagraph>{props.title}</ClampedParagraph>
        <p id="artist">{props.artist}</p>
      </Container>
      <FavIcon clickHandler={addToFavClickHandler} isFavorited={isFavorited} />
    </>
  );
}
