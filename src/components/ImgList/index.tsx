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
      title={value.info.title ?? 'Undefined'}
      date={value.info.date_display ?? 'Undefined'}
      artist={value.info?.artist_title ?? 'Undefined'}
      key={index}
    />
  ));
  return (
    <>
      <Container>{cards}</Container>
    </>
  );
}
