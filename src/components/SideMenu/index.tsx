import React, { ReactNode, useContext } from 'react';
import { MenuContext } from '../../constants/navState';
import { Menu, MenuLink } from './styled';

interface SideMenuProps {
  children?: ReactNode;
}
export default function SideMenu(props: SideMenuProps) {
  const { isMenuOpen } = useContext(MenuContext);
  return <Menu open={isMenuOpen}>{props.children}</Menu>;
}

SideMenu.defaultProps = {
  children: (
    <>
      <MenuLink href="/">Main</MenuLink>
      <MenuLink href="/#favorites">Favorites</MenuLink>
    </>
  ),
};
