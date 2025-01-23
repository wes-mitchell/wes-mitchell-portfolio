import React from 'react';
import './AboutContent.css';
import { Link } from 'react-router-dom';
import ImageOne from '../assets/react1.jpg';
import ImageTwo from '../assets/react2.webp';

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>Test description about myself</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="image-container">
          <div className="image-stack-top">
            <img className="image" src={ImageOne} alt="" />
          </div>
          <div className="image-stack-bottom">
            <img className="image" src={ImageTwo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
