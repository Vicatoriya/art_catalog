import ExtendedImageInformation from '@mytypes/ExtendedImageInformation';
import ImageAPIData from '@mytypes/ImageAPIData';
import ImageInformation from '@mytypes/ImageInformation';
import ImagesAPIData from '@mytypes/ImagesAPIData';

export function parseImagesInfo({
  data,
  config,
}: ImagesAPIData): Array<ImageInformation> {
  const arr: Array<ImageInformation> = [];
  for (let i = 0; i < data.length; i++) {
    arr[i] = data[i];
    arr[i].image_id =
      data[i].image_id == null
        ? ''
        : config.iiif_url + '/' + data[i].image_id + '/full/843,/0/default.jpg';
  }
  return arr;
}

export function parseImageInfo({
  data,
  config,
}: ImageAPIData): ExtendedImageInformation {
  const img: ExtendedImageInformation = data;
  img.image_id =
    data.image_id == null
      ? ''
      : config.iiif_url + '/' + data.image_id + '/full/843,/0/default.jpg';
  return img;
}
