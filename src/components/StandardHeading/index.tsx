import { Heading } from './styled';
import StandardHeadingProps from 'src/mytypes/StandardHeadingProps';

export default function StandardHeading(props: StandardHeadingProps) {
  return <Heading>{props.text}</Heading>;
}
