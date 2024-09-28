import React from 'react';
import { Container } from './styled';
import ImgCardInfo from '../../ImgCardInfo';
import image from '../../../assets/person.png';

interface ImgCardProps {
  imgURL: string;
  artist: string;
  title: string;
  date: string;
}
export default function ImgCard(props: ImgCardProps) {
  return (
    <Container>
      <img id="main_pic" src={props.imgURL} alt={props.title} />
      <ImgCardInfo
        artist={props.artist}
        title={props.title}
        date={props.date}
      />
    </Container>
  );
}
