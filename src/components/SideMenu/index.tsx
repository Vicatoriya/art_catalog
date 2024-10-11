import { MenuContext } from '@utils/MenuContext';
import { useContext } from 'react';

import { Menu, MenuLink } from './styled';

export default function SideMenu() {
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <Menu open={isMenuOpen}>
      <MenuLink href="/art_catalog">Home</MenuLink>
      <MenuLink href="/art_catalog/#/favorites">Favorites</MenuLink>
    </Menu>
  );
}
