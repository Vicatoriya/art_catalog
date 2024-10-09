import StyledHeadingProps from 'src/mytypes/StyledHeadingProps';

import { Feature, Heading } from './styled';

export default function StyledHeading({
  text_start,
  feature,
  text_end,
}: StyledHeadingProps) {
  return (
    <Heading>
      {text_start} <Feature>{feature}</Feature>
      {text_end}
    </Heading>
  );
}
