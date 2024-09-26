import React from 'react';
import { Container } from './styled';
import Heading from '../StandardHeading';
import ImgCard from './ImgCard';

type Props = {
  imgAmount: number;
};
export default function ImgList(props: Props) {
  const cards: JSX.Element[] = [];
  for (let i = 0; i < props.imgAmount; i++) {
    cards.push(<ImgCard />);
  }

  return (
    <>
      <Container>{cards}</Container>
    </>
  );
}
