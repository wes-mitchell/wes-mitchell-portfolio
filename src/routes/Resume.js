import React from 'react';
import Footer from 'components/Footer';
import HeroImageTwo from 'components/HeroImageTwo';
import Navbar from 'components/Navbar';
import PageData from '../data/PageData';
import ResumeContainer from 'components/ResumeContainer';

const Resume = () => {
  return (
    <div>
      <Navbar />
      <HeroImageTwo
        header={PageData.Resume.header}
        description={PageData.Resume.description}
      />
      <ResumeContainer />
      <Footer />
    </div>
  );
};

export default Resume;
