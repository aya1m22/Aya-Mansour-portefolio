import React, { useState, useEffect } from 'react';
import './Hero.css';
import avatar from '../assets/avatar.png';

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Full Stack Developer',
    'React.js Specialist',
    'Node.js Developer',
    'Python Developer',
  ];

  useEffect(() => {
    let charIndex = 0;
    let isDeleting = false;
    let timeout;

    const type = () => {
      const current = roles[currentRole];

      if (!isDeleting) {
        setDisplayText(current.substring(0, charIndex + 1));
        charIndex++;

        if (charIndex === current.length) {
          timeout = setTimeout(() => {
            isDeleting = true;
            type();
          }, 2000);
          return;
        }
      } else {
        setDisplayText(current.substring(0, charIndex - 1));
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          setCurrentRole((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      timeout = setTimeout(type, isDeleting ? 40 : 80);
    };

    timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, [currentRole]);

  return (
    <section id="home" className="hero hidden">
      {/* Animated background elements */}
      <div className="hero-bg-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="code-line code-1">&lt;Developer /&gt;</div>
        <div className="code-line code-2">{'{ code: true }'}</div>
        <div className="code-line code-3">npm run build</div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1>
            <span className="gradient-text">Aya Said</span>
            <br />
            <span className="gradient-text">Mansour</span>
          </h1>
          <div className="hero-role">
            <span className="role-prefix">&gt; </span>
            <span className="typed-text">{displayText}</span>
            <span className="cursor">|</span>
          </div>
          <p className="hero-desc">
            Building scalable web applications with clean architecture,
            RESTful APIs, and modern JavaScript frameworks. Passionate about
            delivering high-performance solutions.
          </p>
          <div className="hero-buttons">
            <a href="https://cdn.jsdelivr.net/gh/aya1m22/Aya-Mansour-portefolio@main/my-app/public/Aya_Said_Mansour_CV.docx" download className="btn btn-primary">
              <i className="fas fa-download"></i>
              Download CV
            </a>
            <a href="#projects" className="btn btn-outline">
              <i className="fas fa-code"></i>
              See My Work
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">2+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">1+</span>
              <span className="stat-label">Year Experience</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-container">
            <div className="avatar-glow"></div>
            <img src={avatar} alt="Developer Avatar" className="avatar-img" />
            <div className="orbit-ring">
              <div className="orbit-dot dot-1"><i className="fab fa-react"></i></div>
              <div className="orbit-dot dot-2"><i className="fab fa-node-js"></i></div>
              <div className="orbit-dot dot-3"><i className="fab fa-python"></i></div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll down</span>
      </div>
    </section>
  );
}

export default Hero;