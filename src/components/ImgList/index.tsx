import React from 'react';
import { Container } from './styled';
import ImgCard from '../ImgCard';
import ImageInformation from '../../constants/ImageInformation';

interface ImgListProps {
  imgs: Array<ImageInformation>;
}
export default function ImgList(props: ImgListProps) {
  const cards = props.imgs.map((value, index) => (
    <ImgCard {...value} key={value.id} />
  ));
  return (
    <>
      <Container>{cards}</Container>
    </>
  );
}
