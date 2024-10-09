import { Heading, Feature } from './styled';
import StyledHeadingProps from 'src/types/StyledHeadingProps';

export default function StyledHeading(props: StyledHeadingProps) {
  return (
    <Heading>
      {props.text_start} <Feature>{props.feature}</Feature>
      {props.text_end}
    </Heading>
  );
}
