// src/pages/Projects.jsx
import React, { useState } from 'react';
import './Projects.css';

export default function Projects() {
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  const projectData = [
    {
      id: 1,
      title: 'Smart Document Classifier',
      category: 'n8n Automation',
      description: 'An AI-powered n8n workflow that automatically analyzes, categorizes, and extracts structured data from PDFs and scanned documents.',
      tags: ['n8n', 'OCR', 'Python', 'AI / ML'],
      liveLink: 'https://github.com/Noor512221/n8n-automation-workflows/tree/main/02-Smart%20document%20classifer',
    },
    {
      id: 2,
      title: 'Facebook Page Auto-Post Bot',
      category: 'n8n Automation',
      description: 'Automated publishing bot using n8n and Facebook Graph API to schedule and post rich media content automatically.',
      tags: ['n8n', 'Facebook API', 'Webhooks', 'Scheduler'],
      liveLink: 'https://github.com/Noor512221/n8n-automation-workflows/tree/main/01-FBPage-auto-post',
    },
    {
      id: 3,
      title: 'Joke Sheet Generator',
      category: 'Data Automation',
      description: 'Automated workflow that fetches jokes from public REST APIs, filters content, and exports formatted CSV/Excel sheets.',
      tags: ['n8n', 'REST API', 'Excel / CSV', 'JSON'],
      liveLink: 'https://github.com/Noor512221/n8n-automation-workflows/tree/main/03-Joke-sheet-generator',
    },
    {
      id: 4,
      title: 'SaaS Landing Template',
      category: 'Frontend & SaaS',
      description: 'A modern, high-converting SaaS landing page template built with responsive layouts and clean UI design.',
      tags: ['React', 'Tailwind CSS', 'Vercel', 'GitHub'],
      liveLink: 'https://vercel.com/nazia3/saas-landing-template',
      gitLink: 'https://github.com/Noor512221/saas-landing-template',
    },
    {
      id: 5,
      title: 'SaaS Web Application Project',
      category: 'Full-Stack / Web App',
      description: 'A feature-rich SaaS application deployment showcasing interactive components and seamless modern web development.',
      tags: ['React', 'Frontend', 'Vercel Deployment'],
      liveLink: 'https://vercel.com/nazia3/saas-project',
    },
  ];

  return (
    <div className="projects-page">
      <header className="page-header projects-header">
        <div className="container header-content">
          <span className="badge-primary">Portfolio</span>
          <h1 className="page-title">Featured Projects & Workflows</h1>
          <p className="page-subtitle">
            A showcase of web applications, SaaS templates, and automated workflows I have built.
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
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-link"
                  >
                    View Project →
                  </a>
                  {project.gitLink && (
                    <a 
                      href={project.gitLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-link"
                    >
                      Source Code →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}