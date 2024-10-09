import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Gallery from '../../src/components/Gallery';
import ImageInformation from '../../src/types/ImageInformation';

const mockImages: Array<ImageInformation> = [
  {
    id: '1',
    title: 'Image 1',
    artist: 'Artist 1',
    date: 'Date 1',
    imgURL: 'https://example.com/image1.jpg',
  },
  {
    id: '2',
    title: 'Image 2',
    artist: 'Artist 2',
    date: 'Date 2',
    imgURL: 'https://example.com/image2.jpg',
  },
  {
    id: '3',
    title: 'Image 3',
    artist: 'Artist 3',
    date: 'Date 3',
    imgURL: 'https://example.com/image3.jpg',
  },
  {
    id: '4',
    title: 'Image 4',
    artist: 'Artist 4',
    date: 'Date 4',
    imgURL: 'https://example.com/image4.jpg',
  },
  {
    id: '5',
    title: 'Image 5',
    artist: 'Artist 5',
    date: 'Date 5',
    imgURL: 'https://example.com/image5.jpg',
  },
  {
    id: '6',
    title: 'Image 6',
    artist: 'Artist 6',
    date: 'Date 6',
    imgURL: 'https://example.com/image6.jpg',
  },
];

const defaultProps = {
  totalPages: 2,
  images: mockImages,
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

  test('changes page on pagination click', async () => {
    render(
      <MemoryRouter>
        <Gallery {...defaultProps} />
      </MemoryRouter>
    );
    const nextPageButton = screen.getByRole('Next');

    expect(screen.getByAltText('Image 1')).toBeInTheDocument();
    expect(screen.getByAltText('Image 2')).toBeInTheDocument();
    expect(screen.getByAltText('Image 3')).toBeInTheDocument();
    fireEvent.click(nextPageButton);
    await waitFor(() => {
      expect(screen.getByAltText('Image 4')).toBeInTheDocument();
      expect(screen.getByAltText('Image 5')).toBeInTheDocument();
      expect(screen.getByAltText('Image 6')).toBeInTheDocument();
    });
  });

  test('applies fade-out class during page transition', async () => {
    render(
      <MemoryRouter>
        <Gallery {...defaultProps} />
      </MemoryRouter>
    );
    const nextPageButton = screen.getByRole('Next');
    const gallery = screen.getByRole('gallery');
    expect(gallery).not.toHaveClass('fade-out');
    fireEvent.click(nextPageButton);
    expect(gallery).toHaveClass('fade-out');
    await waitFor(() => {
      expect(gallery).not.toHaveClass('fade-out');
    });
  });
});
