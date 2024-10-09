import { ImgListWrapper } from './styled';
import ImgCard from '@components/ImgCard';
import ImgListProps from 'src/mytypes/ImgListProps';

export default function ImgList(props: ImgListProps) {
  const cards = props.imgs.map((value) => (
    <ImgCard {...value} key={value.id} />
  ));
  return <ImgListWrapper>{cards}</ImgListWrapper>;
}
