import '@testing-library/jest-dom';

import Gallery from '@components/Gallery';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

const defaultProps = {
  totalPages: 2,
};

describe('Gallery component', () => {
  test('renders the correct number of gallery items', () => {
    render(
      <MemoryRouter>
        <Gallery {...defaultProps} />
      </MemoryRouter>
    );
    const galleryItems = screen.getAllByRole('galItem');
    expect(galleryItems.length).toBe(3);
  });

  test('renders Pagination component', () => {
    render(
      <MemoryRouter>
        <Gallery {...defaultProps} />
      </MemoryRouter>
    );
    const pagination = screen.getByRole('pagination');
    expect(pagination).toBeInTheDocument();
  });
});
