import { useEffect, useState } from 'react';
import { Icon } from './styled';
import fav from '@assets/fav_bright.png';

interface FavIconProps {
  clickHandler: () => void;
  isFavorited: boolean;
}
export default function FavIcon(props: FavIconProps) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(props.isFavorited);
  }, [props.isFavorited]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFav(!isFav);
    props.clickHandler();
  };

  return (
    <Icon onClick={toggleFavorite} $isActive={isFav}>
      <img
        src={fav}
        alt={isFav ? 'Remove from favorites' : 'Add to favorites'}
      />
    </Icon>
  );
}
