import React from 'react';
import logo from '../../assets/logo_light.png';
import fav from '../../assets/fav.png';
import { Container, A, Favorites } from './styled';
export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <Favorites>
        <img src={fav} alt="Icon" />
        <A href="/#favorites">Your favorites</A>
      </Favorites>
      <A href="/#image">Image</A>
    </Container>
  );
}
