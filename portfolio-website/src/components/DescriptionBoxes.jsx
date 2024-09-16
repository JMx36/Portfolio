import React from 'react'

const DescriptionBoxes = ({title, descriptions, title_color="#119DA4", text_color='white', 
    background="#13505B", box_background="#02313A", main_title_style={}, inside_title_style={}, inside_text_style={}}) => {
  
    const main_title = {
        margin: 0,
        padding: 0,
        marginTop: "2%",
        marginLeft: "3%",
        color: {title_color},
        ...main_title_style,
    }

    const description_title={
        marginLeft: "5%",
        marginBottom: "0%",
        marginTop: "5%",
        padding: "2%",
        ...inside_title_style
    }

    const inside_text = {
        margin: "5% 6.5%",
        textAlign: "left",
        padding: "2%",
        ...inside_text_style
    }
  
    return (
    <div className="skills-description" style={{backgroundColor: background}}>
                <h3 className="italic-title" style={main_title}>{title}</h3>
                <div className="boxes-container" style={{color: text_color}}>
                    {
                        descriptions.map((info) => (
                            <div className="description-box" style={{backgroundColor: box_background}}>
                                <h3 className="sub-title-text" style={description_title}>{info[0]}</h3>
                                <p className="description-text" style={inside_text}>{info[1]}</p>
                            </div>
                        ))
                    }
                </div>
    </div>
  )
}

export default DescriptionBoxes