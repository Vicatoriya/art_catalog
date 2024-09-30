import React from 'react';
import { LoaderWrapper, Spinner } from './styled';

export default function Loader() {
  return (
    <LoaderWrapper>
      <Spinner />
    </LoaderWrapper>
  );
}
