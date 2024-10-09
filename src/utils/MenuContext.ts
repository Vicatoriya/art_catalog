import { createContext } from 'react';
import MenuContextProps from 'src/mytypes/MenuContextProps';

export const MenuContext = createContext<MenuContextProps>({
  isMenuOpen: false,
  toggleMenuMode: () => {},
});
