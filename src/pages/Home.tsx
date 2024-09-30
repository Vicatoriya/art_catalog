import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import SpecialGallery from '../components/SpecialGallery';
import ImgList from '../components/ImgList';
import Heading from '../components/StandardHeading';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

export interface ImageInfo {
  id: string;
  title: string;
  artist: string;
  date: string;
  imgURL: string;
}

export default function Home() {
  const [images, setImages] = useState<Array<ImageInfo>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getImages();
    return;
  }, []);

  function getImages() {
    setLoading(true);
    fetch(
      'https://api.artic.edu/api/v1/artworks?fields=id,image_id,title,artist_title,date_display&limit=20'
    )
      .then(function (response) {
        if (response.ok) return response.json();
        else {
          alert('Ошибка HTTP: ' + response.status);
        }
      })
      .then(function (json) {
        setImages(parseImagesJSON(json));
      })
      .finally(() => setLoading(false));
  }

  function parseImagesJSON(json: any): Array<ImageInfo> {
    let arr: Array<ImageInfo> = [];
    for (let i = 0; i < json.data.length; i++) {
      arr[i] = {
        id: json.data[i].id,
        title: json.data[i].title,
        artist: json.data[i].artist_title,
        date: json.data[i].date_display,
        imgURL:
          json.config.iiif_url +
          '/' +
          json.data[i].image_id +
          '/full/843,/0/default.jpg',
      };
    }
    return arr;
  }

  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Search />
          <SpecialGallery />
          <Heading text="Other works for you" />
          <ImgList imgs={images.slice(0, 6)} />
        </>
      )}
      <Footer />
    </>
  );
}
