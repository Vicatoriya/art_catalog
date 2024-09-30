import React, { useState, useEffect } from 'react';
import Image from '../components/Image';
import { useParams } from 'react-router-dom';
import { ImageProps } from '../components/Image';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loader from '../components/Loader';

export default function ImagePage() {
  const [imgInfo, setImgInfo] = useState<ImageProps>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getImgInfo();
    return;
  }, []);

  const { id } = useParams();

  function getImgInfo() {
    setLoading(true);
    fetch(
      'https://api.artic.edu/api/v1/artworks/' +
        id +
        '?fields=image_id,title,artist_title,date_display,dimensions,place_of_origin,medium_display,credit_line'
    )
      .then(function (response) {
        if (response.ok) return response.json();
        else {
          alert('Ошибка HTTP: ' + response.status);
        }
      })
      .then(function (json) {
        setImgInfo(parseJSON(json));
      })
      .finally(() => setLoading(false));
  }

  function parseJSON(json: any): ImageProps {
    const img: ImageProps = {
      id: id as string,
      dimensions: json.data.dimensions,
      place: json.data.place_of_origin,
      title: json.data.title,
      artist: json.data.artist_title,
      date: json.data.date_display,
      credit_line: json.data.credit_line,
      medium: json.data.medium_display,
      imageURL:
        json.config.iiif_url +
        '/' +
        json.data.image_id +
        '/full/843,/0/default.jpg',
    };
    return img;
  }
  return (
    <>
      <Header />
      <main>
        {loading ? <Loader /> : <Image {...(imgInfo as ImageProps)} />}
      </main>
      <Footer />
    </>
  );
}
