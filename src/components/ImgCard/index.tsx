import { useState } from 'react';
import { CardWrapper } from './styled';
import ImgCardInfo from '@components/ImgCardInfo';
import { useNavigate } from 'react-router-dom';
import ImageInformation from 'src/mytypes/ImageInformation';
import FavIcon from '@components/FavIcon';
import imageHolder from '@assets/img_holder.webp';
import SessionStorageService from '@utils/SessionStorageService';
import favClickHandler from '@utils/favoriteClickHandler';
import { FAVORITES_LIST_KEY } from '@constants/SessionStorageConstants';

export default function ImgCard(props: ImageInformation) {
  const storage = new SessionStorageService();
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState<string>(props.imgURL);

  const toggleImgCard = () => {
    navigate('/image/' + props.id);
  };

  const handleError = () => {
    setImgSrc(imageHolder);
  };

  const clickHandler = () => {
    favClickHandler(props.id, storage);
  };

  const isFavorited = storage.hasItemInArray(FAVORITES_LIST_KEY, props.id);

  return (
    <CardWrapper onClick={toggleImgCard}>
      <img id="main_pic" src={imgSrc} alt={props.title} onError={handleError} />
      <ImgCardInfo {...props} />
      <FavIcon isFavorited={isFavorited} clickHandler={clickHandler} />
    </CardWrapper>
  );
}
