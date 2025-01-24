import React from 'react';
import HeroImageTwo from '../components/HeroImageTwo';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PageData from 'data/PageData';
import PricingCard from 'components/PricingCard';
import Work from 'components/Work';
import SkillContainer from 'components/SkillContainer';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImageTwo
        header={PageData.Projects.header}
        description={PageData.Projects.description}
      />
      <Work />
      {/* <PricingCard /> */}
      <SkillContainer />
      <Footer />
    </div>
  );
};

export default Projects;
