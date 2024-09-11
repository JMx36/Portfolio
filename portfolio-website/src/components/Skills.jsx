import c_logo from "../assets/Images/TempLogos/c_processed.png"
import c_sharp from "../assets/Images/TempLogos/cs_processed.png"
import cpp from "../assets/Images/TempLogos/cpp_processed.png"
import css from "../assets/Images/TempLogos/css_processed.png"
import github from "../assets/Images/TempLogos/github_processed.png"
import html from "../assets/Images/TempLogos/html_processed.png"
import jira from "../assets/Images/TempLogos/jira_processed.png"
import python from "../assets/Images/TempLogos/python_processed.png"
import unreal from "../assets/Images/TempLogos/unreal_processed.png"
import unity from "../assets/Images/TempLogos/unity_processed.png"
import vs from "../assets/Images/TempLogos/vs_processed.png"
import vscode from "../assets/Images/TempLogos/vscode_processed.png"
import {Triangle, LogoImage} from "../components/utilities.jsx"
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
    constructor({image, width="5%", height="5%", dropdown_width="10%", margin_left="2%", category=""})
    {
        this.image = image;
        this.width = width;
        this.height = height;
        this.margin_left = margin_left;
        this.category= category;
        this.dropdown_width = dropdown_width;
    }
}


const SkillsDropdown = ({title, index, category, logos}) => {

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
        <div className={"dropdown-box dropdown-box-" + index}>
            <div className={`dropdown-box-container`}>
                {
                    isClicked ? <SkillsBox animation="skill-triangle-animation" color="#BFB14A" title={title} logos={logos}/> :
                    <h2 className={`dropdown-title normal-text-bigger`} style={{color: isHovered ? "#FFDF00" : "white"}} 
                        onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        {title}
                    </h2>
                }
                <div onMouseEnter={() => setIsHovered(true)} 
                    onMouseLeave={() => setIsHovered(false)} onAnimationEnd={handleAnimation}>
                    <Triangle color={isHovered || isClicked? "#FFDF00" : "white"} clickable={true} height="clamp(10px, 2vh, 24px)" width="clamp(50px, 5vw, 78px)" 
                    margin="auto" style={{marginTop: "10px"}} rotation={isClicked ?  "up" : "down"} func={handleClick}/>
                </div>
                
            </div>

        </div>
    )
}


const SearchDropdownImages = ({images_list, category}) => {

    let category_images = [];
    // console.log("Image list", images_list);
    // console.log("Category", category);
    for (const image of images_list) 
    {
        if (image.category === category) category_images.push(image);
    }
    // console.log(category_images);
    return category_images;
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

    const CLogo = new ImageInfo({ image: c_logo, width: "7%", category: DropdownCategories.Languages});
    const CSharp = new ImageInfo({ image: c_sharp, width: "7%", category: DropdownCategories.Languages});
    const CPP = new ImageInfo({ image: cpp, width: "7%", category: DropdownCategories.Languages});
    const CSS = new ImageInfo({ image: css, dropdown_width: "7%", category: DropdownCategories.Languages});
    const HTML = new ImageInfo({ image: html, dropdown_width: "7%", category: DropdownCategories.Languages});
    const Python = new ImageInfo({ image: python, category: DropdownCategories.Languages});
    const Jira = new ImageInfo({ image: jira, width: "15%", dropdown_width: "30%", category: DropdownCategories.Production});
    const GitHub = new ImageInfo({ image: github, category: DropdownCategories.DeveloperTools});
    const Unreal = new ImageInfo({ image: unreal, width: "15%", dropdown_width: "30%",category: DropdownCategories.GameEngine});
    const Unity = new ImageInfo({ image: unity, width: "15%", dropdown_width: "30%", category: DropdownCategories.GameEngine });
    const VisualStudio = new ImageInfo({ image: vs, width: "7%", category: DropdownCategories.DeveloperTools});
    const VSCode = new ImageInfo({ image: vscode, width: "7%", category: DropdownCategories.DeveloperTools});

    const logos = [CLogo, CSharp, CPP, CSS, HTML,Python, Jira, GitHub, Unreal, Unity, VisualStudio, VSCode];
                
    const dropdowns = [[DropdownCategories.GameEngine, "STUFF"], [DropdownCategories.Production, "STUFF"], [DropdownCategories.DeveloperTools, "STUFF"], 
                , [DropdownCategories.Languages, "STUFF"],]

    // States!

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="skills-section">
            <div className="tech-and-tools">
                <div className="top-part">
                    <div className="gears-box x-flip"></div>
                    <h2 className="bright-yellow-text sub-title-text">Technologies & Tools</h2>
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
                                                <SkillsDropdown title={dropdown[0]} index={index} 
                                                category={dropdown[0]} logos={SearchDropdownImages({images_list: logos, category: dropdown[0]})}/>
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

            <div className="skills-description">
                <h3 className="italic-title">Experience with ...</h3>
                <div className="boxes-container">
                    {
                        descriptions.map((info) => (
                            <div className="description-box">
                                <h3 className="description-title sub-title-text">{info[0]}</h3>
                                <p className="description-text inside-text">{info[1]}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills