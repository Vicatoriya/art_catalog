import React from 'react';
import '../index.css';
import Search from '../components/Search';
import SpecialGallery from '../components/SpecialGallery';
import ImgList from '../components/ImgList';
import Heading from '../components/StandardHeading';
export default function Home() {
  return (
    <>
      <Search />
      <SpecialGallery />
      <Heading text="Other works for you" />
      <ImgList imgAmount={6} />
    </>
  );
}
