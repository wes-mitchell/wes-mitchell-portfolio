import './HeroImage.css';

import React from 'react';

import IntroImage from '../assets/intro-bg.jpg';
import { Link } from 'react-router-dom';

const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img
          className="intro-image"
          src={IntroImage}
          alt="middle aged man sitting at kitchen table using a computer"
        />
      </div>
      <div className="content">
        <p>Hello, I'm Wesley Mitchell</p>
        <h1>Full Stack Developer</h1>
        <div>
          <Link to="/projects" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
