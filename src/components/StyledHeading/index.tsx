import React from 'react';
import { Heading, Feature } from './styled';
type Props = {
  text_start: string;
  text_end: string;
  feature: string;
};
export default function StyledHeading(props: Props) {
  return (
    <Heading>
      {props.text_start} <Feature>{props.feature}</Feature>
      {props.text_end}
    </Heading>
  );
}
