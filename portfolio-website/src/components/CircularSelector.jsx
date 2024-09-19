import React, { useState } from 'react';
import c_logo from "../assets/Images/WhiteLogos/c.png"
import cpp_logo from "../assets/Images/WhiteLogos/cpp.png"
import cs_logo from "../assets/Images/WhiteLogos/cs.png"
import python_logo from "../assets/Images/WhiteLogos/python.png"
import github_logo from "../assets/Images/WhiteLogos/github.png"
import gitkraken_logo from "../assets/Images/WhiteLogos/gitkraken.png"
import html_logo from "../assets/Images/WhiteLogos/html.png"
import unity_logo from "../assets/Images/WhiteLogos/unity.png"
import unreal_logo from "../assets/Images/WhiteLogos/unreal.png"
import vs_logo from "../assets/Images/WhiteLogos/vs.png"
import vscode_logo from "../assets/Images/WhiteLogos/vscode.png"
import jira_logo from "../assets/Images/WhiteLogos/jira.png"

class ImageInfo
{
    constructor({image, width="50px", height="50px"})
    {
        this.image = image;
        this.width = width;
        this.height = height;
    }
}


const Button = ({text, index, isOn, setIndex}) => 
{

    const [isHovered, SetHovered] = useState(false);

    const circle_style =
    {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        background: "#FFDF00",
        filter: "blur(30px)",
        zIndex: "-1"
    }

    return(
        <div className="" style={{width: "100%", maxWidth: "200px", height: "100%", position: "relative", textAlign: "center"}}>
            
            <span className="normal-text-medium cursor-pointer" style={
                {
                display: "inline-block",
                boxSizing: "border-box",
                position: "relative", 
                padding: "1rem 2rem",
                textShadow: isOn ? "" : "0px 3.5px 4px rgba(82, 82, 82, 0.63)",
            }} 
                onClick={() => 
                    setIndex(isOn ? -1 : index)
                }
                onMouseEnter={() => SetHovered(true)}
                onMouseLeave={() => SetHovered(false)}
                >
                {text}
                {isOn || isHovered ? <div style={circle_style}></div> : ''}
            </span>
        </div>
    )
}


const BlurCircleContent = ({isExpanded, content}) => 
{
    return(
        <div style={{width: "100%", height: "100%", position: "relative"}}>
            <div className='blur-circle'></div>
            <div className='text'>
                { isExpanded ? 
                    content.map((logo_info) => 
                    (
                        <img src={logo_info.image} alt="" style= {{display: "inline-block", width: logo_info.width}}/>
                    )
                    ) : ''
                }
            </div>
        </div>
    )
}



const CircularSelector = () => {
   
    const CLogo = new ImageInfo({ image: c_logo});
    const CSharp = new ImageInfo({ image: cs_logo});
    const CPP = new ImageInfo({ image: cpp_logo});
    const Gitkraken = new ImageInfo({ image: gitkraken_logo});
    const Python = new ImageInfo({ image: python_logo});
    const Jira = new ImageInfo({ image: jira_logo, width: "100px"});
    const GitHub = new ImageInfo({ image: github_logo});
    const Unreal = new ImageInfo({ image: unreal_logo, width: "100px"});
    const Unity = new ImageInfo({ image: unity_logo, width: "100px"});
    const VisualStudio = new ImageInfo({ image: vs_logo});
    const VSCode = new ImageInfo({ image: vscode_logo});

    const buttons_text = ["Production", "Engines", "Version Control", "Software", "Languages"];
    const logos = [
        [Jira],
        [Unreal, Unity],
        [GitHub, Gitkraken],
        [VisualStudio, VSCode],
        [CLogo, CPP, CSharp, Python]
    ];
    const [currentIndex, SetIndex] = useState(1);

    const selector_circle_style =
    {
        height: "60%",
        width: "30%"
    }

    return (
        <div className="circular-skills-section">
                <h2 className="lighter-blue-text italic-title" style={{margin: "5% auto"}}>Technologies & Tools</h2>
                <p className="caption description-text">As a developer, 
                    I embrace the philosophy of continuous learning and versatility. 
                    I find joy in exploring and mastering various technologies. 
                    Here are some of the technologies I've had the pleasure of working with.
                </p>
                <div className="circular-skills-container">
                    <div className={`selector-circle ${currentIndex < 0 ? 'blur-circle-idle-anim' : ''}`} 
                        style={selector_circle_style}>
                        <BlurCircleContent isExpanded={currentIndex >= 0} content={logos[currentIndex]}/>
                    </div>
                    {
                        buttons_text.map((button_info, index) => (
                            <div className={`absolute-center move-corner${index + 1} move-corner${index + 1}-initial`}>
                                <Button text={button_info} index={index} isOn={index === currentIndex} setIndex={SetIndex}/>
                            </div>
                        ))
                    }
                </div>
        </div>
    )
}

export default CircularSelector