import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="logo-bracket">&lt;</span>AM<span className="logo-bracket"> /&gt;</span>
            </a>
            <p className="footer-tagline">Full Stack Web Developer</p>
          </div>

          <div className="footer-socials">
            <a href="mailto:aya.12.mansour.34@gmail.com" title="Email" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/aya-mansourr" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/aya1m22" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/aya._.mansour_12" target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Designed & Built by <span className="gradient-text">Aya Said Mansour</span> &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
