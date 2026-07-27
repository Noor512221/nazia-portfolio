// src/pages/About.jsx
import React, { useState } from 'react';
import './About.css';

export default function About() {
  const [hoverSkillId, setHoverSkillId] = useState(null);

  const skillCategories = [
    { id: 1, name: 'Core Web', skills: ['HTML5', 'CSS3 (Flexbox/Grid)', 'JavaScript (ES6+)', 'TypeScript'] },
    { id: 2, name: 'Frontend Frameworks', skills: ['React.js (Hooks, Context, Router)', 'Vite.js', 'Next.js'] },
    { id: 3, name: 'Backend & Automation', skills: ['Node.js', 'REST APIs', 'Webhook Integration', 'Zapier/n8n'] },
    { id: 4, name: 'Design & Tools', skills: ['Responsive Design', 'Figma to Code', 'Git/GitHub', 'Agile/Scrum'] },
  ];

  return (
    <div className="about-page">
      <header className="page-header about-header">
        <div className="container header-content">
          <span className="badge-primary">Crafting Solutions</span>
          <h1 className="page-title">Code & Creativity</h1>
          <p className="page-subtitle">
            A passionate Developer specializing in modern frontend technologies and smart workflow automation.
          </p>
        </div>
      </header>

      <section className="about-main container section">
        <div className="about-grid">
          <div className="biography-column">
            <h2 className="subsection-title">My Story & Approach</h2>
            <div className="bio-content">
              <p>
                I didn't just learn to code; I learned to solve. Starting with standard web technologies, I quickly became fascinated by how powerful frontend frameworks like React can create fluid user experiences.
              </p>
              <p>
                My philosophy is simple: write clean, modular, and maintainable code that delivers real value.
              </p>
            </div>
          </div>

          <div className="skills-column">
            <h2 className="subsection-title">Core Capabilities</h2>
            <div className="skills-grid">
              {skillCategories.map((category) => (
                <div 
                  key={category.id}
                  className={`skill-card ${hoverSkillId === category.id ? 'is-hovering' : ''}`}
                  onMouseEnter={() => setHoverSkillId(category.id)}
                  onMouseLeave={() => setHoverSkillId(null)}
                >
                  <h4 className="skill-category-title">{category.name}</h4>
                  <ul className="skill-list">
                    {category.skills.map((skill, index) => (
                      <li key={index} className="skill-item">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}