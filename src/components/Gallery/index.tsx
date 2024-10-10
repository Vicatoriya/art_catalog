import ErrorPopUp from '@components/ErrorPopUp';
import GalleryItem from '@components/GalleryItem';
import Pagination from '@components/Pagination';
import GalleryProps from '@mytypes/GalleryProps';
import { useState } from 'react';

import { GalleryGrid, GalleryWrapper } from './styled';

export default function Gallery({ totalPages, firstImages }: GalleryProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  // const [images,setImages]=useState<Array<ImageInformation>>(firstImages);
  const [error, setError] = useState<string>('');

  const handlePageChange = (page: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsAnimating(false);
    }, 500);
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
      <GalleryGrid className={isAnimating ? 'fade-out' : ''} role="gallery">
        <GalleryItem {...firstImages[(currentPage - 1) * 3]} />
        <GalleryItem {...firstImages[(currentPage - 1) * 3 + 1]} />
        <GalleryItem {...firstImages[(currentPage - 1) * 3 + 2]} />
      </GalleryGrid>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </GalleryWrapper>
  );
}
