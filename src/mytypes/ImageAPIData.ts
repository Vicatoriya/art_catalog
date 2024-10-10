import ExtendedImageInformation from './ExtendedImageInformation';

export default interface ImageAPIData {
  data: ExtendedImageInformation;
  config: { iiif_url: string };
}
