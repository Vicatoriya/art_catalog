import getInfoFromAPIProps from '@mytypes/GetInfoFromAPIProps';
import ImageAPIData from '@mytypes/ImageAPIData';
import ImagesAPIData from '@mytypes/ImagesAPIData';

export default async function getInfoFromAPI({
  request,
  setLoading,
  setError,
}: getInfoFromAPIProps): Promise<ImagesAPIData | ImageAPIData | null> {
  setLoading(true);
  try {
    const response = await fetch(request);
    if (!response.ok) {
      setError(`HTTP error: ${response.status}`);
      return null;
    }
    const imagesInfo = await response.json();
    return imagesInfo;
  } catch {
    setError('Failed to fetch data');
    return null;
  } finally {
    setLoading(false);
  }
}
