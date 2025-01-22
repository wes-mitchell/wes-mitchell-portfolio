import './HeroImageTwo.css';

import React from 'react';

const HeroImageTwo = ({ header, description }) => {
  return (
    <div className="hero-image">
      <div className="heading">
        <h1>{header}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HeroImageTwo;
