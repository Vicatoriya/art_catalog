import React from 'react';
import { Container } from './styled';
import ImgCardInfo from '../ImgCardInfo';
import { useNavigate } from 'react-router-dom';
import ImageInformation from '../../constants/ImageInformation';
import FavIcon from '../FavIcon';

export default function ImgCard(props: ImageInformation) {
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
      <img id="main_pic" src={props.imgURL} alt={props.title} />
      <ImgCardInfo {...props} />
      <FavIcon isFavorited={isFavorited} clickHandler={addToFavClickHandler} />
    </Container>
  );
}
