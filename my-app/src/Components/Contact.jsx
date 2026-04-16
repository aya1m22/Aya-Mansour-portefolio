import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section hidden">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">Let's work together</p>

      <div className="contact-container">
        <a href="mailto:aya.12.mansour.34@gmail.com" className="contact-card">
          <div className="contact-icon-box">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="contact-info">
            <h4>Email</h4>
            <p>aya.12.mansour.34@gmail.com</p>
          </div>
          <i className="fas fa-arrow-right contact-arrow"></i>
        </a>

        <a href="https://wa.me/96176647155" target="_blank" rel="noopener noreferrer" className="contact-card">
          <div className="contact-icon-box">
            <i className="fas fa-phone"></i>
          </div>
          <div className="contact-info">
            <h4>Phone</h4>
            <p>+961 76 647 155</p>
          </div>
          <i className="fas fa-arrow-right contact-arrow"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/aya-mansourr"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="contact-icon-box linkedin">
            <i className="fab fa-linkedin-in"></i>
          </div>
          <div className="contact-info">
            <h4>LinkedIn</h4>
            <p>Aya Mansour</p>
          </div>
          <i className="fas fa-arrow-right contact-arrow"></i>
        </a>

        <a
          href="https://github.com/aya1m22"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="contact-icon-box github">
            <i className="fab fa-github"></i>
          </div>
          <div className="contact-info">
            <h4>GitHub</h4>
            <p>AyaMansour</p>
          </div>
          <i className="fas fa-arrow-right contact-arrow"></i>
        </a>

        <a
          href="https://www.instagram.com/aya._.mansour_12"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="contact-icon-box instagram">
            <i className="fab fa-instagram"></i>
          </div>
          <div className="contact-info">
            <h4>Instagram</h4>
            <p>aya._mansour_12</p>
          </div>
          <i className="fas fa-arrow-right contact-arrow"></i>
        </a>

        <div className="contact-card location-card">
          <div className="contact-icon-box">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className="contact-info">
            <h4>Location</h4>
            <p>Tyre, Lebanon</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;