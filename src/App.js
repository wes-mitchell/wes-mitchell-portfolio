import React from 'react';
import './App.css';
import './index.css';
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Projects from './routes/Projects';

import { Route, Routes } from 'react-router-dom';
import Skills from 'routes/Skills';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
}

export default App;
