import { useEffect, useState } from 'react';
import SearchBar from '@components/SearchBar';
import Gallery from '@components/Gallery';
import ImgList from '@components/ImgList';
import Heading from '@components/StandardHeading';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Loader from '@components/Loader';
import ImageInformation from '../types/ImageInformation';
import StyledHeading from '@components/StyledHeading';
import { parseImages } from '../utils/parseImages';

export default function Home() {
  const [images, setImages] = useState<Array<ImageInformation>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const totalSpecialGalleryPages = 10;

  useEffect(() => {
    getImages();
  }, []);

  function getImages() {
    setLoading(true);
    fetch(
      'https://api.artic.edu/api/v1/artworks?page=2&fields=id,image_id,title,artist_title,date_display&limit=36'
    )
      .then(function (response) {
        if (response.ok) return response.json();
        else {
          alert('Ошибка HTTP: ' + response.status);
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
              text_start="Let's Find Some "
              feature="Art"
              text_end=" Here!"
            />
            <SearchBar />
            <Heading text="Our special gallery" />
            <Gallery
              images={images.slice(0, totalSpecialGalleryPages * 3)}
              totalPages={totalSpecialGalleryPages}
            />
            <Heading text="Other works for you" />
            <ImgList imgs={images.slice(-6)} />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
