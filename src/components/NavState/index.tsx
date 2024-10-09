import { createContext, useState } from 'react';
import MenuContextProps from 'src/types/MenuContextProps';
import NavStateProps from 'src/types/NavStateProps';

export const MenuContext = createContext<MenuContextProps>({
  isMenuOpen: false,
  toggleMenuMode: () => {},
});

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
