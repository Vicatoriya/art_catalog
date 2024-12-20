import getInfoFromAPI from '@api/getInfoFromAPI';
import { parseImageInfo } from '@api/parseImages';
import ErrorPopUp from '@components/ErrorPopUp';
import Footer from '@components/Footer';
import Header from '@components/Header';
import ImgSection from '@components/ImgSection';
import Loader from '@components/Loader';
import ExtendedImageInformation from '@mytypes/ExtendedImageInformation';
import ImageAPIData from '@mytypes/ImageAPIData';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ImagePage() {
  const [imgInfo, setImgInfo] = useState<ExtendedImageInformation>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetchImages();
  }, []);

  const { id } = useParams();

  const fetchImages = async () => {
    const result = await getInfoFromAPI({
      request:
        'https://api.artic.edu/api/v1/artworks/' +
        id +
        '?fields=id,image_id,title,artist_title,date_display,dimensions,place_of_origin,medium_display,credit_line',
      setLoading,
      setError,
    });
    if (result !== null) {
      setImgInfo(parseImageInfo(result as ImageAPIData));
    }
  };

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
            <ImgSection {...(imgInfo as ExtendedImageInformation)} />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
