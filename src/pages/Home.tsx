import React from 'react';
import '../index.css';
import Search from '../components/Search';
import SpecialGallery from '../components/SpecialGallery';
import OtherWorks from '../components/OtherWorks';
export default function Home() {
  return (
    <>
      <Search />
      <SpecialGallery />
      <OtherWorks />
    </>
  );
}
