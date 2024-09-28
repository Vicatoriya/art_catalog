import React from 'react';
import { GalleryItemInfo, Span } from './styled';
import FavIcon from '../FavIcon';

interface ImgCardInfoProps {
  artist: string;
  title: string;
  date: string;
  id: string;
}
export default function ImgCardInfo(props: ImgCardInfoProps) {
  const addToFavClickHandler = () => {
    if (sessionStorage.getItem(props.id) != null) {
      sessionStorage.removeItem(props.id);
    } else {
      sessionStorage.setItem(props.id, '');
    }
  };

  let isFavorited: boolean = sessionStorage.getItem(props.id) != null;
  return (
    <>
      <GalleryItemInfo>
        <p>
          {props.title} <br />
          <span>{props.artist}</span>
        </p>
        <Span>{props.date}</Span>
      </GalleryItemInfo>
      <FavIcon clickHandler={addToFavClickHandler} isFavorited={isFavorited} />
    </>
  );
}
