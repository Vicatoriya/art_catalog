import { useState } from 'react';
import { GalleryWrapper, Gallery } from './styled';
import GalleryItem from '@components/GalleryItem';
import Pagination from '@components/Pagination';
import ImageInformation from '../../types/ImageInformation';

interface SpecialGalleryProps {
  totalPages: number;
  images: Array<ImageInformation>;
}

export default function SpecialGallery(props: SpecialGalleryProps) {
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
      <Gallery className={isAnimating ? 'fade-out' : ''} role="gallery">
        <GalleryItem {...props.images[(currentPage - 1) * 3]} />
        <GalleryItem {...props.images[(currentPage - 1) * 3 + 1]} />
        <GalleryItem {...props.images[(currentPage - 1) * 3 + 2]} />
      </Gallery>
      <Pagination
        currentPage={currentPage}
        totalPages={props.totalPages}
        onPageChange={handlePageChange}
      />
    </GalleryWrapper>
  );
}
