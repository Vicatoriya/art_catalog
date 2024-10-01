import React from 'react';
import { Container } from './styled';
import ImgCard from '../ImgCard';
import ImageInformation from '../../constants/ImageInformation';

interface ImgListProps {
  imgs: Array<ImageInformation>;
}
export default function ImgList(props: ImgListProps) {
  const cards = props.imgs.map((value, index) => (
    <ImgCard
      imgURL={value.imgURL}
      title={value.title}
      artist={value.artist}
      key={value.id}
      id={value.id}
    />
  ));
  return (
    <>
      <Container>{cards}</Container>
    </>
  );
}
