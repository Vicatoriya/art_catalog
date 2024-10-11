import '@testing-library/jest-dom';

import StandardHeading from '@components/StandardHeading';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('StandardHeading Component', () => {
  test('renders StandardHeading without crashing', () => {
    render(<StandardHeading text="Hello world!" />);
    const headingElement = screen.getByText(/Hello/i);
    expect(headingElement).toBeInTheDocument();
  });
});
