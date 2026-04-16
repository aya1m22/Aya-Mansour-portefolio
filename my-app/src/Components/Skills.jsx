import React from 'react';
import './Skills.css';

const skillGroups = [
  {
    title: 'Frontend',
    icon: 'fas fa-palette',
    skills: [
      'React.js', 'Vue.js', 'Next.js', 'HTML5', 'CSS3',
      'Tailwind CSS', 'Responsive Design', 'Vite',
    ],
  },
  {
    title: 'Backend',
    icon: 'fas fa-server',
    skills: [
      'Node.js', 'Express.js', 'NestJS',
      'Python (FastAPI, Flask, Django)', 'REST API Design',
    ],
  },
  {
    title: 'Languages',
    icon: 'fas fa-code',
    skills: [
      'JavaScript (ES6+)', 'TypeScript', 'Python', 'VB.NET',
    ],
  },
  {
    title: 'Databases',
    icon: 'fas fa-database',
    skills: [
      'PostgreSQL', 'MongoDB', 'MySQL', 'Oracle', 'Supabase',
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: 'fas fa-tools',
    skills: [
      'Git & GitHub', 'CI/CD (Vercel, Render)', 'npm',
      'VS Code', 'Crystal Reports',
    ],
  },
  {
    title: 'Architecture',
    icon: 'fas fa-sitemap',
    skills: [
      'JWT Auth & RBAC', 'SSR / CSR / SSG', 'SOLID Principles',
      'Clean Architecture', 'MVC', 'Agile / Scrum',
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section hidden">
      <h2 className="section-title">Technical Skills</h2>
      <p className="section-subtitle">Technologies I work with</p>

      <div className="skills-container">
        {skillGroups.map((group, index) => (
          <div key={index} className="skill-group" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="group-header">
              <div className="group-icon">
                <i className={group.icon}></i>
              </div>
              <h3 className="group-title">{group.title}</h3>
            </div>
            <div className="skill-list">
              {group.skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  <span className="skill-dot"></span>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;