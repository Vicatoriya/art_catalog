import React from 'react';
import { Container } from './styled';
import Heading from '../Heading';
import ImgCard from './ImgCard';
export default function OtherWorks() {
  return (
    <>
      <Heading text="Other works for you" />
      <Container>
        <ImgCard />
        <ImgCard />
        <ImgCard />
        <ImgCard />
        <ImgCard />
      </Container>
    </>
  );
}
