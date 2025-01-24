import React from 'react';
import AboutContent from 'components/AboutContent';
import Footer from 'components/Footer';
import HeroImageTwo from 'components/HeroImageTwo';
import Navbar from 'components/Navbar';
import PageData from '../data/PageData';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImageTwo
        header={PageData.About.header}
        description={PageData.About.description}
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
