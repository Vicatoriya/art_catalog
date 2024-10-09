import { Heading } from './styled';
import StandardHeadingProps from 'src/types/StandardHeadingProps';

export default function StandardHeading(props: StandardHeadingProps) {
  return <Heading>{props.text}</Heading>;
}
