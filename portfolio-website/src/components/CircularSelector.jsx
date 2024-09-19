import React, { useState } from 'react';
import c_logo from "../assets/Images/TempLogos/c_processed1.png"

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


const BlurCircleContent = ({isExpanded, content=[1, 2, 3, 5, 6, 7, 8, 9 ,10]}) => 
{
    return(
        <div style={{width: "100%", height: "100%", position: "relative"}}>
            <div className='blur-circle'></div>
            <div className='text'>
                { isExpanded ? 
                    content.map((item) => 
                    (
                        <img src={c_logo} alt="" />
                    )
                    ) : ''
                }
            </div>
        </div>
    )
}



const CircularSelector = () => {
   
    const buttons_text = ["Production", "Engines", "Version Control", "Software", "Languages"]

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
                <div className="circular-skills-container border-black">
                    <div className={`selector-circle ${currentIndex < 0 ? 'blur-circle-idle-anim' : ''}`} 
                        style={selector_circle_style}>
                        <BlurCircleContent isExpanded={currentIndex >= 0}/>
                    </div>
                    {
                        buttons_text.map((button_info, index) => (
                            <div className={`absolute-center move-corner${index + 1}`}>
                                <Button text={button_info} index={index} isOn={index === currentIndex} setIndex={SetIndex}/>
                            </div>
                        ))
                    }
                </div>
        </div>
    )
}

export default CircularSelector