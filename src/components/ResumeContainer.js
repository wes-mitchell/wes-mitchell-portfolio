import React, { useState } from 'react';
import './ResumeContainer.css';
import PageOne from 'assets/resume-page-one.png';
import PageTwo from 'assets/resume-page-two.png';
import ResumeModal from './ResumeModal';

const ResumeContainer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="resume-container">
      <div className="resume-pages">
        <div className="page">
          <img src={PageOne} alt="Resume Page 1" />
        </div>
        <div className="page">
          <img src={PageTwo} alt="Resume Page 2" />
        </div>
      </div>

      <button onClick={() => setShowModal(!showModal)} className="btn">
        Download Resume
      </button>

      {showModal && (
        <ResumeModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default ResumeContainer;
