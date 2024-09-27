import React from 'react';
import { Container } from './styled';
import Heading from '../StandardHeading';
import ImgCard from './ImgCard';

interface ImgListProps {
  imgAmount: number;
}
export default function ImgList(props: ImgListProps) {
  const cards: JSX.Element[] = [];
  for (let i = 0; i < props.imgAmount; i++) {
    cards.push(<ImgCard key={i} />);
  }

  return (
    <>
      <Container>{cards}</Container>
    </>
  );
}
