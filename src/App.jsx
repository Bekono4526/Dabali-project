import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import ArticlePage from './pages/ArticlePage';
import Header from './components/Header';
import DabaliTraiteur from './pages/DabaliTraiteur';

import { articles } from './articles';
import './index.css'; // Assurez-vous d'importer le fichier CSS principal

function App() {
  return (
    <div id="root" className="app-container">
      <Router>
        <Header className="header-container" />
        <div className="main-content">
          <Routes>
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
