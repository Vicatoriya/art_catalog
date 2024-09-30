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
  min-height:100vh;
  justify-content:space-between;
  }

  main{
  margin-top:100px;
  }
`;
