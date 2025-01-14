import c_logo from "../assets/Images/WhiteLogos/c.png"
import c_sharp from "../assets/Images/WhiteLogos/cs.png"
import cpp from "../assets/Images/WhiteLogos/cpp.png"
import css from "../assets/Images/WhiteLogos/css_small.png"
import github from "../assets/Images/WhiteLogos/github.png"
import html from "../assets/Images/WhiteLogos/html_small.png"
import jira from "../assets/Images/WhiteLogos/jira_small.png"
import python from "../assets/Images/WhiteLogos/python.png"
import unreal from "../assets/Images/WhiteLogos/unreal_small.png"
import unity from "../assets/Images/WhiteLogos/unity_small.png"
import vs from "../assets/Images/WhiteLogos/vs.png"
import vscode from "../assets/Images/WhiteLogos/vscode.png"

import {Triangle, LogoImage, Button} from "../components/utilities.jsx"
import SkillsBox from "../components/SkillsBox.jsx"
import DescriptionBoxes from "../components/DescriptionBoxes.jsx"


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
    constructor({image, width="clamp(70px, 10vw, 100px)", height="auto", margin_left="2.5%"})
    {
        this.image = image;
        this.width = width;
        this.height = height;
        this.margin_left = margin_left;
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


const Skills = () => 
{

    const descriptions = 
    [
        ["Collaboration",
            "Worked in teams of various sizes, honing my ability to collaborate effectively both within my role and across departments. Through consistent communication, I’ve learned the importance of keeping my team informed, particularly when sharing updates on completed tasks. Working alongside other programmers has also taught me how to ensure seamless integration of my code with theirs."
        ],
        ["Agile",
            "Been part of teams that employed agile methodologies like Scrum to guide product development. These experiences taught me the importance of daily stand-ups for alignment, timely delivery within sprints, and adaptability to changing requirements. This approach reinforced the importance of iterative progress and clear communication in achieving success."
        ],
        ["Leading",
            "Within several group projects, I’ve had the privilege of leading the programming department. In this role, I honed my skills as both a programmer and a leader, taking responsibility for writing foundational code that the team could build upon and guiding the team in tackling programming tasks. My focus was on ensuring our code was maintainable and scalable to meet future needs."
        ]
    ]

    const CLogo = new ImageInfo({ image: c_logo});
    const CSharp = new ImageInfo({ image: c_sharp});
    const CPP = new ImageInfo({ image: cpp});
    const CSS = new ImageInfo({ image: css, width:"clamp(55px, 9vw, 90px)"});
    const HTML = new ImageInfo({ image: html, width:"clamp(55px, 9vw, 90px)"});
    const Python = new ImageInfo({ image: python});
    const Jira = new ImageInfo({ image: jira});
    const GitHub = new ImageInfo({ image: github});
    const Unreal = new ImageInfo({ image: unreal});
    const Unity = new ImageInfo({ image: unity});
    const VisualStudio = new ImageInfo({ image: vs});
    const VSCode = new ImageInfo({ image: vscode});

    const logos = [CLogo, CSharp, CPP, CSS, HTML,Python, Jira, GitHub, Unreal, Unity, VisualStudio, VSCode];

    // States!

    const [isHovered, setIsHovered] = useState(false);

    const button_logo_style =
    {
        // width: "clamp(30px, 5vw, 60px)",
        marginRight: '2%',
        display: "inline-block"
    }

    const words_style =
    {
        flexShrink: "0",
        lineHeight: "1.2"
    }

    return (
        <div className="skills-section">
            <div className="tech-and-tools">
                <div className="top-part">
                    <h2 className="dimmed-yellow-text italic work-sans-family fs-64px fw-700" style={{padding: "0%", margin: "0%"}}>Technologies & Tools</h2>
                </div>
                <p className="caption fs-36px fw-400 work-sans-family">As a developer, I thrive on continuous learning and adaptability, finding excitement in exploring and mastering diverse technologies. Below are some of the tools and technologies I’ve enjoyed working with.</p>
                <div className="carousel-container">
                    <div style={{position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "#A59004", filter: "blur(20px)"}}></div>
                    <div className="carousel-movement-container">
                        <div className={`carousel-inner ${isHovered ? 'carousel-paused' : ''}`} >
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
                </div>
                <p className="fw-6\400 work-sans-family fs-32px" style={{padding: "0%", margin: "auto", marginTop: "max(30px, 3%)"}}>Check out the tools I use as a</p>
                <div className="skills-buttons-container fw-400 work-sans-family fs-36px">
                    <Button text="Software Developer" text_style="pacifico-family fs-36px " hover_color="#A59004"
                        logo_style={button_logo_style} color="none" 
                        words_style={{...words_style, textShadow: "3px 3px 5px rgba(0, 0, 0, 40%)"}}
                        text_color="black"
                        style={{minWidth: "max-content", textAlign: "left", padding: "0", marginRight: "0"}}
                        isLink={true} link_to={"software-portfolio#tech-and-tools"} link_type="Link"
                        scroll_type="scroll"
                        />
                    <p className="work-sans-family fs-36px">and</p>
                    <Button logo_style={button_logo_style} text="Game Developer" text_style="pacifico-family fs-36px" 
                        hover_color="#A59004" color="none" text_color="black"
                        words_style={{...words_style, textShadow: "3px 3px 5px rgba(0, 0, 0, 40%)"}}
                        style={{minWidth: "max-content", textAlign: "left", padding: "0", margin: 0, marginRight: "auto"}}
                        isLink={true} link_to={"gaming-portfolio#tech-and-tools"} link_type="Link"
                        scroll_type="scroll"
                        />
                </div>

            </div>

            <DescriptionBoxes title="Experience with ... " descriptions={descriptions} />
        </div>
    )
}

export default Skills