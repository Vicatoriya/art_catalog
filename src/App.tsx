import React from 'react';
import { HashRouter, Link, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import { GlobalStyle } from './constants/GlobalStyle';
function App() {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </>
    // <div>
    // <Header/>
    // <Search/>
    // <SpecialGallery/>
    // <OtherWorks/>
    // <main>

    // </main>
    // <Footer/>
    // </div>
  );
}

export default App;
