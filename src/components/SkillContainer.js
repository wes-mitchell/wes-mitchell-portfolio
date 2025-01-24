import React from 'react';
import './SkillContainer.css';
import TechnicalSkillData from 'data/TechnicalSkillData';
import SkillCard from './SkillCard';

const SkillContainer = () => {
  return (
    <div className="skill-container">
      <div className="card-container">
        {Object.keys(TechnicalSkillData).map((category, index) => (
          <SkillCard
            key={index}
            header={category}
            data={TechnicalSkillData[category]}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillContainer;
