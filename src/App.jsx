import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import ArticlePage from './pages/ArticlePage';

import DabaliTraiteur from './pages/DabaliTraiteur';
import Franchise from './pages/Franchise';
import Menu from './pages/Menu';
import Gallerie from './pages/Gallerie';
import Contact from './pages/Contact';
import FullMenuPage from './pages/FullMenuPage'; // Assurez-vous d'importer FullMenuPage

import { articles } from './articles';
import './index.css'; // Assurez-vous d'importer le fichier CSS principal

function App() {
  return (
    <div id="root" className="app-container">
      <Router>
      
        <div className="main-content">
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallerie" element={<Gallerie />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/full-menu" element={<FullMenuPage />} /> {/* Ajouter la route pour FullMenuPage */}
            <Route path="/traiteur" element={<DabaliTraiteur />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home articles={articles} />} />
            <Route path="/article/:id" element={<ArticlePage articles={articles} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
