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
import Triangle from "../components/utilities.jsx"
import SkillsBox from "../components/SkillsBox.jsx"


import React, { useState } from 'react';


const DropdownCategories = Object.freeze(
    {
     GameEngine: "Game Engines", 
     DeveloperTools: "Developer Tools", 
     Production: "Production",
     Languages: "Languages"
    }
)

class ImageInfo
{
    constructor({image, width="5%", height="5%", margin_left="2%", image_category=""})
    {
        this.image = image;
        this.width = width;
        this.height = height;
        this.margin_left = margin_left;
        this.image_category= image_category;
    }
}

export const LogoImage = ({setIsHovered=undefined, image, index, width="", height="", margin_left=""}) => {

    const image_style = {};

    if (width != "") image_style["width"] = width;
    if (height != "") image_style["height"] = height;
    if (margin_left != "") image_style["margin-left"] = margin_left;

    return (
        <img className={"logo-image cursor-pointer logo-image-" + index} 
            src={image}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={image_style}
            />
    )
}

const SkillsDropdown = ({title, index, category}) => {

    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setClicked] = useState(false);
    const [isAnimationFinished, setAnimationFinished] = useState(false);

    const handleClick = () => 
    {
        console.log("handleClick");
        setClicked(!isClicked);
    };

    const handleAnimation = () =>
    {
        setAnimationFinished(true);
    };


    return (
        <div className={"dropdown-box border-black dropdown-box-" + index}>
            <div className={`${isClicked ? "skill-triangle-animation" : ""} border-red`}>
                {
                    isClicked ? <SkillsBox color="#BFB14A" title={title}/> :
                    <h2 className={`dropdown-title normal-text-bigger `} style={{color: isHovered ? "#FFDF00" : "white"}} 
                        onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        {title}
                    </h2>
                }
                <div onMouseEnter={() => setIsHovered(true)} 
                    onMouseLeave={() => setIsHovered(false)} onAnimationEnd={handleAnimation}>
                    <Triangle color={isHovered || isClicked? "#FFDF00" : "white"} clickable={true} height="clamp(10px, 2vh, 24px)" width="clamp(50px, 5vw, 78px)" 
                    margin="auto" style={{marginTop: "10px"}} rotation={isAnimationFinished ?  "up" : "down"} func={handleClick}/>
                </div>
                
            </div>

        </div>
    )
}


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


    const CLogo = new ImageInfo({ image: c_logo, category: DropdownCategories.DeveloperTools});
    const CSharp = new ImageInfo({ image: c_sharp, category: DropdownCategories.DeveloperTools});
    const CPP = new ImageInfo({ image: cpp, category: DropdownCategories.DeveloperTools});
    const CSS = new ImageInfo({ image: css, height: "4.5%", width: "4.2%", category: DropdownCategories.DeveloperTools});
    const HTML = new ImageInfo({ image: html, height:"8.5%", width: "7.5%", margin_left: "0.5%", category: DropdownCategories.DeveloperTools});
    const Python = new ImageInfo({ image: python, width: "10%", height: "10%", margin_left: "0.5%", category: DropdownCategories.DeveloperTools});
    const Jira = new ImageInfo({ image: jira, width: "10%", height: "10%", category: DropdownCategories.ProductionTools});
    const GitHub = new ImageInfo({ image: github, width: "10%", height: "10%", category: DropdownCategories.DeveloperTools});
    const Unreal = new ImageInfo({ image: unreal, width: "15%", height: "10%", category: DropdownCategories.GameEngine});
    const Unity = new ImageInfo({ image: unity, width: "10%", height: "10%", category: DropdownCategories.GameEngine });
    const VisualStudio = new ImageInfo({ image: vs, width: "10%", height: "10%", margin_left: "0%", category: DropdownCategories.DeveloperTools});
    const VSCode = new ImageInfo({ image: vscode, width: "7%", margin_left: "0%", category: DropdownCategories.DeveloperTools });

    const logos = [CLogo, CSharp, CPP, CSS, HTML,Python, Jira, GitHub, Unreal, Unity, VisualStudio, VSCode];
                
    const dropdowns = [[DropdownCategories.GameEngine, "STUFF"], [DropdownCategories.DeveloperTools, "STUFF"], 
                [DropdownCategories.Production, "STUFF"], [DropdownCategories.Languages, "STUFF"],]

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
                    <div className="gears-box x-flip"></div>
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
                                    // we want to repeat the images twice for carousel effect
                                    for (let i = 0; i < 2; i++) 
                                    {
                                        logos.map((image_info, index) => (  
                                            elements.push(
                                            <LogoImage setIsHovered={setIsHovered} 
                                                image={image_info.image}
                                                index={index % 12}      
                                                width={image_info.width}
                                                height={image_info.height}
                                                margin_left={image_info.margin_left}
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

                                    // creates the rows and columns it needs
                                    dropdowns.map((dropdown, index) => {
                                            inside_elements.push(                                            
                                                <SkillsDropdown title={dropdown[0]} index={index}/>
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

                                    // adds any left over elements to the container
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