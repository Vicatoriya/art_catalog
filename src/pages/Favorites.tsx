import Footer from '@components/Footer';
import Header from '@components/Header';
import ImgList from '@components/ImgList';
import Loader from '@components/Loader';
import Heading from '@components/StandardHeading';
import StyledHeading from '@components/StyledHeading';
import { FAVORITES_LIST_KEY } from '@constants/SessionStorageConstants';
import ImageInformation from '@mytypes/ImageInformation';
import SessionStorageService from '@utils/SessionStorageService';
import { useEffect, useState } from 'react';
import { parseImages } from 'src/api/parseImages';

export default function Favorites() {
  const [images, setImages] = useState<Array<ImageInformation>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const storage = new SessionStorageService();

  useEffect(() => {
    getImages();
  }, storage.getItem(FAVORITES_LIST_KEY));

  const isEmptyTitle =
    storage.getItem<Array<string>>(FAVORITES_LIST_KEY)?.length === 0 ? (
      <StyledHeading
        text_start="It's "
        feature="empty"
        text_end=" now("
      ></StyledHeading>
    ) : null;

  function getImages() {
    if (!storage.hasItem(FAVORITES_LIST_KEY)) {
      return;
    }
    const ids = storage.getItem<Array<string>>(FAVORITES_LIST_KEY)?.join(',');
    if (ids?.length === 0) {
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
