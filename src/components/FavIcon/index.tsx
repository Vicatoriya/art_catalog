import { images } from '@constants/Images';
import FavIconProps from '@mytypes/FavIconProps';
import { useEffect, useState } from 'react';

import { Icon } from './styled';

export default function FavIcon({ clickHandler, isFavorited }: FavIconProps) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(isFavorited);
  }, [isFavorited]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFav(!isFav);
    clickHandler();
  };

  return (
    <Icon onClick={toggleFavorite} $isActive={isFav}>
      <img
        src={images.fav}
        alt={isFav ? 'Remove from favorites' : 'Add to favorites'}
      />
    </Icon>
  );
}
