import React from 'react';
import { render, screen } from '@testing-library/react';
import StandardHeading from '../../src/components/StandardHeading';
import '@testing-library/jest-dom';

describe('StandardHeading Component', () => {
  test('renders StandardHeading without crashing', () => {
    render(<StandardHeading text="Hello world!" />);
    const headingElement = screen.getByText(/Hello/i);
    expect(headingElement).toBeInTheDocument();
  });
});
