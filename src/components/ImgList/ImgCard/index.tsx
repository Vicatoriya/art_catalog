import React from 'react';
import { Container } from './styled';
import ImgCardInfo from '../../ImgCardInfo';
import image from '../../../assets/person.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ImageInfo } from '../../../pages/Home';

export default function ImgCard(props: ImageInfo) {
  const navigate = useNavigate();

  const toggleImgCard = () => {
    navigate('image/' + props.id);
  };

  return (
    <Container onClick={toggleImgCard}>
      <img id="main_pic" src={props.imgURL} alt={props.title} />
      <ImgCardInfo
        artist={props.artist}
        title={props.title}
        date={props.date}
        id={props.id}
      />
    </Container>
  );
}
