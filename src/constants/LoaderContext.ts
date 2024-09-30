import React, { createContext } from 'react';
export type LoaderContextProps = {
  isLoading: boolean;
  start: () => void;
  stop: () => void;
  loaderText: string;
};

export const LoaderContext = createContext<LoaderContextProps>(
  {} as LoaderContextProps
);
