import React from 'react';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Search from '../components/Search';
import SpecialGallery from '../components/SpecialGallery';
import OtherWorks from '../components/OtherWorks';
export default function Home() {
  return (
    <div>
      <Header />
      <Search />
      <SpecialGallery />
      <OtherWorks />
      <main></main>
      <Footer />
    </div>
  );
}
