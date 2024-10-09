import MenuContextProps from 'src/mytypes/MenuContextProps';
import { createContext } from 'react';

export const MenuContext = createContext<MenuContextProps>({
  isMenuOpen: false,
  toggleMenuMode: () => {},
});