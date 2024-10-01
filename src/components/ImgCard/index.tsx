import React from 'react';
import { Container } from './styled';
import ImgCardInfo from '../ImgCardInfo';
import { useNavigate } from 'react-router-dom';
import ImageInformation from '../../constants/ImageInformation';

export default function ImgCard(props: ImageInformation) {
  const navigate = useNavigate();

  const toggleImgCard = () => {
    navigate('/image/' + props.id);
  };

  return (
    <Container onClick={toggleImgCard}>
      <img id="main_pic" src={props.imgURL} alt={props.title} />
      <ImgCardInfo {...props} />
    </Container>
  );
}
