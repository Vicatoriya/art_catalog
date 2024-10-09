import { InfoWrapper } from './styled';
import ImageInformation from '../../mytypes/ImageInformation';

export default function ImgCardInfo(props: ImageInformation) {
  return (
    <InfoWrapper>
      <p id="title">{props.title}</p>
      <p id="artist">{props.artist}</p>
      <p id="date">{props.date}</p>
    </InfoWrapper>
  );
}
