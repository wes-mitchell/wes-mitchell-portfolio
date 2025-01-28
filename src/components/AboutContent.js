import React from 'react';
import './AboutContent.css';
import { Link } from 'react-router-dom';
import AboutData from 'data/AboutData';
import ExternalLinkButton from './ExternalLinkButton';

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>{AboutData.header}</h1>
        {AboutData.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <span className="btn-container">
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
          <ExternalLinkButton
            url={AboutData.wmdrumsUrl}
            buttonText={'WMDRUMS'}
          />
        </span>
      </div>
      <div className="right">
        <div className="image-container">
          <div className="image-stack-bottom">
            <img
              className="image"
              src={AboutData.image}
              alt="Person Drumming at a drumset"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
