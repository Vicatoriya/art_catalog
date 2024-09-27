import React, { createContext, useState, ReactNode, FC } from 'react';

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

const NavState: FC<NavStateProps> = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function toggleMenuMode() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenuMode }}>
      {children}
    </MenuContext.Provider>
  );
};

export default NavState;
