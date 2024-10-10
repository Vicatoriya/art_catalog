import { COMPONENTS } from '@constants/Components';
import ImgListProps from '@mytypes/ImgListProps';

import { ImgListWrapper } from './styled';

export default function ImgList({ imgs }: ImgListProps) {
  const cards = imgs.map((value) => (
    <COMPONENTS.ImgCard {...value} key={value.id} />
  ));
  return <ImgListWrapper>{cards}</ImgListWrapper>;
}
