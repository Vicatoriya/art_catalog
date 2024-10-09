import imageHolder from '@assets/img_holder.webp';
import FavIcon from '@components/FavIcon';
import ImgCardInfo from '@components/ImgCardInfo';
import { FAVORITES_LIST_KEY } from '@constants/SessionStorageConstants';
import favClickHandler from '@utils/favoriteClickHandler';
import SessionStorageService from '@utils/SessionStorageService';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageInformation from 'src/mytypes/ImageInformation';

import { CardWrapper } from './styled';

export default function ImgCard({
  id,
  title,
  artist,
  date,
  imgURL,
}: ImageInformation) {
  const storage = new SessionStorageService();
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState<string>(imgURL);

  const toggleImgCard = () => {
    navigate('/image/' + id);
  };

  const handleError = () => {
    setImgSrc(imageHolder);
  };

  const clickHandler = () => {
    favClickHandler(id, storage);
  };

  const isFavorited = storage.hasItemInArray(FAVORITES_LIST_KEY, id);

  return (
    <CardWrapper onClick={toggleImgCard}>
      <img id="main_pic" src={imgSrc} alt={title} onError={handleError} />
      <ImgCardInfo date={date} artist={artist} title={title} />
      <FavIcon isFavorited={isFavorited} clickHandler={clickHandler} />
    </CardWrapper>
  );
}
