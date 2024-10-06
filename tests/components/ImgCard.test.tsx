import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ImgCard from '../../src/components/ImgCard';
import imageHolder from '@assets/img_holder.webp';
import ImageInformation from '../../src/types/ImageInformation';
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('ImgCard Component', () => {
  const defaultProps: ImageInformation = {
    id: '123',
    title: 'Test Image',
    date: 'Test Date',
    artist: 'Test Artist',
    imgURL: 'test-image-url.jpg',
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
    expect(sessionStorage.getItem('123')).toBe('');
    fireEvent.click(favButton);
    expect(sessionStorage.getItem('123')).toBeNull();
  });
});
