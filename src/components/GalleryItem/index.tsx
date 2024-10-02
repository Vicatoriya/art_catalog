import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Image } from './styled';
import ImageInformation from '../../types/ImageInformation';
import GalleryItemInfo from '../GalItemInfo';
import FavIcon from '../FavIcon';

export default function GalleryItem(props: ImageInformation) {
  const navigate = useNavigate();

  const toggleImgCard = () => {
    navigate('/image/' + props.id);
  };

  const addToFavClickHandler = () => {
    if (sessionStorage.getItem(props.id) != null) {
      sessionStorage.removeItem(props.id);
    } else {
      sessionStorage.setItem(props.id, '');
    }
  };

  let isFavorited: boolean = sessionStorage.getItem(props.id) != null;

  return (
    <Container onClick={toggleImgCard}>
      <Image src={props.imgURL} alt={props.title} />
      <GalleryItemInfo {...props} />
      <FavIcon clickHandler={addToFavClickHandler} isFavorited={isFavorited} />
    </Container>
  );
}
