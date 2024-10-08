import ImageInformation from 'src/types/ImageInformation';

export function parseImages(imagesInfo: any): Array<ImageInformation> {
  const arr: Array<ImageInformation> = [];
  for (let i = 0; i < imagesInfo.data.length; i++) {
    arr[i] = {
      id: imagesInfo.data[i].id,
      title: imagesInfo.data[i].title,
      artist: imagesInfo.data[i].artist_title,
      date: imagesInfo.data[i].date_display,
      imgURL:
        imagesInfo.config.iiif_url +
        '/' +
        imagesInfo.data[i].image_id +
        '/full/843,/0/default.jpg',
    };
    if (imagesInfo.data[i].image_id == null) {
      arr[i].imgURL = '';
    }
  }
  return arr;
}
