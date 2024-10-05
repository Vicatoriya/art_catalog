import { render, screen, fireEvent } from '@testing-library/react';
import { MenuContext } from '../../src/components/NavState';
import HamburgerButton from '../../src/components/HamburgerButton';
import React from 'react';
import '@testing-library/jest-dom';

describe('HamburgerButton component', () => {
  const toggleMenuModeMock = jest.fn();

  const renderWithContext = (isMenuOpen: boolean) => {
    return render(
      <MenuContext.Provider
        value={{ isMenuOpen, toggleMenuMode: toggleMenuModeMock }}
      >
        <HamburgerButton />
      </MenuContext.Provider>
    );
  };

  test('renders inactive button with three bars', () => {
    renderWithContext(false);
    const bars = screen.getAllByRole('button')[0].querySelectorAll('span');
    expect(bars.length).toBe(3);
    const button = screen.getByRole('button', {
      name: /Открыть главное меню/i,
    });
    expect(button).not.toHaveClass('active');
  });

  test('renders active button when menu is open', () => {
    renderWithContext(true);
    const button = screen.getByRole('button', {
      name: /Открыть главное меню/i,
    });
    expect(button).toHaveClass('active');
  });

  test('toggles the active state when clicked', () => {
    const { rerender } = renderWithContext(false);
    const button = screen.getByRole('button', {
      name: /Открыть главное меню/i,
    });
    fireEvent.click(button);
    expect(toggleMenuModeMock).toHaveBeenCalledTimes(1);
    rerender(
      <MenuContext.Provider
        value={{ isMenuOpen: true, toggleMenuMode: toggleMenuModeMock }}
      >
        <HamburgerButton />
      </MenuContext.Provider>
    );
    expect(button).toHaveClass('active');
  });
});
