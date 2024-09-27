import React from 'react';
import { Icon } from './styled';
import fav from '../../assets/fav_bright.png';
export default function FavIcon() {
  return (
    <Icon>
      <img src={fav} alt="Add to favorites" />
    </Icon>
  );
}
