import React, { FC, ReactNode, useContext } from 'react';
import { MenuContext } from '../../constants/navState'; // предположим, что контекст находится в этом файле
import { Menu, MenuLink } from './styled';
// Определяем интерфейс для пропсов
interface SideMenuProps {
  children?: ReactNode;
}

// Определяем компонент с типизацией через FC (Function Component)
export const SideMenu: FC<SideMenuProps> = ({ children }) => {
  const { isMenuOpen } = useContext(MenuContext);

  return <Menu open={isMenuOpen}>{children}</Menu>;
};

// Устанавливаем значения по умолчанию для пропсов
SideMenu.defaultProps = {
  children: (
    <>
      <MenuLink href="/">Main</MenuLink>
      <MenuLink href="/#favorites">Favorites</MenuLink>
    </>
  ),
};
