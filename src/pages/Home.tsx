import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import SpecialGallery from '../components/SpecialGallery';
import ImgList from '../components/ImgList';
import Heading from '../components/StandardHeading';

export interface ImageInfo {
  info: {
    image_id: string;
    title: string;
    artist_title: string;
    credit_line: string;
    date_display: string;
    medium: string;
    place_of_origin: string;
    dimenstions: string;
  };
  imgURL: string;
}

export default function Home() {
  const [images, setImages] = useState<Array<ImageInfo>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getImages();
    return;
  }, []);

  function getImages() {
    setLoading(true);
    fetch(
      'https://api.artic.edu/api/v1/artworks?fields=image_id,title,artist_title,date_display,credit_line,dimensions,place_of_origin,medium&limit=50'
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
        info: json.data[i],
        imgURL:
          json.config.iiif_url +
          '/' +
          json.data[i].image_id +
          '/full/843,/0/default.jpg',
      };
    }
    return arr;
  }
  let temp = loading ? <h1>Loading</h1> : <ImgList imgs={images.slice(0, 6)} />;
  return (
    <>
      <Search />
      <SpecialGallery />
      <Heading text="Other works for you" />
      {temp}
    </>
  );
}
