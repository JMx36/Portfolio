import React from 'react'

import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Skills from '../components/Skills.jsx';
import HomePortfolio from '../components/HomePortfolio.jsx';
import Contact from '../components/Contact.jsx';


const HomePage = () => {
  return (
    <>
        <Hero />
        <About />
        <Skills />
        <HomePortfolio />
        {/* <Contact /> */}
    </>
  )
}

export default HomePage