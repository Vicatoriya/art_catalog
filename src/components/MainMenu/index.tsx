import React, { useRef, useContext } from 'react';
import useOnClickOutside from '../../hooks/onClickOutside';
import { MenuContext } from '../NavState';
import HamburgerButton from '../HamburgerButton';
import SideMenu from '../SideMenu';
import { Navbar } from './styled';
import logo from '../../assets/logo_light.png';

export default function MainMenu() {
  const node = useRef<HTMLElement>(null);
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  useOnClickOutside(node, () => {
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <header ref={node}>
      <Navbar>
        <HamburgerButton />
        <img src={logo} alt="Logo" />
      </Navbar>
      <SideMenu />
    </header>
  );
}
