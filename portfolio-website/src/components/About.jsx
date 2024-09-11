import brush_stroke from "../assets/Images/Logos/brush-stroke3.png"
import { useMediaQuery } from 'react-responsive';
import {Link} from 'react-router-dom'
import { Button } from '../components/utilities.jsx'

import React, { useState } from 'react';

const About = () => {

    const isSmallerScreen = useMediaQuery({ query: '(max-width: 1000px)' });
    const left_text_buttons = ["See My Resume", "See My Portfolio"]

    return (
        <div className="about-me">
            {/* <div className="about-shape"></div> */}
            <h1 className="about-title italic-title in-front">About Me</h1>
            <div className="about-container in-front">
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
                            <p className="normal-text-medium in-front" style={{padding: "2rem", paddingTop: "0.5rem"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                                mollit anim id est laborum.
                            </p>
                            <Button text="Learn more about me" text_style="normal-text-medium" text_color="#D9D9D9" color="none" style={{
                                        padding: "0",
                                        paddingRight: "2rem",
                                        paddingBottom: "1rem",
                                        marginLeft: "auto",
                                        marginRight: "0",
                                        fontStyle: "italic",
                                        boxShadow: "none"
                                    }}/>
                        </div>
                    </div>
                </div>
                <div className="about-info-buttons">
                    {
                        left_text_buttons.map((text) => (
                            <Button text={text} color="linear-gradient(90deg, #119DA4 58%, #0C7489 100%)"/>
                        )
                        )            
                    }
                </div>
            </div>

        </div>
    )
}

export default About