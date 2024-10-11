import ImageInfoProps from '@mytypes/ImageInfoProps';

import { InfoWrapper, SingleLineEllipsis } from './styled';

export default function GalleryItemInfo({
  title,
  artist,
  date,
}: ImageInfoProps) {
  return (
    <InfoWrapper>
      <SingleLineEllipsis id="title">{title}</SingleLineEllipsis>
      <SingleLineEllipsis id="artist">{artist}</SingleLineEllipsis>
      <SingleLineEllipsis id="date">{date}</SingleLineEllipsis>
    </InfoWrapper>
  );
}
