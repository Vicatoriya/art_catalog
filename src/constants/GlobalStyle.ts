import React from 'react';
import { createGlobalStyle } from 'styled-components';

// Создаем глобальный стиль
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  main{
    margin-top:150px;
  }
`;
