import { Heading, Feature } from './styled';
interface StyledHeadingProps {
  text_start: string;
  text_end: string;
  feature: string;
}
export default function StyledHeading(props: StyledHeadingProps) {
  return (
    <Heading>
      {props.text_start} <Feature>{props.feature}</Feature>
      {props.text_end}
    </Heading>
  );
}
