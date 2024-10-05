import ImageInformation from 'src/types/ImageInformation';

export function parseImagesJSON(json: any): Array<ImageInformation> {
  const arr: Array<ImageInformation> = [];
  for (let i = 0; i < json.data.length; i++) {
    arr[i] = {
      id: json.data[i].id,
      title: json.data[i].title,
      artist: json.data[i].artist_title,
      date: json.data[i].date_display,
      imgURL:
        json.config.iiif_url +
        '/' +
        json.data[i].image_id +
        '/full/843,/0/default.jpg',
    };
    if (json.data[i].image_id == null) {
      arr[i].imgURL = '';
    }
  }
  return arr;
}
