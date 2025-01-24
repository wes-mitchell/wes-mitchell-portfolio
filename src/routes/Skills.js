import React from 'react';
import HeroImageTwo from '../components/HeroImageTwo';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PageData from 'data/PageData';
import SkillContainer from 'components/SkillContainer';

const Skills = () => {
  return (
    <div>
      <Navbar />
      <HeroImageTwo
        header={PageData.Skills.header}
        description={PageData.Skills.description}
      />
      <SkillContainer />
      <Footer />
    </div>
  );
};

export default Skills;
