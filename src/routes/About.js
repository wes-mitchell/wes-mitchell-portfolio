import Footer from 'components/Footer';
import HeroImageTwo from 'components/HeroImageTwo';
import Navbar from 'components/Navbar';
import React from 'react';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImageTwo header="About" description="About Description" />
      <Footer />
    </div>
  );
};

export default About;
