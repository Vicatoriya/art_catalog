import styled from 'styled-components';

export const Heading = styled.h1`
  font-size: 45px;
  margin: 70px 0;
  text-align: center;
  font-family: Lexend Deca;

  @font-face {
    font-family: Lexend Deca;
    src: url(../../assets/LexendDeca-VariableFont_wght.ttf);
  }
  @media (max-width: 420px) {
    margin: 35px 5%;
    font-size: 35px;
  }
`;

export const Feature = styled.span`
  color: rgba(241, 121, 0, 1);
`;
