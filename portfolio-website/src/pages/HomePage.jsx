import React from 'react'

import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Skills from '../components/Skills.jsx';
import HomePortfolio from '../components/HomePortfolio.jsx';
import { ButtonInfo } from '../components/utilities.jsx';


const HomePage = () => {

  const hero_typewrite_text = ["Game Engineer", "Software Engineer"]
  const hero_buttons = [
    new ButtonInfo({text: "Resume", isLink: true, link: "#Home-Portfolio", type: "aTag", scroll_type: "scroll"}), 
    new ButtonInfo({text: "Portfolio", isLink: true, link: "#Home-Portfolio", type: "aTag", scroll_type: "scroll"})
  ]

  return (
    <>
        <Hero typewriter_text={hero_typewrite_text} buttons_info={hero_buttons} background='url("assets/Images/Hero/HomeHeroImage.jpg")'/>
        <About />
        <Skills />
        <HomePortfolio />
    </>
  )
}

export default HomePage