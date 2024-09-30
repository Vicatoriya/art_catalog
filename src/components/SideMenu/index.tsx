import React, { ReactNode, useContext } from 'react';
import { MenuContext } from '../NavState';
import { Menu, MenuLink } from './styled';

export default function SideMenu() {
  const { isMenuOpen } = useContext(MenuContext);
  return (
    <Menu open={isMenuOpen}>
      {' '}
      <MenuLink href="/">Main</MenuLink>
      <MenuLink href="/#favorites">Favorites</MenuLink>
    </Menu>
  );
}
