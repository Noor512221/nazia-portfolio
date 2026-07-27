// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="main-header">
      <div className="container header-content">
        <Link to="/" className="site-logo">
          MyPortfolio<span className="logo-dot">.</span>
        </Link>
        <nav className="main-nav">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
            <li className="nav-item"><Link to="/services" className="nav-link">Services</Link></li>
            <li className="nav-item"><Link to="/projects" className="nav-link">Projects</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}