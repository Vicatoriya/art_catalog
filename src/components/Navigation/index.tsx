import { Nav, NavLink } from './styled';

export default function Navigation() {
  return (
    <Nav>
      <NavLink href="/art_catalog">Home</NavLink>
      <NavLink href="/art_catalog/#/favorites">Favorites</NavLink>
    </Nav>
  );
}
