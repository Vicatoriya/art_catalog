import { Heading } from './styled';

interface StandardHeadingProps {
  text: string;
}
export default function StandardHeading(props: StandardHeadingProps) {
  return <Heading>{props.text}</Heading>;
}
