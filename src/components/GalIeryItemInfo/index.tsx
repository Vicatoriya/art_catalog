import { InfoWrapper, SingleLineEllipsis } from './styled';
import ImageInformation from '../../types/ImageInformation';

export default function GalleryItemInfo(props: ImageInformation) {
  return (
    <InfoWrapper>
      <SingleLineEllipsis id="title">{props.title}</SingleLineEllipsis>
      <SingleLineEllipsis id="artist">{props.artist}</SingleLineEllipsis>
      <SingleLineEllipsis id="date">{props.date}</SingleLineEllipsis>
    </InfoWrapper>
  );
}
