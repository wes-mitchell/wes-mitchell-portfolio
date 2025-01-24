import React from 'react';
import Footer from 'components/Footer';
import Form from 'components/Form';
import HeroImageTwo from 'components/HeroImageTwo';
import Navbar from 'components/Navbar';
import PageData from '../data/PageData';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImageTwo
        header={PageData.Contact.header}
        description={PageData.Contact.description}
      />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
