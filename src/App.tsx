import React from 'react';
import "./index.css";
import Header from "./components/Header";
import Footer from './components/Footer';
import Search from './components/Search';
import SpecialGallery from './components/SpecialGallery';
function App() {
  return (
    <div>
    <Header/>
    <Search/>
    <SpecialGallery/>
    <main>


        <section className="other-works">
            <h3>Other works for you</h3>
            <div className="works-grid">
                <div className="work-item">
                    <img src="charles-v.jpg" alt="Charles V"/>
                    <p>Charles V, bust length... <br/><span>Giovanni Britto</span></p>
                    <span className="public">Public</span>
                </div>
                <div className="work-item">
                    <img src="charles-v.jpg" alt="Charles V"/>
                    <p>Charles V, bust length... <br/><span>Giovanni Britto</span></p>
                    <span className="public">Public</span>
                </div>
            </div>
        </section>
    </main>
    <Footer/>
    </div>
  );
}

export default App;
