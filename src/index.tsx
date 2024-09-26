import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import { GlobalStyle } from './constants/GlobalStyle';
import Header from './components/Header';
import Footer from './components/Footer';
import Favorites from './pages/Favorites';
import Image from './pages/Image';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/image" element={<Image />} />
      </Routes>
    </HashRouter>
    <Footer></Footer>
  </React.StrictMode>
);
