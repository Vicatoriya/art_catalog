import ImageInformation from './ImageInformation';

export default interface GalleryProps {
  totalPages: number;
  firstImages: Array<ImageInformation>;
}
