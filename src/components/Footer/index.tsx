import React from "react";
import { Container } from "./styled";
import logo from "../../assets/logo_dark.png";
import modsen from "../../assets/modsen.png";

export default function Footer() {
  return (
    <Container>
      <img src={logo} alt="Museum logo" />
      <img src={modsen} alt="Modsen logo" />
    </Container>
  );
}
