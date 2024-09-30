import React from 'react';
import { Container } from './styled';
import ImgCard from './ImgCard';
import { ImageInfo } from '../../pages/Home';

interface ImgListProps {
  imgs: Array<ImageInfo>;
}
export default function ImgList(props: ImgListProps) {
  const cards = props.imgs.map((value, index) => (
    <ImgCard
      imgURL={value.imgURL}
      title={value.title ?? 'Undefined'}
      date={value.date ?? 'Undefined'}
      artist={value.artist ?? 'Undefined'}
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
