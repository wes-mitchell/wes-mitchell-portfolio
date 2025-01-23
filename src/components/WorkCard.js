import React from 'react';
import './WorkCard.css';
import ProjectOne from '../assets/project1.png';
import { NavLink } from 'react-router-dom';

const WorkCard = ({ imageSource, title, details, viewUrl, sourceUrl }) => {
  return (
    <div className="project-card">
      <img src={imageSource} alt="retail site with clothing" />
      <h2 className="project-title">{title}</h2>
      <div className="project-details">
        <p>{details}</p>
        <div className="project-btns">
          <NavLink to={viewUrl} className="btn">
            View
          </NavLink>
          <NavLink to={sourceUrl} className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
