import React from 'react';
import '../index.css';
import ImgList from '../components/ImgList';
import Heading from '../components/StandardHeading';
import StyledHeading from '../components/StyledHeading';
export default function Home() {
  return (
    <>
      <StyledHeading
        text_start="Here Are Your "
        feature="Favorites"
        text_end=""
      />
      <Heading text="Your favorites list"></Heading>
      <ImgList imgAmount={9} />
    </>
  );
}
