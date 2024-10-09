import { useState } from 'react';
import { MenuContext } from '@utils/MenuContext';
import NavStateProps from 'src/mytypes/NavStateProps';

export default function NavState(props: NavStateProps) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function toggleMenuMode() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenuMode }}>
      {props.children}
    </MenuContext.Provider>
  );
}
