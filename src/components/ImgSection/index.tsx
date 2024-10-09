import imageHolder from '@assets/img_holder.webp';
import FavIcon from '@components/FavIcon';
import { FAVORITES_LIST_KEY } from '@constants/SessionStorageConstants';
import ImgProps from '@mytypes/ImgProps';
import favClickHandler from '@utils/favoriteClickHandler';
import SessionStorageService from '@utils/SessionStorageService';
import { useState } from 'react';

import { ImageSection, ImageWrapper, InfoSection, Overview } from './styled';

export default function ImgSection({
  id,
  imageURL,
  title,
  artist,
  date,
  dimensions,
  place,
  credit_line,
  medium,
}: ImgProps) {
  const [imgSrc, setImgSrc] = useState<string>(imageURL);
  const storage = new SessionStorageService();

  const clickHandler = () => {
    favClickHandler(id, storage);
  };

  const handleError = () => {
    setImgSrc(imageHolder);
  };

  const isFavorited = storage.hasItemInArray(FAVORITES_LIST_KEY, id);

  return (
    <ImageWrapper>
      <ImageSection>
        <img src={imgSrc} alt={title} id="main" onError={handleError} />
        <FavIcon clickHandler={clickHandler} isFavorited={isFavorited} />
      </ImageSection>
      <InfoSection>
        <div>
          <h2>{title}</h2>
          <h3>{artist}</h3>
          <p id="date">{date}</p>
        </div>
        <div>
          <h2>Overview</h2>
          <Overview>
            <li>
              <strong>Artist nationality:</strong> {place}
            </li>
            <li>
              <strong>Dimensions:</strong> {dimensions}
            </li>
            <li>
              <strong>Medium:</strong> {medium}
            </li>
            <li>
              <strong>Credit Line:</strong> {credit_line}
            </li>
          </Overview>
        </div>
      </InfoSection>
    </ImageWrapper>
  );
}
