import { COMPONENTS } from '@constants/Components';
import { ICONS } from '@constants/Icons';
import { FAVORITES_LIST_KEY } from '@constants/SessionStorageConstants';
import ImageInformation from '@mytypes/ImageInformation';
import favClickHandler from '@utils/favoriteClickHandler';
import SessionStorageService from '@utils/SessionStorageService';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Image, ItemWrapper } from './styled';

export default function GalleryItem({
  id,
  title,
  artist,
  date,
  imgURL,
}: ImageInformation) {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState<string>(imgURL);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const storage = new SessionStorageService();

  useEffect(() => {
    if (imgURL) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
      setImgSrc(imgURL);
    }
  }, [imgURL]);

  const toggleImgCard = () => {
    navigate('/image/' + id);
  };

  const clickHandler = () => {
    favClickHandler(id, storage);
  };

  const isFavorited = storage.hasItemInArray(FAVORITES_LIST_KEY, id);

  const handleError = () => {
    setImgSrc(ICONS.imgHolder);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <ItemWrapper onClick={toggleImgCard} role="galItem">
      {isLoading && <COMPONENTS.Loader />}
      <Image
        src={imgSrc}
        alt={title}
        onError={handleError}
        role="mainImg"
        onLoad={handleImageLoad}
        $isLoading={isLoading}
      />
      <COMPONENTS.GalleryItemInfo date={date} artist={artist} title={title} />
      <COMPONENTS.FavIcon
        clickHandler={clickHandler}
        isFavorited={isFavorited}
      />
    </ItemWrapper>
  );
}
