import '@testing-library/jest-dom';

import GalleryItemInfo from '@components/GalIeryItemInfo';
import ImageInformation from '@mytypes/ImageInformation';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('GalleryItemInfo component', () => {
  const defaultProps: ImageInformation = {
    id: '1',
    title: 'Mona Lisa',
    artist: 'Leonardo da Vinci',
    date: '1503',
    imgURL: 'https://example.com/mona-lisa.jpg',
  };

  const renderComponent = (props: ImageInformation) =>
    render(<GalleryItemInfo {...props} />);

  test('renders correctly', () => {
    renderComponent(defaultProps);
    const titleElement = screen.getByText('Mona Lisa');
    const dateElement = screen.getByText('1503');
    const artistElement = screen.getByText('Leonardo da Vinci');
    expect(titleElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(artistElement).toBeInTheDocument();
  });
});
