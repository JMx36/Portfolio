import React from 'react'

import Hero from '../components/Hero.jsx';
import GamingSkills from '../components/GamingSkills.jsx';
import { ButtonInfo } from '../components/utilities.jsx';

const GamingPortfolio = () => {

  const hero_typewrite_text = ["Game Engineer", "Software Engineer"]
  const hero_buttons = [
    new ButtonInfo({text: "Resume", isLink: true, link: "index.html", type: "aTag"}), 
    new ButtonInfo({text: "About", isLink: true, link: "/index.html#About", type: "aTag"})
  ]

  return (
    <>
        <Hero typewriter_text={hero_typewrite_text} buttons_info={hero_buttons}/>
        <GamingSkills />
    </>
  )
}

export default GamingPortfolio