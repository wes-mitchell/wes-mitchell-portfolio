import React, { useState } from 'react';
import './WorkCard.css';
import ExternalLinkButton from './ExternalLinkButton';

const WorkCard = ({ project }) => {
  const {
    imageSource,
    title,
    details,
    viewUrl,
    sourceUrl,
    sourceUrlFE,
    sourceUrlBE,
  } = project;

  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedDetails = isExpanded
    ? details
    : `${details.substring(0, 150)}...`;

  const toggleDescription = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const renderLink = (url, buttonText) => {
    return <ExternalLinkButton url={url} buttonText={buttonText} />;
  };

  return (
    <div className="project-card">
      <img src={imageSource} alt={title} />
      <h2 className="project-title">{title}</h2>
      <div className="project-details">
        <p>{truncatedDetails}</p>
        <span className="show-more" onClick={toggleDescription}>
          {isExpanded ? 'Show Less' : 'Show More'}
        </span>
        <div className="project-btns">
          {viewUrl && renderLink(viewUrl, 'View')}
          {sourceUrl && sourceUrl !== '' && renderLink(sourceUrl, 'Source')}
          {sourceUrlFE && renderLink(sourceUrlFE, 'UI Source')}
          {sourceUrlBE && renderLink(sourceUrlBE, 'BE Source')}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
