import getInfoFromAPI from '@api/getInfoFromAPI';
import { COMPONENTS } from '@constants/Components';
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
    <COMPONENTS.StyledHeading
      text_start="It's "
      feature="empty"
      text_end=" now("
    />
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
        <COMPONENTS.Loader />
      ) : (
        <>
          <COMPONENTS.ErrorPopUp
            error={error}
            visible={error != ''}
            onClose={popUpCloseHandler}
          />
          <COMPONENTS.Header />
          <main>
            <COMPONENTS.StyledHeading
              text_start="Here Are Your "
              feature="Favorites"
              text_end=""
            />
            <COMPONENTS.StandardHeading text="Your favorites list" />
            <COMPONENTS.ImgList imgs={images} />
            {isEmptyTitle}
          </main>
          <COMPONENTS.Footer />
        </>
      )}
    </>
  );
}
