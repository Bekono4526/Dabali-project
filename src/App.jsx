// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css'; // Assurez-vous d'importer le fichier CSS principal

function App() {
    return (
        <div id="root" className="app-container">
            <Router>
                <Header className="header-container" />
                <div className="content-container">
                    <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
                <Footer className="footer-menu-container" />
            </Router>
        </div>
    );
}

export default App;
