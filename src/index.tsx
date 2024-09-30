import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { GlobalStyle } from './constants/GlobalStyle';
import Favorites from './pages/Favorites';
import ImagePage from './pages/ImagePage';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/image/:id" element={<ImagePage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
