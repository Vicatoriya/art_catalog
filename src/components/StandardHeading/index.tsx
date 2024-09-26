import React from 'react';
import { H3 } from './styled';
type Props = {
  text: string;
};
export default function StandardHeading(props: Props) {
  return <H3>{props.text}</H3>;
}
