import Footer from '@components/Footer';
import Gallery from '@components/Gallery';
import Header from '@components/Header';
import ImgList from '@components/ImgList';
import Loader from '@components/Loader';
import SearchBar from '@components/SearchBar';
import Heading from '@components/StandardHeading';
import StyledHeading from '@components/StyledHeading';
import {
  GALLERY_IMAGES_PER_PAGE_AMOUNT,
  GALLERY_PAGES_AMOUNT,
} from '@constants/GalleryConstants';
import ImageInformation from '@mytypes/ImageInformation';
import { useEffect, useState } from 'react';
import { parseImages } from 'src/api/parseImages';

export default function Home() {
  const [images, setImages] = useState<Array<ImageInformation>>([]);
  const [loading, setLoading] = useState<boolean>(false);

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
              text_start="Let's Find Some "
              feature="Art"
              text_end=" Here!"
            />
            <SearchBar />
            <Heading text="Our special gallery" />
            <Gallery
              images={images.slice(
                0,
                GALLERY_PAGES_AMOUNT * GALLERY_IMAGES_PER_PAGE_AMOUNT
              )}
              totalPages={GALLERY_PAGES_AMOUNT}
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
