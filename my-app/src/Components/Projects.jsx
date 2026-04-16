import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Company Ratings Platform',
    subtitle: 'Full-Stack Employee Review System',
    icon: 'fas fa-star',
    description:
      'Built a full-stack employee review platform using React, Vite, and Tailwind CSS on the frontend with Node.js and Express on the backend.',
    fullDescription:
      'Features JWT authentication, RBAC with 3 user roles, and PostgreSQL database via Supabase. Implemented admin dashboard with analytics, email verification, password hashing, rate limiting, and audit logging.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Supabase'],
    github: 'https://github.com/waledayoub-77/company_ratings',
    accent: '#c9a96e',
  },
  {
    title: 'Water Company Management System',
    subtitle: 'Complete Business Operations System',
    icon: 'fas fa-tint',
    description:
      'Developed a complete management system using VB.NET and Oracle Database for water company operations covering billing, inventory, and customer tracking.',
    fullDescription:
      'Designed full relational database structure with normalized tables and implemented all system workflows using Oracle PL/SQL. Generated automated reports using Crystal Reports for business analytics.',
    tags: ['VB.NET', 'Oracle', 'PL/SQL', 'Crystal Reports', 'Database Design'],
    github: 'https://github.com/aya1m22/water-company-management-system',
    accent: '#a58d5c',
  },
];

function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="projects-section hidden">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">Some of my recent work</p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <div className="project-icon">
                <i className={project.icon}></i>
              </div>
              <div className="project-number">0{index + 1}</div>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <span className="project-subtitle">{project.subtitle}</span>
              <p className="project-desc">{project.description}</p>

              <div className={`project-expanded ${expandedProject === index ? 'show' : ''}`}>
                <p className="project-desc">{project.fullDescription}</p>
              </div>

              <div className="tech-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <button
                  className="show-more-btn"
                  onClick={() => toggleProject(index)}
                >
                  {expandedProject === index ? (
                    <>
                      <i className="fas fa-chevron-up"></i> Show Less
                    </>
                  ) : (
                    <>
                      <i className="fas fa-chevron-down"></i> Show More
                    </>
                  )}
                </button>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <i className="fab fa-github"></i>
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;