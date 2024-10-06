import { useState } from 'react';
import { GalleryWrapper, GalleryGrid } from './styled';
import GalleryItem from '@components/GalleryItem';
import Pagination from '@components/Pagination';
import ImageInformation from '../../types/ImageInformation';

interface GalleryProps {
  totalPages: number;
  images: Array<ImageInformation>;
}

export default function Gallery(props: GalleryProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePageChange = (page: number) => {
    setIsAnimating(true);
    setCurrentPage(page);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <GalleryWrapper>
      <GalleryGrid className={isAnimating ? 'fade-out' : ''} role="gallery">
        <GalleryItem {...props.images[(currentPage - 1) * 3]} />
        <GalleryItem {...props.images[(currentPage - 1) * 3 + 1]} />
        <GalleryItem {...props.images[(currentPage - 1) * 3 + 2]} />
      </GalleryGrid>
      <Pagination
        currentPage={currentPage}
        totalPages={props.totalPages}
        onPageChange={handlePageChange}
      />
    </GalleryWrapper>
  );
}
