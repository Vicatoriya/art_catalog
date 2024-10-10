import HamburgerButton from '@components/HamburgerButton';
import SideMenu from '@components/SideMenu';
import { ICONS } from '@constants/Icons';
import useOnClickOutside from '@hooks/onClickOutside';
import { MenuContext } from '@utils/MenuContext';
import { useContext, useRef } from 'react';

import { Navbar } from './styled';

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
        <img src={ICONS.logoLight} alt="Logo" />
      </Navbar>
      <SideMenu />
    </header>
  );
}
