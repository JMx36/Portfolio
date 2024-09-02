import React from 'react'
import {LogoImage} from "../components/utilities.jsx"


const SkillsBox = ({title, color="white", logos=[], animation=""}) => {
  return (
    <div className={`skills-box border-black ${animation}`} style={{backgroundColor: color, color: "black", overflow: "hidden"}}>
        
        <div className="skill-box-container" style={{fontSize: "32px"}}>
            <h3 style={{width: "100%"}}>{`${title}:`}</h3>
            <div className="border-black" style={{display: "flex", flexWrap: "wrap", gap: "5%"}}>
                {logos.map((logo, index) => <LogoImage setIsHovered={undefined} 
                                                image={logo.image}
                                                index={index % 12}      
                                                width="20%"
                                                height="20%"
                                                margin_left=""
                                                />)}
            </div>

        </div>
    </div>
  )
}

export default SkillsBox