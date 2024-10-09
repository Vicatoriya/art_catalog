import ImageInformation from './ImageInformation';

export default interface GalleryProps {
  totalPages: number;
  images: Array<ImageInformation>;
}
