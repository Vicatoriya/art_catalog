import { GlobalStyle } from '@constants/GlobalStyle';
import { ROUTES } from '@constants/Routes';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const routeComponents = ROUTES.map(({ path, component }, key) => (
  <Route path={path} Component={component} key={key} />
));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <HashRouter>
      <Routes>{routeComponents}</Routes>
    </HashRouter>
  </React.StrictMode>
);
