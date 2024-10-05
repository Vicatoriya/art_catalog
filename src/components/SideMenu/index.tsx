import { useContext } from 'react';
import { MenuContext } from '@components/NavState';
import { Menu, MenuLink } from './styled';

export default function SideMenu() {
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <Menu open={isMenuOpen}>
      {' '}
      <MenuLink href="/art_catalog">Main</MenuLink>
      <MenuLink href="/art_catalog/#/favorites">Favorites</MenuLink>
    </Menu>
  );
}
