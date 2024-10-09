import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import FavIcon from '../../src/components/FavIcon';

describe('FavIcon Component', () => {
  const mockClickHandler = jest.fn();

  it('should render correctly', () => {
    render(<FavIcon clickHandler={mockClickHandler} isFavorited={false} />);
    const imgElement = screen.getByAltText('Add to favorites');
    expect(imgElement).toBeInTheDocument();
  });

  it('should show the correct image when favorited', () => {
    render(<FavIcon clickHandler={mockClickHandler} isFavorited={true} />);
    const imgElement = screen.getByAltText('Remove from favorites');
    expect(imgElement).toBeInTheDocument();
  });

  it('should call the click handler on click', () => {
    render(<FavIcon clickHandler={mockClickHandler} isFavorited={false} />);
    const icon = screen.getByAltText('Add to favorites');
    fireEvent.click(icon);
    expect(mockClickHandler).toHaveBeenCalledTimes(1);
  });

  it('should toggle the favorite state when clicked', () => {
    const { rerender } = render(
      <FavIcon clickHandler={mockClickHandler} isFavorited={false} />
    );
    let imgElement = screen.getByAltText('Add to favorites');
    fireEvent.click(imgElement);
    rerender(<FavIcon clickHandler={mockClickHandler} isFavorited={true} />);
    imgElement = screen.getByAltText('Remove from favorites');
    expect(imgElement).toBeInTheDocument();
  });
});
