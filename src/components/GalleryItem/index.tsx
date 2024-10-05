import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemWrapper, Image } from './styled';
import ImageInformation from '../../types/ImageInformation';
import GalleryItemInfo from '@components/GalIeryItemInfo';
import FavIcon from '@components/FavIcon';
import imageHolder from '@assets/img_holder.webp';

export default function GalleryItem(props: ImageInformation) {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState<string>(props.imgURL);

  useEffect(() => {
    setImgSrc(props.imgURL);
  }, [props.imgURL]);

  const toggleImgCard = () => {
    navigate('/image/' + props.id);
  };

  const addToFavClickHandler = () => {
    if (sessionStorage.getItem(props.id) != null) {
      sessionStorage.removeItem(props.id);
    } else {
      sessionStorage.setItem(props.id, '');
    }
  };

  const isFavorited: boolean = sessionStorage.getItem(props.id) != null;

  const handleError = () => {
    setImgSrc(imageHolder);
  };

  return (
    <ItemWrapper onClick={toggleImgCard}>
      <Image src={imgSrc} alt={props.title} onError={handleError} />
      <GalleryItemInfo {...props} />
      <FavIcon clickHandler={addToFavClickHandler} isFavorited={isFavorited} />
    </ItemWrapper>
  );
}
