import PricingCard from 'components/PricingCard';
import Footer from '../components/Footer';
import HeroImageTwo from '../components/HeroImageTwo';
import Navbar from '../components/Navbar';
import React from 'react';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImageTwo header="Projects" description="Projects Description" />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Projects;
