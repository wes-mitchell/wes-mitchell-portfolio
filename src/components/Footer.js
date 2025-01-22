import './Footer.css';
import React from 'react';
import { FaEnvelope, FaGithub, FaHome, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="location">
            <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
            <div>
              <p>New Orleans, LA</p>
            </div>
          </div>
          <div className="email">
            <h4>
              <FaEnvelope
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              wesley.a.mitchell87@gmail.com
            </h4>
          </div>
        </div>
        <div className="footer-right">
          <h4>About Me</h4>
          <p>My name is Wesley Mitchell</p>
          <div className="social">
            <FaGithub
              size={30}
              style={{ color: '#fff', marginRight: '1rem' }}
            />
            <FaLinkedin
              size={30}
              style={{ color: '#fff', marginRight: '1rem' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
