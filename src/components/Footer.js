import './Footer.css';
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import WebLinks from '../data/WebLinks';

const Footer = () => {
  const handleRedirect = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="footer">
      <div className="footer-container">
        <span className="footer-item email">
          <a href="mailto:wesley.a.mitchell87@gmail.com" className="email-link">
            <FaEnvelope className="footer-icon footer-icon-email" size={20} />
            <span className="footer-text">wesley.a.mitchell87@gmail.com</span>
          </a>
        </span>
        <div className="social-icons">
          <span
            role="link"
            tabIndex={0}
            className="footer-item social"
            onClick={() => handleRedirect(WebLinks.githubProfile)}
          >
            <FaGithub className="footer-icon" size={30} />
          </span>
          <span
            role="link"
            tabIndex={0}
            className="footer-item social"
            onClick={() => handleRedirect(WebLinks.linkedInProfile)}
          >
            <FaLinkedin className="footer-icon" size={30} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
