import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';

import StyledHeading from '../../src/components/StyledHeading';

describe('StyledHeading Component', () => {
  test('renders StyledHeading without crashing', () => {
    render(
      <StyledHeading text_start="Hello" text_end="World" feature="Feature!" />
    );
    const headingElement = screen.getByText(/Hello/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('part of heading passing through the feature parameter has special style', () => {
    render(
      <StyledHeading text_start="Hello" text_end="World" feature="Feature!" />
    );
    const headingElement = screen.getByText(/Feature!/i);
    expect(headingElement).toHaveStyle(`color: rgba(241, 121, 0, 1)`);
  });
});
