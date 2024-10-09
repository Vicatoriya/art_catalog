import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';

import StandardHeading from '../../src/components/StandardHeading';

describe('StandardHeading Component', () => {
  test('renders StandardHeading without crashing', () => {
    render(<StandardHeading text="Hello world!" />);
    const headingElement = screen.getByText(/Hello/i);
    expect(headingElement).toBeInTheDocument();
  });
});
