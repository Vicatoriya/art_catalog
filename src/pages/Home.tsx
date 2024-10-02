import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import SpecialGallery from '../components/SpecialGallery';
import ImgList from '../components/ImgList';
import Heading from '../components/StandardHeading';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import ImageInformation from '../constants/ImageInformation';

export default function Home() {
  const [images, setImages] = useState<Array<ImageInformation>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const totalSpecialGalleryPages = 10;

  useEffect(() => {
    getImages();
    return;
  }, []);

  function getImages() {
    setLoading(true);
    fetch(
      'https://api.artic.edu/api/v1/artworks?fields=id,image_id,title,artist_title,date_display&limit=40'
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

  function parseImagesJSON(json: any): Array<ImageInformation> {
    let arr: Array<ImageInformation> = [];
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
        <main>
          <Search />
          <Heading text="Our special gallery" />
          <SpecialGallery
            images={images.slice(0, totalSpecialGalleryPages * 3)}
            totalPages={totalSpecialGalleryPages}
          />
          <Heading text="Other works for you" />
          <ImgList imgs={images.slice(-6)} />
        </main>
      )}
      <Footer />
    </>
  );
}
