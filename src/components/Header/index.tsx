import React from 'react';
import logo from '../../assets/logo_light.png';
import fav from '../../assets/fav.png';
import { Container, A, Favorites } from './styled';
import NavState from '../../constants/navState';
import MainMenu from '../MainMenu';
export default function Header() {
  return (
    <NavState>
      <MainMenu />
    </NavState>
  );
}
