import GalleryItem from '@components/GalleryItem';
import Pagination from '@components/Pagination';
import GalleryProps from '@mytypes/GalleryProps';
import { useState } from 'react';

import { GalleryGrid, GalleryWrapper } from './styled';

export default function Gallery({ totalPages, images }: GalleryProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePageChange = (page: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <GalleryWrapper>
      <GalleryGrid className={isAnimating ? 'fade-out' : ''} role="gallery">
        <GalleryItem {...images[(currentPage - 1) * 3]} />
        <GalleryItem {...images[(currentPage - 1) * 3 + 1]} />
        <GalleryItem {...images[(currentPage - 1) * 3 + 2]} />
      </GalleryGrid>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </GalleryWrapper>
  );
}
