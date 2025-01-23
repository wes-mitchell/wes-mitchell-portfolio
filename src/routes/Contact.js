import React from 'react';
import Footer from 'components/Footer';
import Form from 'components/Form';
import HeroImageTwo from 'components/HeroImageTwo';
import Navbar from 'components/Navbar';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImageTwo header="Contact" description="Contact Description" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
