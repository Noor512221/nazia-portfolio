// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="container hero-content">
          <span className="badge">Available for Hire & Projects</span>
          <h1 className="hero-title">Building Scalable Web Apps & Automated Systems</h1>
          <p className="hero-subtitle">
            Hi, I’m a Developer crafting modern web experiences, responsive frontend applications, and custom automated workflows.
          </p>
          <div className="button-group">
            <Link to="/projects" className="btn-primary">View My Work</Link>
            <Link to="/contact" className="btn-secondary-light">Get In Touch</Link>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stat-card">
            <h2 className="stat-number">10+</h2>
            <p className="stat-label">Completed Projects</p>
          </div>
          <div className="stat-card">
            <h2 className="stat-number">100%</h2>
            <p className="stat-label">Client Satisfaction</p>
          </div>
          <div className="stat-card">
            <h2 className="stat-number">Fast</h2>
            <p className="stat-label">Performance & Automation</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <h2>Have a project in mind?</h2>
          <p>Let's collaborate to bring your ideas to life with clean code and smart automation.</p>
          <Link to="/contact" className="btn-cta">Start a Conversation</Link>
        </div>
      </section>
    </div>
  );
}