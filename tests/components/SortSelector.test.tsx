import '@testing-library/jest-dom';

import SortSelector from '@components/SortSelector';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

describe('SortSelector component', () => {
  const mockOnSortChange = jest.fn();

  const renderComponent = (selectedSort: string) =>
    render(
      <SortSelector
        selectedSort={selectedSort}
        onSortChange={mockOnSortChange}
      />
    );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly with default selected option', () => {
    renderComponent('title');
    expect(screen.getByLabelText(/sort by/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue('title')).toBeInTheDocument();
  });

  test('displays all sort options', () => {
    renderComponent('title');
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(3); // Всего три опции: title, artist, date
    expect(options[0].textContent).toBe('title');
    expect(options[1].textContent).toBe('artist');
    expect(options[2].textContent).toBe('date');
  });

  test('calls onSortChange when a new option is selected', () => {
    renderComponent('title');
    fireEvent.change(screen.getByLabelText(/sort by/i), {
      target: { value: 'artist_title' },
    });
    expect(mockOnSortChange).toHaveBeenCalledTimes(1);
    expect(mockOnSortChange).toHaveBeenCalledWith('artist_title');
  });
});
