import getInfoFromAPI from '@api/getInfoFromAPI';
import { COMPONENTS } from '@constants/Components';
import {
  GALLERY_IMAGES_PER_PAGE_AMOUNT,
  GALLERY_PAGES_AMOUNT,
} from '@constants/GalleryConstants';
import ImageInformation from '@mytypes/ImageInformation';
import { useEffect, useState } from 'react';

export default function Home() {
  const [images, setImages] = useState<Array<ImageInformation>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    getInfoFromAPI({
      request:
        'https://api.artic.edu/api/v1/artworks?page=2&fields=id,image_id,title,artist_title,date_display&limit=36',
      setLoading,
      setError,
      setImages,
    });
  }, []);

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
            visible={error !== ''}
            onClose={popUpCloseHandler}
          />
          <COMPONENTS.Header />
          <main>
            <COMPONENTS.StyledHeading
              text_start="Let's Find Some "
              feature="Art"
              text_end=" Here!"
            />
            <COMPONENTS.SearchBar />
            <COMPONENTS.StandardHeading text="Our special gallery" />
            <COMPONENTS.Gallery
              images={images.slice(
                0,
                GALLERY_PAGES_AMOUNT * GALLERY_IMAGES_PER_PAGE_AMOUNT
              )}
              totalPages={GALLERY_PAGES_AMOUNT}
            />
            <COMPONENTS.StandardHeading text="Other works for you" />
            <COMPONENTS.ImgList imgs={images.slice(-6)} />
          </main>
          <COMPONENTS.Footer />
        </>
      )}
    </>
  );
}
