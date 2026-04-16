import React, { useState } from 'react';
import './FloatingContact.css';

const socialLinks = [
  {
    name: 'Email',
    icon: 'fas fa-envelope',
    url: 'mailto:aya.12.mansour.34@gmail.com',
    color: '#c9a96e',
  },
  {
    name: 'LinkedIn',
    icon: 'fab fa-linkedin-in',
    url: 'https://www.linkedin.com/in/aya-mansourr',
    color: '#5b9bd5',
  },
  {
    name: 'GitHub',
    icon: 'fab fa-github',
    url: 'https://github.com/aya1m22',
    color: '#b8c0d0',
  },
  {
    name: 'Instagram',
    icon: 'fab fa-instagram',
    url: 'https://www.instagram.com/aya._.mansour_12',
    color: '#d4878f',
  },
  {
    name: 'Phone',
    icon: 'fas fa-phone',
    url: 'https://wa.me/96176647155',
    color: '#7dba99',
  },
];

function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`floating-contact ${isOpen ? 'open' : ''}`}>
      {/* Social links that appear/disappear */}
      <div className="floating-links">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target={link.url.startsWith('mailto') || link.url.startsWith('tel') ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className="floating-link"
            title={link.name}
            style={{
              transitionDelay: isOpen ? `${index * 0.06}s` : `${(socialLinks.length - index) * 0.03}s`,
            }}
          >
            <i className={link.icon} style={{ color: link.color }}></i>
            <span className="link-tooltip">{link.name}</span>
          </a>
        ))}
      </div>

      {/* Toggle button */}
      <button
        className="floating-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle contact links"
      >
        <i className={isOpen ? 'fas fa-times' : 'fas fa-comment-dots'}></i>
      </button>
    </div>
  );
}

export default FloatingContact;
