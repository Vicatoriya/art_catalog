import ImageInformation from '@mytypes/ImageInformation';

export default interface ImagesAPIData {
  data: Array<ImageInformation>;
  config: { iiif_url: string };
}
