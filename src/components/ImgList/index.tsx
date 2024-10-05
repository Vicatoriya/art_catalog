import { ImgListWrapper } from './styled';
import ImgCard from '@components/ImgCard';
import ImageInformation from '../../types/ImageInformation';

interface ImgListProps {
  imgs: Array<ImageInformation>;
}

export default function ImgList(props: ImgListProps) {
  const cards = props.imgs.map((value) => (
    <ImgCard {...value} key={value.id} />
  ));
  return <ImgListWrapper>{cards}</ImgListWrapper>;
}
