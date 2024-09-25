import React from 'react';
import logo from "../../assets/logo.png";
import fav from "../../assets/fav.png";
import {Container,A,Favorites} from "./styled";
export default function Header(){
    return(
        <Container>
        <div className="logo">
            <img src={logo} alt="Logo"/>
        </div>
        <Favorites>
            <img src={fav} alt="Icon" />
            <A href="#">Your favorites</A>
        </Favorites>
        </Container>
    );
}
