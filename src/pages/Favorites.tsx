import React, { useState, useEffect } from 'react';
import ImgList from '../components/ImgList';
import Heading from '../components/StandardHeading';
import StyledHeading from '../components/StyledHeading';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ImageInfo } from './Home';
import Loader from '../components/Loader';

export default function Favorites() {
  const [images, setImages] = useState<Array<ImageInfo>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getImages();
    return;
  }, Object.keys(sessionStorage));

  let isEmptyTitle =
    sessionStorage.length === 0 ? (
      <StyledHeading
        text_start="It's "
        feature="empty"
        text_end=" now("
      ></StyledHeading>
    ) : null;

  function getImages() {
    if (sessionStorage.length === 0) {
      return;
    }
    setLoading(true);
    let ids = Object.keys(sessionStorage).join(',');
    setLoading(true);
    fetch(
      'https://api.artic.edu/api/v1/artworks?ids=' +
        ids +
        '&fields=id,image_id,title,artist_title,date_display'
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
        <main>
          <StyledHeading
            text_start="Here Are Your "
            feature="Favorites"
            text_end=""
          />
          <Heading text="Your favorites list"></Heading>
          <ImgList imgs={images} />
          {isEmptyTitle}
        </main>
      )}
      <Footer />
    </>
  );
}
