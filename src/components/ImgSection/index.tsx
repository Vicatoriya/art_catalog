import FavIcon from '@components/FavIcon';
import { ICONS } from '@constants/Icons';
import { FAVORITES_LIST_KEY } from '@constants/SessionStorageConstants';
import ExtendedImageInformation from '@mytypes/ExtendedImageInformation';
import favClickHandler from '@utils/favoriteClickHandler';
import SessionStorageService from '@utils/SessionStorageService';
import { useState } from 'react';

import { ImageSection, ImageWrapper, InfoSection, Overview } from './styled';

export default function ImgSection({
  id,
  image_id,
  title,
  artist_title,
  date_display,
  dimensions,
  place_of_origin,
  credit_line,
  medium_display,
}: ExtendedImageInformation) {
  const [imgSrc, setImgSrc] = useState<string>(image_id);
  const storage = new SessionStorageService();

  const clickHandler = () => {
    favClickHandler(id, storage);
  };

  const handleError = () => {
    setImgSrc(ICONS.imgHolder);
  };

  const isFavorited = storage.hasItemInArray(FAVORITES_LIST_KEY, id);
  console.log(id);
  return (
    <ImageWrapper>
      <ImageSection>
        <img src={imgSrc} alt={title} id="main" onError={handleError} />
        <FavIcon clickHandler={clickHandler} isFavorited={isFavorited} />
      </ImageSection>
      <InfoSection>
        <div>
          <h2>{title}</h2>
          <h3>{artist_title}</h3>
          <p id="date">{date_display}</p>
        </div>
        <div>
          <h2>Overview</h2>
          <Overview>
            <li>
              <strong>Artist nationality:</strong> {place_of_origin}
            </li>
            <li>
              <strong>Dimensions:</strong> {dimensions}
            </li>
            <li>
              <strong>Medium:</strong> {medium_display}
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
