import { useState, useEffect } from 'react';
import ImgSection from '@components/ImgSection';
import { useParams } from 'react-router-dom';
import ImgProps from 'src/mytypes/ImgProps';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Loader from '@components/Loader';

export default function ImagePage() {
  const [imgInfo, setImgInfo] = useState<ImgProps>();
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
          alert('HTTP error: ' + response.status);
        }
      })
      .then(function (imageInfo) {
        setImgInfo(parseImage(imageInfo));
      })
      .finally(() => setLoading(false));
  }

  function parseImage(imageInfo: any): ImgProps {
    const img: ImgProps = {
      id: id as string,
      dimensions: imageInfo.data.dimensions,
      place: imageInfo.data.place_of_origin,
      title: imageInfo.data.title,
      artist: imageInfo.data.artist_title,
      date: imageInfo.data.date_display,
      credit_line: imageInfo.data.credit_line,
      medium: imageInfo.data.medium_display,
      imageURL:
        imageInfo.config.iiif_url +
        '/' +
        imageInfo.data.image_id +
        '/full/843,/0/default.jpg',
    };
    if (imageInfo.data.image_id == null) {
      img.imageURL = '';
    }
    return img;
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main>
            <ImgSection {...(imgInfo as ImgProps)} />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
