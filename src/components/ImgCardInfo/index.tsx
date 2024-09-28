import React from 'react';
import { GalleryItemInfo, Span } from './styled';
import FavIcon from '../FavIcon';

interface ImgCardInfoProps {
  artist: string;
  title: string;
  date: string;
}
export default function ImgCardInfo(props: ImgCardInfoProps) {
  return (
    <>
      <GalleryItemInfo>
        <p>
          {props.title} <br />
          <span>{props.artist}</span>
        </p>
        <Span>{props.date}</Span>
      </GalleryItemInfo>
      <FavIcon />
    </>
  );
}
