import React from 'react';
import "./index.css";
import Header from "./components/Header";
import Footer from './components/Footer';
import Search from './components/Search';
function App() {
  return (
    <div>
    <Header/>
    <Search/>
    <main>

        <section className="gallery">
            <h3>Our special gallery</h3>
            <div className="gallery-grid">
                <div className="gallery-item">
                    <img src="charles-v.jpg" alt="Charles V"/>
                    <p>Charles V, bust length... <br/><span>Giovanni Britto</span></p>
                    <span className="public">Public</span>
                </div>
                <div className="gallery-item">
                    <img src="charles-v.jpg" alt="Charles V"/>
                    <p>Charles V, bust length... <br/><span>Giovanni Britto</span></p>
                    <span className="public">Public</span>
                </div>
                <div className="gallery-item">
                    <img src="charles-v.jpg" alt="Charles V"/>
                    <p>Charles V, bust length... <br/><span>Giovanni Britto</span></p>
                    <span className="public">Public</span>
                </div>
            </div>
            <div className="pagination">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
            </div>
        </section>

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
