import React, { useState } from 'react';

const Button = ({text, index, isOn, setIndex}) => 
{

    const [isHovered, SetHovered] = useState(false);

    const circle_style =
    {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "clamp(100px, 10vw, 200px)",
        height: "100%",
        borderRadius: "50%",
        background: "#FFDF00",
        filter: "blur(clamp(5px, 2vh, 30px)",
        zIndex: "-1"
    }

    return(
        <div className="" style={{width: "100%", maxWidth: "clamp(100px, 30vw, 200px)", height: "100%", 
            boxSizing: "border-box", 
        position: "relative", textAlign: "center"}}>
            
            <span className="fw-600 fs-24px work-sans-family cursor-pointer" style={
                {
                display: "inline-block",
                boxSizing: "border-box",
                position: "relative", 
                padding: "1rem 1rem",
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

                    <img src={content.image} alt="" style= {{display: "inline-block", width: content.width}}/> : ''
                }
            </div>
        </div>
    )
}


const CircularSelector = ({buttons_text, logos, parent_index_func}) => {

    const [currentIndex, SetIndex] = useState(-1);
    const [playCycle, SetPlayCycle] = useState(false);
    const [pauseRotation, SetPauseRotation] = useState(false);
    const [isCircleExpanded, SetIsCircleExpanded] = useState(false);

    const HandleButtonClick = (index) =>
    {
        SetIsCircleExpanded(false);
        SetIndex(index);
        parent_index_func(index);
    }

    const HandleEndAnimation = (e) => 
    {
        if (e.animationName === `expand-circle`)
        {
            SetIsCircleExpanded(true);
        }

        if (e.animationName === `move-corner5-initial`)
        {
            SetPlayCycle(true);
        }
    }


    return (
            <div className="circular-skills-container" onAnimationEnd={HandleEndAnimation}>
                {/* the cycle animation is dependent on the move-corner5-anim finishing */}
                <div className={`selector-circle ${currentIndex < 0 ? 'blur-circle-idle-anim' : 
                    !isCircleExpanded ? 'blur-circle-expand-anim' : ''}`} >
                    <BlurCircleContent isExpanded={isCircleExpanded} content={logos[currentIndex]}/>
                </div>
                {
                    buttons_text.map((button_info, index) => (
                        <div className={`absolute-center move-corner${index + 1}
                            ${!playCycle ? `move-corner${index + 1}-initial` : `move-corner${index + 1}-cycle`}`
                        }
                            onMouseEnter={() => SetPauseRotation(true)}
                            onMouseLeave={() => SetPauseRotation(false)}

                            style = {
                                {
                                    animationPlayState: pauseRotation || currentIndex >= 0 ? 'paused' : 'running',
                                }
                            }
                            >
                            <Button text={button_info} index={index} isOn={index === currentIndex} setIndex={HandleButtonClick}/>
                        </div>
                    ))
                }
            </div>
    )
}

export default CircularSelector