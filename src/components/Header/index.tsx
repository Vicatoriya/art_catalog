import React from 'react';
import NavState from '../NavState';
import MainMenu from '../MainMenu';
export default function Header() {
  return (
    <NavState>
      <MainMenu />
    </NavState>
  );
}
