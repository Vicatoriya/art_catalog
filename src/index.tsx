import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Link, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import { GlobalStyle } from './constants/GlobalStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
