import { COMPONENTS } from '@constants/Components';
import ImgProps from '@mytypes/ImgProps';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ImagePage() {
  const [imgInfo, setImgInfo] = useState<ImgProps>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    getImgInfo();
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
            <COMPONENTS.ImgSection {...(imgInfo as ImgProps)} />
          </main>
          <COMPONENTS.Footer />
        </>
      )}
    </>
  );
}
