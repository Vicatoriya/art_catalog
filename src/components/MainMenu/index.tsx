import React, { useRef, useContext } from 'react';
import useOnClickOutside from '../../constants/onClickOutside';
import { MenuContext } from '../../constants/navState';
import HamburgerButton from '../HamburgerButton';
import { SideMenu } from '../SideMenu';
import { Navbar } from './styled';
import logo from '../../assets/logo_light.png';

const MainMenu = () => {
  const node = useRef<HTMLElement>(null);
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    // Only if menu is open
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
};

export default MainMenu;
