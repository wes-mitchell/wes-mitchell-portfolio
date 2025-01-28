import './Navbar.css';

import React from 'react';
import { Link } from 'react-router-dom';

import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [showHeaderBG, setShowHeaderBG] = useState(false);

  const handleHamburgerClick = () => setHamburgerOpen(!hamburgerOpen);

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setShowHeaderBG(true);
    } else {
      setShowHeaderBG(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div className={showHeaderBG ? 'header header-bg' : 'header'}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={hamburgerOpen ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleHamburgerClick}>
        {hamburgerOpen ? (
          <FaTimes size={20} style={{ color: '#fff' }} />
        ) : (
          <FaBars size={20} style={{ color: '#fff' }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
