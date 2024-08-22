import c_logo from "../assets/Images/Logos/c.png"
import c_sharp from "../assets/Images/Logos/cs.png"
import cpp from "../assets/Images/Logos/c++.png"
import css from "../assets/Images/Logos/css.png"
import github from "../assets/Images/Logos/github-transparent.png"
import html from "../assets/Images/Logos/html.png"
import jira from "../assets/Images/Logos/jira.png"
import python from "../assets/Images/Logos/python.png"
import unreal from "../assets/Images/Logos/side_unreal_engine.png"
import unity from "../assets/Images/Logos/unity.png"
import vs from "../assets/Images/Logos/vs.png"
import vscode from "../assets/Images/Logos/vscode.png"

import React, { useState } from 'react';

const Skills = () => {

    const descriptions = 
    [
        ["Team Work",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        ],
        ["Team Work",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        ],
        ["Team Work",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        ]
    ]

    const logos = [c_logo, c_sharp, cpp, css, html, python, jira, github, unreal, unity, vs, vscode]

    const dropdowns = [["Game Engines", "STUFF"], ["Developer Tools", "STUFF"], ["Teamwork/Organization/Productivity", "STUFF"]]

    // States!

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="skills-section">
            <div className="header">
                <div className="diamond-line medium-line"></div>
                <h1 className="bright-yellow-text italic-title title-text-padding">Skills</h1>
                <div className="diamond-line medium-line"></div>
            </div>
            <div className="skills-description">
                {
                    descriptions.map((info) => (
                        <div className="description-box">
                            <h3 className="description-title sub-title-text">{info[0]}</h3>
                            <p className="description-text inside-text">{info[1]}</p>
                        </div>
                    ))
                }
            </div>
            <div className="tech-and-tools">
                <div className="top-part">
                    <div className="gears-box x-flip">
                    </div>
                    <h2 className="bright-yellow-text sub-title-text title-text-padding">Technologies & Tools</h2>
                    <div className="gears-box"></div>
                </div>
                <p className="caption description-text">As a developer, I embrace the philosophy of continuous learning and versatility. I find joy in exploring and mastering various technologies. Here are some of the technologies I've had the pleasure of working with.</p>
                <div className="carousel-container">
                    <div className={`carousel-inner ${isHovered ? 'carousel-paused' : ''}`}>
                        {
                            (() => 
                                {
                                    const elements = [];

                                    for (let i = 0; i < 2; i++) 
                                    {
                                        logos.map((image, index) => (
                                            elements.push(<img className=
                                                {"logo-image logo-image-" + (index % 12)} 
                                                src={image}
                                                onMouseEnter={() => setIsHovered(true)}
                                                onMouseLeave={() => setIsHovered(false)}
                                                />)
                                        ));
                                    }
                                    return elements;  
                                }
                            )()
                        }
                    </div>
                </div>
                <div className="dropdowns-section">
                    <div className="dropdown-container">
                        {         
                            (() =>
                                {
                                    let inside_elements = [];
                                    const containers = []
                                    const row_size = 2;
                                    let index_copy = 0;

                                    dropdowns.map((dropdown, index) => {
                                            inside_elements.push(                                            
                                                <div className={"dropdown-box dropdown-box" + index}>
                                                    <div></div>
                                                    <h2 className="dropdown-title normal-text-bigger ">{dropdown[0]}</h2>
                                                    <div className="triangle-container">
                                                        <div className="triangle"></div>
                                                    </div>
                                                    {/* <p className="dropdown-info description-text">{dropdown[1]}</p> */}
                                                </div>
                                            )

                                            if ((index + 1) % row_size == 0)
                                            {
                                                containers.push(
                                                    <div className={`dropdown-row dropdown-row-${index}`}> 
                                                        {inside_elements}
                                                    </div>
                                                )

                                                inside_elements = [];
                                            }

                                            index_copy = index;
                                        }
                                    )

                                    if (inside_elements.length > 0)
                                    {
                                        containers.push(
                                            <div className={`dropdown-row dropdown-row-${index_copy}`}> 
                                                {inside_elements}
                                            </div>
                                        )
                                    }

                                    return containers;
                                }
                            )()
                        }
                    </div>
                </div>
            </div>
            <div className="bottom-header">
                <div className="diamond-line long-line"></div>
            </div>
        </div>
    )
}

export default Skills