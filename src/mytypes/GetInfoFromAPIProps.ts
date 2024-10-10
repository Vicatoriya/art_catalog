import ImageInformation from './ImageInformation';

export default interface getInfoFromAPIProps {
  request: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setImages: React.Dispatch<React.SetStateAction<Array<ImageInformation>>>;
}
