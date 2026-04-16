import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section hidden">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">Get to know me better</p>

      <div className="about-card">
        <div className="about-card-glow"></div>
        <p>
          Full Stack Web Developer with hands-on experience building scalable web
          applications using modern JavaScript frameworks. Proven ability to develop
          end-to-end solutions with <strong>clean architecture</strong>,{' '}
          <strong>RESTful APIs</strong>, and <strong>robust authentication systems</strong>.
          Passionate about delivering high-performance user interfaces and leveraging
          modern technologies to enhance application functionality.
        </p>
      </div>

      <div className="about-info-grid">
        <div className="about-info-item">
          <div className="info-icon-wrapper">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <h4>Education</h4>
          <p>TS Diploma in MIS</p>
          <span className="info-detail">Sibline Training Center</span>
        </div>
        <div className="about-info-item">
          <div className="info-icon-wrapper">
            <i className="fas fa-certificate"></i>
          </div>
          <h4>Certification</h4>
          <p>Full Stack Web Dev</p>
          <span className="info-detail">Digital Hub UNRWA</span>
        </div>
        <div className="about-info-item">
          <div className="info-icon-wrapper">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h4>Location</h4>
          <p>Tyre, Lebanon</p>
          <span className="info-detail">Available Remotely</span>
        </div>
        <div className="about-info-item">
          <div className="info-icon-wrapper">
            <i className="fas fa-language"></i>
          </div>
          <h4>Languages</h4>
          <p>Arabic &amp; English</p>
          <span className="info-detail">Native & Fluent</span>
        </div>
      </div>
    </section>
  );
}

export default About;