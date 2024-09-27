import React, {useState} from 'react'
import {LogoImage} from "./utilities.jsx"

const Box = ({image_info, index}) => {

  const original_color = "0px 10px 20px rgba(2, 89, 104, 0.7)";
  const hover_color =  "0px 10px 20px rgba(165, 144, 4, 1)";
  const [isHovered, SetHovered] = useState(false)

  return(
    <div style={{display: "flex", width: "min(20vw, 100px)", aspectRatio: "1/1", backgroundColor: isHovered ? "#A59004" : "#025968", borderRadius: "10%",
      boxShadow: isHovered ? hover_color : original_color, position: "relative", transform: isHovered ? "translateY(-7%)" : 'none'}}
      
      onMouseEnter={() => SetHovered(true)} 
      onMouseLeave={() => SetHovered(false)}
    >
        <LogoImage 
            image={image_info.image}
            index={index % 12}      
            width={image_info.width}
            height={image_info.height}
            margin_left='auto'
            margin_right='auto'
            margin_bottom='auto'
            margin_top='auto'
                />
    </div>  
  )
}


const LogosDisplay = ({logos}) => {

  return (
    <div className='row-container' style={{display: "flex", flexWrap: "wrap", gap: "20px", margin: "5% 5%", 
      marginBottom: "10%", justifyContent: 'center', alignItems: "center"}}>
        {
            logos.map((image, index) => (
              <Box image_info={image} index={index}/>
            ))
        }
    </div>
  )
}

export default LogosDisplay