import getInfoFromAPI from '@api/getInfoFromAPI';
import ErrorPopUp from '@components/ErrorPopUp';
import Footer from '@components/Footer';
import Header from '@components/Header';
import ImgList from '@components/ImgList';
import Loader from '@components/Loader';
import StandardHeading from '@components/StandardHeading';
import StyledHeading from '@components/StyledHeading';
import { FAVORITES_LIST_KEY } from '@constants/SessionStorageConstants';
import ImageInformation from '@mytypes/ImageInformation';
import SessionStorageService from '@utils/SessionStorageService';
import { useEffect, useState } from 'react';

export default function Favorites() {
  const [images, setImages] = useState<Array<ImageInformation>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const storage = new SessionStorageService();

  useEffect(() => {
    getImages();
  }, []);

  const isEmptyTitle = !storage.hasItem(FAVORITES_LIST_KEY) ? (
    <StyledHeading text_start="It's " feature="empty" text_end=" now(" />
  ) : null;

  function getImages() {
    if (!storage.hasItem(FAVORITES_LIST_KEY)) {
      return;
    }
    const ids = storage.getItem<Array<string>>(FAVORITES_LIST_KEY)?.join(',');
    if (ids?.length === 0) {
      return;
    }
    getInfoFromAPI({
      request:
        'https://api.artic.edu/api/v1/artworks?ids=' +
        ids +
        '&fields=id,image_id,title,artist_title,date_display',
      setLoading,
      setError,
      setImages,
    });
  }

  const popUpCloseHandler = () => {
    setError('');
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ErrorPopUp
            error={error}
            visible={error != ''}
            onClose={popUpCloseHandler}
          />
          <Header />
          <main>
            <StyledHeading
              text_start="Here Are Your "
              feature="Favorites"
              text_end=""
            />
            <StandardHeading text="Your favorites list" />
            <ImgList imgs={images} />
            {isEmptyTitle}
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
