// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';
import './App.css';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  return (
    <div className="app-main-wrapper">
      <Header />
      <main className="content-area">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}