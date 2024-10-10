import ImageInformation from './ImageInformation';

export default interface ImagesAPIData {
  data: Array<ImageInformation>;
  config: { iiif_url: string };
}
