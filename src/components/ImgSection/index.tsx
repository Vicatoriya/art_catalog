import { useState } from 'react';
import { ImageWrapper, ImageSection, InfoSection, Overview } from './styled';
import FavIcon from '@components/FavIcon';
import imageHolder from '@assets/img_holder.webp';

export interface ImageProps {
  id: string;
  imageURL: string;
  title: string;
  artist: string;
  date: string;
  dimensions: string;
  place: string;
  credit_line: string;
  medium: string;
}

export default function ImgSection(props: ImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(props.imageURL);

  const addToFavClickHandler = () => {
    if (sessionStorage.getItem(props.id) != null) {
      sessionStorage.removeItem(props.id);
    } else {
      sessionStorage.setItem(props.id, '');
    }
  };

  const handleError = () => {
    setImgSrc(imageHolder);
  };

  const isFavorited: boolean = sessionStorage.getItem(props.id) != null;

  return (
    <ImageWrapper>
      <ImageSection>
        <img src={imgSrc} alt={props.title} id="main" onError={handleError} />
        <FavIcon
          clickHandler={addToFavClickHandler}
          isFavorited={isFavorited}
        />
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
