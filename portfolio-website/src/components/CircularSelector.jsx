import React, { useState } from 'react';

const Button = ({text}) => 
{


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
        <div style={{width: "100%", height: "100%", position: "relative"}}>
            
            <span className="normal-text-medium" style={{position: "relative", padding: "1rem 2rem"}}>
                {text}
                <div style={circle_style}></div>
            </span>
        </div>
    )
}



const CircularSelector = () => {
   
    const buttons_text = ["Prodcution", "Engines", "Software", "Languages", "Version Control"]


    return (
        <div className="circular-skills-section">
                <h2 className="lighter-blue-text italic-title" style={{margin: "5% auto"}}>Technologies & Tools</h2>
                <p className="caption description-text">As a developer, 
                    I embrace the philosophy of continuous learning and versatility. 
                    I find joy in exploring and mastering various technologies. 
                    Here are some of the technologies I've had the pleasure of working with.
                </p>
                <div className="circular-skills-container">
                    <div className='selector-circle'>
                        <div style={{width: "100%", height: "100%", position: "relative"}}>
                            <div className='blur-circle'></div>
                            {/* <p className="text">Text</p> */}
                        </div>
                    </div>
                    {
                        buttons_text.map((button_info, index) => (
                            <div className={`absolute-center move-corner${index + 1}`}><Button text={button_info}/></div>
                        ))
                    }
                </div>
        </div>
    )
}

export default CircularSelector