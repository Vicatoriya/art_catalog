import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemWrapper, Image } from './styled';
import ImageInformation from '../../types/ImageInformation';
import GalleryItemInfo from '@components/GalIeryItemInfo';
import FavIcon from '@components/FavIcon';
import imageHolder from '@assets/img_holder.webp';
import Loader from '@components/Loader';

export default function GalleryItem(props: ImageInformation) {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState<string>(props.imgURL);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (props.imgURL) {
      setIsLoading(true);
      setImgSrc(props.imgURL);
    }
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
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <ItemWrapper onClick={toggleImgCard} role="galItem">
      {isLoading && <Loader />}
      <Image
        src={imgSrc}
        alt={props.title}
        onError={handleError}
        role="mainImg"
        onLoad={handleImageLoad}
        style={{ display: isLoading ? 'none' : 'block' }}
      />
      <GalleryItemInfo {...props} />
      <FavIcon clickHandler={addToFavClickHandler} isFavorited={isFavorited} />
    </ItemWrapper>
  );
}
