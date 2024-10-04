import { H3 } from './styled';
interface StandardHeadingProps {
  text: string;
}
export default function StandardHeading(props: StandardHeadingProps) {
  return <H3>{props.text}</H3>;
}
