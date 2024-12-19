import React from 'react';
import "./App.css";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

const App = () => {
  return (
    <>
    
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Projects />

    </>
    
  )
}

export default App