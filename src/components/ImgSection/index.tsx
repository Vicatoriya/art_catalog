import { useState } from 'react';
import { ImageWrapper, ImageSection, InfoSection, Overview } from './styled';
import FavIcon from '@components/FavIcon';
import imageHolder from '@assets/img_holder.webp';
import ImgProps from 'src/mytypes/ImgProps';
import SessionStorageService from '@utils/SessionStorageService';
import favClickHandler from '@utils/favoriteClickHandler';
import { FAVORITES_LIST_KEY } from '@constants/SessionStorageConstants';

export default function ImgSection(props: ImgProps) {
  const [imgSrc, setImgSrc] = useState<string>(props.imageURL);
  const storage = new SessionStorageService();

  const clickHandler = () => {
    favClickHandler(props.id, storage);
  };

  const handleError = () => {
    setImgSrc(imageHolder);
  };

  const isFavorited = storage.hasItemInArray(FAVORITES_LIST_KEY, props.id);

  return (
    <ImageWrapper>
      <ImageSection>
        <img src={imgSrc} alt={props.title} id="main" onError={handleError} />
        <FavIcon clickHandler={clickHandler} isFavorited={isFavorited} />
      </ImageSection>
      <InfoSection>
        <div>
          <h2>{props.title}</h2>
          <h3>{props.artist}</h3>
          <p id="date">{props.date}</p>
        </div>
        <div>
          <h2>Overview</h2>
          <Overview>
            <li>
              <strong>Artist nationality:</strong> {props.place}
            </li>
            <li>
              <strong>Dimensions:</strong> {props.dimensions}
            </li>
            <li>
              <strong>Medium:</strong> {props.medium}
            </li>
            <li>
              <strong>Credit Line:</strong> {props.credit_line}
            </li>
          </Overview>
        </div>
      </InfoSection>
    </ImageWrapper>
  );
}
