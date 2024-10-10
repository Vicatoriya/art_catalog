import getInfoFromAPIProps from '@mytypes/GetInfoFromAPIProps';

export default async function getInfoFromAPI({
  request,
  setLoading,
  setError,
}: getInfoFromAPIProps): Promise<any> {
  setLoading(true);
  try {
    const response = await fetch(request);
    if (!response.ok) {
      const errorMessage = `HTTP error: ${response.status}`;
      setError(errorMessage);
      return { error: errorMessage };
    }
    const imagesInfo = await response.json();
    return imagesInfo;
  } catch {
    const errorMessage = 'Failed to fetch data';
    setError(errorMessage);
    return { error: errorMessage };
  } finally {
    setLoading(false);
  }
}
