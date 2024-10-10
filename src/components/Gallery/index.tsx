import getInfoFromAPI from '@api/getInfoFromAPI';
import { parseImagesInfo } from '@api/parseImages';
import ErrorPopUp from '@components/ErrorPopUp';
import GalleryItem from '@components/GalleryItem';
import Pagination from '@components/Pagination';
import GalleryProps from '@mytypes/GalleryProps';
import ImageInformation from '@mytypes/ImageInformation';
import ImagesAPIData from '@mytypes/ImagesAPIData';
import { useEffect, useState } from 'react';

import { GalleryGrid, GalleryWrapper } from './styled';

export default function Gallery({ totalPages }: GalleryProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState<Array<ImageInformation>>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchImages(1);
  }, []);

  const handlePageChange = (page: number) => {
    fetchImages(page);
    setCurrentPage(page);
  };

  const fetchImages = async (page: number) => {
    const result = await getInfoFromAPI({
      request:
        'https://api.artic.edu/api/v1/artworks?page=' +
        (2 + page) +
        '&fields=id,image_id,title,artist_title,date_display&limit=3',
      setLoading,
      setError,
    });
    if (result !== null) {
      setImages(parseImagesInfo(result as ImagesAPIData));
    }
  };

  const popUpCloseHandler = () => {
    setError('');
  };

  return (
    <GalleryWrapper>
      <ErrorPopUp
        error={error}
        visible={error !== ''}
        onClose={popUpCloseHandler}
      />
      <GalleryGrid role="gallery">
        <GalleryItem {...images[0]} isLoading={isLoading} />
        <GalleryItem {...images[1]} isLoading={isLoading} />
        <GalleryItem {...images[2]} isLoading={isLoading} />
      </GalleryGrid>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </GalleryWrapper>
  );
}
