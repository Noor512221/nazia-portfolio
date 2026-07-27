// src/pages/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! Demo state submitted.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <header className="page-header contact-header">
        <div className="container">
          <span className="badge-light">Get In Touch</span>
          <h1 className="page-title">Let’s Collaborate</h1>
          <p className="page-subtitle">
            Have a project in mind, a question, or just want to connect? Send a message below.
          </p>
        </div>
      </header>

      <section className="contact-section container">
        <div className="contact-grid">
          <div className="form-column">
            <h2 className="subsection-title">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary form-submit">Send Message</button>
            </form>
          </div>

          <aside className="info-column">
            <h3 className="subsection-title">Connect Directly</h3>
            <div className="info-list">
              <div className="info-item">
                <span className="info-icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>your.email@example.com</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Available for Remote Work</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}