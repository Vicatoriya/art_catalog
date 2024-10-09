import { MenuContext } from '@utils/MenuContext';
import { useState } from 'react';
import NavStateProps from 'src/mytypes/NavStateProps';

export default function NavState({ children }: NavStateProps) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function toggleMenuMode() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenuMode }}>
      {children}
    </MenuContext.Provider>
  );
}
