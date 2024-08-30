import React from 'react'
import {LogoImage} from "../components/Skills.jsx"


const SkillsBox = ({title, color="white", logos=[]}) => {
  return (
    <div className={"skills-box border-black"} style={{backgroundColor: color, color: "black"}}>
        
        <div className="skill-box-container border-blue" style={{fontSize: "32px"}}>
            <h3 style={{width: "100%"}}>{`${title}:`}</h3>
            <div style={{display: "flex", flexWrap: "wrap", gap: "10%"}}>
                {logos.map((logo) => <LogoImage setIsHovered={undefined} 
                                                image={logo.image}
                                                index={index % 12}      
                                                width="4%"
                                                height="4%"
                                                margin_left=""
                                                />)}
            </div>

        </div>
    </div>
  )
}

export default SkillsBox