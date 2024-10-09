import ImgCard from '@components/ImgCard';
import ImgListProps from 'src/mytypes/ImgListProps';

import { ImgListWrapper } from './styled';

export default function ImgList({ imgs }: ImgListProps) {
  const cards = imgs.map((value) => <ImgCard {...value} key={value.id} />);
  return <ImgListWrapper>{cards}</ImgListWrapper>;
}
