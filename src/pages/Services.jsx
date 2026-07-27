// src/pages/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

export default function Services() {
  const offerings = [
    {
      id: 1,
      icon: '🌐',
      title: 'Responsive Web Development',
      description: 'Building modern, fast, and accessible single-page applications and web applications.',
      details: ['React, Vite, Next.js', 'Clean & Modular Architecture', 'Performance Optimization'],
    },
    {
      id: 2,
      icon: '⚡',
      title: 'Workflow Automation',
      description: 'Connecting APIs, webhooks, and services to automate repetitive tasks and optimize operations.',
      details: ['API Integration', 'Data Pipeline Creation', 'Trigger-based Workflows'],
    },
    {
      id: 3,
      icon: '🎨',
      title: 'UI/UX Implementation',
      description: 'Turning Figma designs into pixel-perfect, interactive React components.',
      details: ['Design System Development', 'Interactive Components', 'Responsive Layouts'],
    },
  ];

  return (
    <div className="services-page">
      <header className="page-header services-header">
        <div className="container header-content">
          <span className="badge-light">Expertise</span>
          <h1 className="page-title">Services & Technical Capabilities</h1>
          <p className="page-subtitle">
            I leverage modern frontend frameworks and intelligent automation to build digital solutions.
          </p>
        </div>
      </header>

      <section className="services-grid-section container">
        <h2 className="section-title">What I Offer</h2>
        <div className="services-grid">
          {offerings.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-box">{service.icon}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
              <ul className="service-details-list">
                {service.details.map((detail, index) => (
                  <li key={index} className="service-detail-item">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section services-cta">
        <div className="container cta-content">
          <h2>Ready to automate and build better?</h2>
          <p>Let's collaborate on your next technical challenge or development project.</p>
          <Link to="/contact" className="btn-cta-blue">Schedule a Consultation</Link>
        </div>
      </section>
    </div>
  );
}