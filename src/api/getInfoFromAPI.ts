import { parseImages } from '@api/parseImages';
import getInfoFromAPIProps from '@mytypes/GetInfoFromAPIProps';

export default function getInfoFromAPI({
  request,
  setLoading,
  setError,
  setImages,
}: getInfoFromAPIProps) {
  setLoading(true);
  fetch(request)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        setError('HTTP error: ' + response.status);
      }
    })
    .then((imagesInfo) => {
      setImages(parseImages(imagesInfo));
    })
    .catch(() => {
      setError('Failed to fetch data');
    })
    .finally(() => setLoading(false));
}
