import React from 'react';
import './Experience.css';

const experiences = [
  {
    type: 'work',
    date: 'January 2026 – May 2026',
    title: 'Full-Stack Web Development Intern',
    company: 'Digital Hub UNRWA',
    points: [
      'Developed and maintained full-stack web applications using React, Node.js, and PostgreSQL in an Agile team environment',
      'Implemented RESTful APIs and authentication systems using JWT tokens and role-based access control',
      'Collaborated with senior developers on code reviews, debugging, and feature implementation',
      'Participated in daily stand-ups and sprint planning meetings following Scrum methodology',
    ],
  },
  {
    type: 'work',
    date: '2024 – 2025',
    title: 'Data Entry & Maintenance Assistant',
    company: 'V-Sign',
    points: [
      'Entered and managed technical and customer data with high accuracy and attention to detail',
      'Assisted with electronics and laptop maintenance, troubleshooting, and repair workflows',
      'Supported administrative operations, documentation management, and customer service',
    ],
  },
];

const education = [
  {
    date: 'January 2026 – May 2026',
    title: 'Full Stack Web Development Certification',
    institution: 'Digital Hub UNRWA',
    detail: 'Backend: Node.js, Express.js, NestJS, Python (Flask/Django/FastAPI), REST API Design',
  },
  {
    date: '2023 – 2025',
    title: 'TS Diploma in Management Information System',
    institution: 'Sibline Training Center, Saida, Lebanon',
    detail: 'System analysis (MERISE), database management, programming fundamentals, and networking',
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section hidden">
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">My professional journey</p>

      <div className="timeline">
        <div className="timeline-category">
          <h3 className="category-label">
            <i className="fas fa-briefcase"></i> Professional
          </h3>
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <span className="timeline-date">{exp.date}</span>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <ul>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="timeline-category">
          <h3 className="category-label">
            <i className="fas fa-graduation-cap"></i> Education
          </h3>
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot dot-edu"></div>
              <div className="timeline-card">
                <span className="timeline-date">{edu.date}</span>
                <h3>{edu.title}</h3>
                <h4>{edu.institution}</h4>
                <p>{edu.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;