import { useState } from 'react';
import { CardWrapper } from './styled';
import ImgCardInfo from '@components/ImgCardInfo';
import { useNavigate } from 'react-router-dom';
import ImageInformation from '../../types/ImageInformation';
import FavIcon from '@components/FavIcon';
import imageHolder from '@assets/img_holder.webp';

export default function ImgCard(props: ImageInformation) {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState<string>(props.imgURL);

  const toggleImgCard = () => {
    navigate('/image/' + props.id);
  };

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
    <CardWrapper onClick={toggleImgCard}>
      <img id="main_pic" src={imgSrc} alt={props.title} onError={handleError} />
      <ImgCardInfo {...props} />
      <FavIcon isFavorited={isFavorited} clickHandler={addToFavClickHandler} />
    </CardWrapper>
  );
}
