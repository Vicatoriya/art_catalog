import getInfoFromAPI from '@api/getInfoFromAPI';
import { parseImagesInfo } from '@api/parseImages';
import ErrorPopUp from '@components/ErrorPopUp';
import Footer from '@components/Footer';
import Gallery from '@components/Gallery';
import Header from '@components/Header';
import ImgList from '@components/ImgList';
import Loader from '@components/Loader';
import SearchBar from '@components/SearchBar';
import StandardHeading from '@components/StandardHeading';
import StyledHeading from '@components/StyledHeading';
import { GALLERY_PAGES_AMOUNT } from '@constants/GalleryConstants';
import ImageInformation from '@mytypes/ImageInformation';
import ImagesAPIData from '@mytypes/ImagesAPIData';
import { useEffect, useState } from 'react';

export default function Home() {
  const [images, setImages] = useState<Array<ImageInformation>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchImages = async () => {
    const result = await getInfoFromAPI({
      request:
        'https://api.artic.edu/api/v1/artworks?page=2&fields=id,image_id,title,artist_title,date_display&limit=6',
      setLoading,
      setError,
    });
    if (result !== null) {
      setImages(parseImagesInfo(result as ImagesAPIData));
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

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
            visible={error !== ''}
            onClose={popUpCloseHandler}
          />
          <Header />
          <main>
            <StyledHeading
              text_start="Let's Find Some "
              feature="Art"
              text_end=" Here!"
            />
            <SearchBar />
            <StandardHeading text="Our special gallery" />
            <Gallery totalPages={GALLERY_PAGES_AMOUNT} />
            <StandardHeading text="Other works for you" />
            <ImgList imgs={images} />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
