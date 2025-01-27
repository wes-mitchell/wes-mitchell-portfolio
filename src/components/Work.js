import React from 'react';
import './WorkCard.css';
import WorkCard from './WorkCard';
import ProjectData from './WorkCardData';

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="card-container">
        {ProjectData &&
          ProjectData.map((project) => (
            <WorkCard key={project.id} project={project} />
          ))}
      </div>
    </div>
  );
};

export default Work;
