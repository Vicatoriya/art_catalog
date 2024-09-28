import React from 'react';
import ImgList from '../components/ImgList';
import Heading from '../components/StandardHeading';
import StyledHeading from '../components/StyledHeading';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <>
      <Header />
      <StyledHeading
        text_start="Here Are Your "
        feature="Favorites"
        text_end=""
      />
      <Heading text="Your favorites list"></Heading>
      {/* <ImgList imgAmount={9} /> */}
      <Footer />
    </>
  );
}
