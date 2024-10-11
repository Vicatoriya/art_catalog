import StandardHeadingProps from '@mytypes/StandardHeadingProps';

import { Heading } from './styled';

export default function StandardHeading({ text }: StandardHeadingProps) {
  return <Heading>{text}</Heading>;
}
