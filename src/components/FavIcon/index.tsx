import React, { useState } from 'react';
import { Icon } from './styled';
import fav from '../../assets/fav_bright.png';
export default function FavIcon() {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <Icon onClick={toggleFavorite} isActive={isFavorited}>
      <img
        src={fav}
        alt={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
      />
    </Icon>
  );
}
