// src/pages/Projects.jsx
import React, { useState } from 'react';
import './Projects.css';

export default function Projects() {
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  const projectData = [
    {
      id: 1,
      title: 'E-Commerce Analytics Dashboard',
      category: 'Web Application',
      description: 'A full-stack React application providing real-time data visualization and sales analytics.',
      tags: ['React', 'Node.js', 'Chart.js', 'REST API'],
      liveLink: '#',
      gitLink: '#',
    },
    {
      id: 2,
      title: 'Workflow Automation Hub',
      category: 'Automation',
      description: 'An internal tool designed to connect webhooks and APIs to automate repetitive task execution.',
      tags: ['Node.js', 'Express', 'Zapier API', 'Webhooks'],
      liveLink: '#',
      gitLink: '#',
    },
    {
      id: 3,
      title: 'Modern Portfolio Template',
      category: 'Frontend',
      description: 'A single-page portfolio website template built with Vite and React.',
      tags: ['React', 'Vite', 'CSS Grid', 'Responsive'],
      liveLink: '#',
      gitLink: '#',
    },
  ];

  return (
    <div className="projects-page">
      <header className="page-header projects-header">
        <div className="container header-content">
          <span className="badge-primary">Portfolio</span>
          <h1 className="page-title">Featured Work</h1>
          <p className="page-subtitle">
            A showcase of web applications and automated workflows I have built.
          </p>
        </div>
      </header>

      <section className="projects-main container section">
        <div className="projects-grid">
          {projectData.map((project) => (
            <div 
              key={project.id}
              className={`project-card ${hoveredProjectId === project.id ? 'is-hovering' : ''}`}
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
            >
              <div className="card-cover">
                <span className="project-category">{project.category}</span>
                <div className="cover-placeholder">{project.title.substring(0, 1)}</div>
              </div>

              <div className="card-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} className="btn-link">View Live →</a>
                  <a href={project.gitLink} className="btn-link">GitHub →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}