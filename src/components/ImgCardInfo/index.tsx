import ImageInfoProps from '@mytypes/ImageInfoProps';

import { InfoWrapper } from './styled';

export default function ImgCardInfo(props: ImageInfoProps) {
  return (
    <InfoWrapper>
      <p id="title">{props.title}</p>
      <p id="artist">{props.artist}</p>
      <p id="date">{props.date}</p>
    </InfoWrapper>
  );
}
