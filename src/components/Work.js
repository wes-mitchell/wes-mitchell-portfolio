import React from 'react';
import './WorkCard.css';
import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData';

const Work = () => {
  console.log(WorkCardData);
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCardData &&
          WorkCardData?.map((d) => {
            return (
              <WorkCard
                key={d.id}
                title={d.title}
                details={d.details}
                viewUrl={d.viewUrl}
                sourceUrl={d.sourceUrl}
                imageSource={d.imageSource}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Work;
