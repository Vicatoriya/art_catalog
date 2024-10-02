import React from 'react';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root{
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  min-height:100vh;
    background-color: rgba(250, 250, 250, 1);
  }

  main{
  padding-top:100px;
  }
`;
