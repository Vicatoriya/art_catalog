import React from 'react';
import { HashRouter, Link, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
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
