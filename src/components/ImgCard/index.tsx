import FavIcon from '@components/FavIcon';
import ImgCardInfo from '@components/ImgCardInfo';
import { ICONS } from '@constants/Icons';
import { FAVORITES_LIST_KEY } from '@constants/SessionStorageConstants';
import ImageInformation from '@mytypes/ImageInformation';
import favClickHandler from '@utils/favoriteClickHandler';
import SessionStorageService from '@utils/SessionStorageService';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CardWrapper } from './styled';

export default function ImgCard({
  id,
  title,
  artist_title,
  date_display,
  image_id,
}: ImageInformation) {
  const storage = new SessionStorageService();
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState<string>(image_id);

  const toggleImgCard = () => {
    navigate('/image/' + id);
  };

  const handleError = () => {
    setImgSrc(ICONS.imgHolder);
  };

  const clickHandler = () => {
    favClickHandler(id, storage);
  };

  const isFavorited = storage.hasItemInArray(FAVORITES_LIST_KEY, id);

  return (
    <CardWrapper onClick={toggleImgCard}>
      <img id="main_pic" src={imgSrc} alt={title} onError={handleError} />
      <ImgCardInfo date={date_display} artist={artist_title} title={title} />
      <FavIcon isFavorited={isFavorited} clickHandler={clickHandler} />
    </CardWrapper>
  );
}
