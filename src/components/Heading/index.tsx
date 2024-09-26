import React from 'react';
import { H3 } from './styled';
type Props = {
  text: string;
};
export default function Heading(props: Props) {
  return <H3>{props.text}</H3>;
}
