import React from 'react';
import Footer from '../components/Footer';
import HeroImageTwo from '../components/HeroImageTwo';
import Navbar from '../components/Navbar';
import PageData from 'data/PageData';
import Work from 'components/Work';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImageTwo
        header={PageData.Projects.header}
        description={PageData.Projects.description}
      />
      <Work />
      <Footer />
    </div>
  );
};

export default Projects;
