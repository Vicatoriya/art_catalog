import { useState } from 'react';
import { Gallery, GalleryGrid } from './styled';
import GalleryItem from '../GalleryItem';
import Pagination from '../Pagination';
import ImageInformation from '../../types/ImageInformation';

interface SpecialGalleryProps {
  totalPages: number;
  images: Array<ImageInformation>;
}

export default function SpecialGallery(props: SpecialGalleryProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePageChange = (page: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <Gallery>
      <GalleryGrid className={isAnimating ? 'fade-out' : ''}>
        <GalleryItem {...props.images[(currentPage - 1) * 3]} />
        <GalleryItem {...props.images[(currentPage - 1) * 3 + 1]} />
        <GalleryItem {...props.images[(currentPage - 1) * 3 + 2]} />
      </GalleryGrid>
      <Pagination
        currentPage={currentPage}
        totalPages={props.totalPages}
        onPageChange={handlePageChange}
      />
    </Gallery>
  );
}
