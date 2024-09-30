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
import se_icon from "../assets/Images/Logos/se-icon.svg"
import game_dev_icon from "../assets/Images/Logos/game-dev-icon.svg"
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
    constructor({image, width="clamp(20px, 20vw, 100px)", height="100px", margin_left="2%"})
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
            "I have worked in various groups of different sizes, learning how to collaborate effectively with others, whether within my own role or across departments. I’ve gained valuable experience in maintaining constant communication with my team, especially when updating them on completed tasks. Additionally, writing code alongside other programmers has taught me how to ensure my work integrates smoothly with theirs."
        ],
        ["Agile Methodologies",
            "I have been part of teams that utilized agile methodologies, such as Scrum, to manage product development. In these environments, I learned the importance of daily stand-ups and delivering work in a timely manner within sprints or other agile frameworks."
        ],
        ["Leading",
            "I’ve had the privilege of serving as a team lead for several group projects. In these leadership roles, I refined my abilities not only as a programmer but also as a leader. As the programming lead, I was responsible for writing code that my team could build upon, as well as guiding the team in approaching programming tasks. I focused on ensuring our code was maintainable and scalable for future needs"
        ]
    ]

    const CLogo = new ImageInfo({ image: c_logo});
    const CSharp = new ImageInfo({ image: c_sharp});
    const CPP = new ImageInfo({ image: cpp});
    const CSS = new ImageInfo({ image: css});
    const HTML = new ImageInfo({ image: html});
    const Python = new ImageInfo({ image: python});
    const Jira = new ImageInfo({ image: jira, width: "clamp(100px, 20vw, 150px)"});
    const GitHub = new ImageInfo({ image: github});
    const Unreal = new ImageInfo({ image: unreal, width: "clamp(100px, 20vw, 150px)"});
    const Unity = new ImageInfo({ image: unity, width: "clamp(100px, 20vw, 150px)"});
    const VisualStudio = new ImageInfo({ image: vs});
    const VSCode = new ImageInfo({ image: vscode});

    const logos = [CLogo, CSharp, CPP, CSS, HTML,Python, Jira, GitHub, Unreal, Unity, VisualStudio, VSCode];

    // States!

    const [isHovered, setIsHovered] = useState(false);

    const button_logo_style =
    {
        width: "clamp(30px, 5vw, 60px)",
        marginRight: '2%',
        display: "inline-block"
    }

    const words_style =
    {
        flexShrink: 0
    }

    return (
        <div className="skills-section">
            <div className="tech-and-tools">
                <div className="top-part">
                    <h2 className="dimmed-yellow-text italic work-sans-family fs-64px fw-700" style={{padding: "0%", margin: "0%"}}>Technologies & Tools</h2>
                </div>
                <p className="caption fs-20px fw-600 work-sans-family">As a developer, 
                    I embrace the philosophy of continuous learning and versatility. 
                    I find joy in exploring and mastering various technologies. 
                    Here are some of the technologies I've had the pleasure of working with.</p>
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
                <p className="fw-600 work-sans-family fs-32px" style={{padding: "0%", margin: "auto", marginTop: "5%"}}>Check out the tools I use as a</p>
                <div className="skills-buttons-container fw-600 work-sans-family fs-32px">
                    <Button logo={se_icon} text="Software Developer" text_style="work-sans-family fs-24px fw-600" text_color="black"
                        logo_style={button_logo_style} color="linear-gradient(90deg, #DAC21C 64%, #A59004 100%)" 
                        words_style={{...words_style, height: "100%", width: "49%"}}
                        style={{textAlign: "left",  width: "50%", padding: "0.5rem 1rem"
                        }}/>
                    <p className="fw-600 work-sans-family fs-32px" style={{padding: "0%", margin: "auto 5%"}}>and</p>
                    <Button logo={game_dev_icon} logo_style={button_logo_style} text="Game Developer" text_style="work-sans-family fs-24px fw-600" 
                        text_color="black" color="linear-gradient(90deg, #DAC21C 64%, #A59004 100%)" 
                        words_style={{...words_style, height: "100%", width: "49%"}}
                        style={{textAlign: "left", width: "50%", padding: "0.5rem 1rem"
                        }}/>
                </div>

            </div>

            <DescriptionBoxes title="Experience with ... " descriptions={descriptions} />
        </div>
    )
}

export default Skills