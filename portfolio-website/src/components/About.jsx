
import { useMediaQuery } from 'react-responsive';
import {Link} from 'react-router-dom'
import { Button } from '../components/utilities.jsx'

import React, { useState } from 'react';

const About = () => {

    const isSmallerScreen = useMediaQuery({ query: '(max-width: 1000px)' });
    const left_text_buttons = [ "See My Portfolio", "See My Resume"]

    return (
        <div className="about-me">            
            <div className="about-container in-front">
                <h1 className="about-title work-sans-family fw-700 italic fs-64px in-front ">About Me</h1>
                <div className="about-info-container">
                    <div className="about-left-section">
                        <div className="circle-container">
                            <div className="circle-mask">
                                <img src="" />
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="about-right-section">
                        <div className="about-text-section">
                            <p className="work-sans-family fw-400 fs-20px in-front" style={{padding: "2rem", paddingTop: "2rem"}}>
                            Hi, I’m Josh! I’m currently a senior at the University of California, Irvine, pursuing a double major in Computer Science and Game Development. I’m a dedicated individual with a passion for learning, programming, and creating solutions that make people’s lives easier and more enjoyable. Over the past three years, I’ve honed my programming skills, not only through practical experience but also by deepening my understanding of core concepts and theories.

Through game jams and hackathons, I’ve learned the importance of teamwork and communication, collaborating with others to bring ideas to life. I value and strive to write clean, maintainable code that is easy to understand—a craft I find beautiful, like a piece of art

Why did I choose to major in Game Development in addition to Computer Science? Because I’ve always loved playing games, and I wanted to learn how to create meaningful, impactful games like the ones I grew up playing. While I may not be a game designer, I love using my programming skills to bring game concepts to life and build tools for designers to shape their vision. Majoring in Game Development has given me a deeper understanding of the entire game development process, allowing me to create better tools and systems for the various teams involved.

As I prepare to transition into the professional world, I’m excited to apply everything I’ve learned—whether it’s building an app that improves the lives of millions or developing a game that millions of people will enjoy.

                            </p>
                            <Button text="Learn more about me" text_style="italic work-sans-family fw-400 fs-20px" text_color="#D9D9D9" color="none" style={{
                                        padding: "0",
                                        paddingRight: "2rem",
                                        paddingBottom: "1rem",
                                        marginLeft: "auto",
                                        marginRight: "0",
                                        boxShadow: "none"
                                    }}/>
                        </div>
                    </div>
                </div>
                <div className="about-info-buttons">
                    {
                        left_text_buttons.map((text) => (
                            <Button text={text} color="linear-gradient(90deg, #119DA4 58%, #0C7489 100%)" 
                              style={{minWidth: "300px"}}  />
                        )
                        )            
                    }
                </div>
            </div>

        </div>
    )
}

export default About