import React from 'react'
import {LogoImage} from "../components/utilities.jsx"


const SkillsBox = ({title, color="white", logos=[], animation=""}) => {
  return (
    <div className={`skills-box border-black ${animation}`} style={{backgroundColor: color, color: "black", overflow: "hidden", textAlign: "left"}}>
        
        <div className="skill-box-container fs-32px">
            <h3 style={{margin: "0% auto 5% 0%", paddingLeft: "10px", paddingRight: "10px"}}>{`${title}:`}</h3>
            <div className="images-container " style={{display: "flex", alignItems: "center", flexWrap: "wrap", gap: "5%"}}>
                {logos.map((logo, index) => <LogoImage setIsHovered={undefined} 
                                                image={logo.image}
                                                index={index % 12}      
                                                width={logo.dropdown_width}
                                                margin_left=""
                                                />)
                }
            </div>

        </div>
    </div>
  )
}

export default SkillsBox