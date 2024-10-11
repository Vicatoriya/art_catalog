import '@testing-library/jest-dom';

import imageHolder from '@assets/img_holder.webp';
import ImgCard from '@components/ImgCard';
import { FAVORITES_LIST_KEY } from '@constants/SessionStorageConstants';
import ImageInformation from '@mytypes/ImageInformation';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('ImgCard Component', () => {
  const defaultProps: ImageInformation = {
    id: '123',
    title: 'Test Image',
    date_display: 'Test Date',
    artist_title: 'Test Artist',
    image_id: 'test-image-url.jpg',
  };

  it('renders the ImgCard component', () => {
    render(
      <MemoryRouter>
        <ImgCard {...defaultProps} />
      </MemoryRouter>
    );
    expect(screen.getByAltText('Test Image')).toBeInTheDocument();
    expect(screen.getByText('Test Artist')).toBeInTheDocument();
    expect(screen.getByText('Test Date')).toBeInTheDocument();
    expect(screen.getByText('Test Image')).toBeInTheDocument();
  });

  it('calls navigate on click', () => {
    const mockNavigate = jest.fn();
    const { useNavigate } = require('react-router-dom');
    useNavigate.mockReturnValue(mockNavigate);
    render(
      <MemoryRouter>
        <ImgCard {...defaultProps} />
      </MemoryRouter>
    );
    const img = screen.getByAltText('Test Image');
    fireEvent.click(img);
    expect(mockNavigate).toHaveBeenCalledWith('/image/123');
  });

  it('changes the image source to placeholder on error', () => {
    render(
      <MemoryRouter>
        <ImgCard {...defaultProps} />
      </MemoryRouter>
    );
    const img: HTMLImageElement = screen.getByAltText('Test Image');
    fireEvent.error(img);
    expect(img.src).toContain(imageHolder);
  });

  it('toggles favorite status in sessionStorage', () => {
    render(
      <MemoryRouter>
        <ImgCard {...defaultProps} />
      </MemoryRouter>
    );
    const favButton = screen.getByAltText('Add to favorites');
    expect(sessionStorage.getItem('123')).toBeNull();
    fireEvent.click(favButton);
    expect(sessionStorage.getItem(FAVORITES_LIST_KEY)?.includes('123'));
    fireEvent.click(favButton);
    expect(sessionStorage.getItem('123')).toBeNull();
  });
});
