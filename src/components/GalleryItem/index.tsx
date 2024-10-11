import FavIcon from '@components/FavIcon';
import GalleryItemInfo from '@components/GalIeryItemInfo';
import Loader from '@components/Loader';
import { ICONS } from '@constants/Icons';
import { FAVORITES_LIST_KEY } from '@constants/SessionStorageConstants';
import GalleryItemProps from '@mytypes/GalleryItemProps';
import favClickHandler from '@utils/favoriteClickHandler';
import SessionStorageService from '@utils/SessionStorageService';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Image, ItemWrapper } from './styled';

export default function GalleryItem({
  id,
  title,
  artist_title,
  date_display,
  image_id,
  isLoading,
}: GalleryItemProps) {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState<string>(image_id);
  const storage = new SessionStorageService();

  useEffect(() => {
    setImgSrc(image_id);
  }, [image_id]);

  const toggleImgCard = () => {
    navigate('/image/' + id);
  };

  const clickHandler = () => {
    favClickHandler(id, storage);
  };

  const isFavorited = storage.hasItemInArray(FAVORITES_LIST_KEY, id);

  const handleError = () => {
    setImgSrc(ICONS.imgHolder);
  };

  return (
    <ItemWrapper onClick={toggleImgCard} role="galItem">
      {isLoading && <Loader />}
      <Image
        src={imgSrc}
        alt={title}
        onError={handleError}
        role="mainImg"
        $isLoading={isLoading}
      />
      <GalleryItemInfo
        date={date_display}
        artist={artist_title}
        title={title}
      />
      <FavIcon clickHandler={clickHandler} isFavorited={isFavorited} />
    </ItemWrapper>
  );
}
