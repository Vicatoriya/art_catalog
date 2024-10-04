import { createContext, useState, ReactNode } from 'react';

interface MenuContextProps {
  isMenuOpen: boolean;
  toggleMenuMode: () => void;
}

export const MenuContext = createContext<MenuContextProps>({
  isMenuOpen: false,
  toggleMenuMode: () => {},
});

interface NavStateProps {
  children: ReactNode;
}

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
