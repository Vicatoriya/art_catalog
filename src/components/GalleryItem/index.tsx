import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemWrapper, Image } from './styled';
import ImageInformation from 'src/mytypes/ImageInformation';
import GalleryItemInfo from '@components/GalIeryItemInfo';
import FavIcon from '@components/FavIcon';
import imageHolder from '@assets/img_holder.webp';
import Loader from '@components/Loader';
import favClickHandler from '@utils/favoriteClickHandler';
import SessionStorageService from '@utils/SessionStorageService';
import { FAVORITES_LIST_KEY } from '@constants/SessionStorageConstants';

export default function GalleryItem(props: ImageInformation) {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState<string>(props.imgURL);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const storage = new SessionStorageService();

  useEffect(() => {
    if (props.imgURL) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
      setImgSrc(props.imgURL);
    }
  }, [props.imgURL]);

  const toggleImgCard = () => {
    navigate('/image/' + props.id);
  };

  const clickHandler = () => {
    favClickHandler(props.id, storage);
  };

  const isFavorited = storage.hasItemInArray(FAVORITES_LIST_KEY, props.id);

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
      <FavIcon clickHandler={clickHandler} isFavorited={isFavorited} />
    </ItemWrapper>
  );
}
