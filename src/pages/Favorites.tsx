import { useState, useEffect } from 'react';
import ImgList from '@components/ImgList';
import Heading from '@components/StandardHeading';
import StyledHeading from '@components/StyledHeading';
import Header from '@components/Header';
import Footer from '@components/Footer';
import ImageInformation from '../types/ImageInformation';
import Loader from '@components/Loader';
import { parseImages } from '../utils/parseImages';

export default function Favorites() {
  const [images, setImages] = useState<Array<ImageInformation>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getImages();
  }, Object.keys(sessionStorage));

  const isEmptyTitle =
    Object.values(sessionStorage).filter((value) => {
      return value === '';
    }).length == 0 ? (
      <StyledHeading
        text_start="It's "
        feature="empty"
        text_end=" now("
      ></StyledHeading>
    ) : null;

  function getImages() {
    const ids = Object.keys(sessionStorage)
      .filter((value) => {
        return sessionStorage.getItem(value) === '';
      })
      .join(',');
    if (ids.length === 0) {
      return;
    }
    setLoading(true);
    fetch(
      'https://api.artic.edu/api/v1/artworks?ids=' +
        ids +
        '&fields=id,image_id,title,artist_title,date_display'
    )
      .then(function (response) {
        if (response.ok) return response.json();
        else {
          alert('HTTP error: ' + response.status);
        }
      })
      .then(function (imagesInfo) {
        setImages(parseImages(imagesInfo));
      })
      .finally(() => setLoading(false));
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
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
          <Footer />
        </>
      )}
    </>
  );
}
