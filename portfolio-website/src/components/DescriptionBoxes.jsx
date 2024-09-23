import React from 'react'

const DescriptionBoxes = ({title, descriptions, title_color="#119DA4", text_color='white', 
    background="#13505B", box_background="#02313A", main_title_style={}, inside_title_style={}, inside_text_style={}}) => {
  
    const main_title = {
        margin: 0,
        padding: 0,
        marginTop: "2%",
        marginLeft: "3%",
        color: title_color,
        ...main_title_style,
    }

    const description_title={

        padding: "0rem",
        paddingTop: "0rem",
        marginBottom: "10%",
        ...inside_title_style
    }

    const inside_text = {
        margin: "0% auto",
        textAlign: "left",
        padding: "0rem",
        paddingBottom: "0rem",
        paddingTop: "0",
        ...inside_text_style
    }
  
    return (
    <div className="skills-description" style={{backgroundColor: background}}>
                <h3 className="italic fw-700 work-sans-family fs-64px" style={main_title}>{title}</h3>
                <div className="boxes-container" style={{color: text_color}}>
                    {
                        descriptions.map((info) => (
                            <div className="description-box" style={{backgroundColor: box_background}}>
                                <h3 className="fw-600 fs-40px work-sans-family" style={description_title}>{info[0]}</h3>
                                <p className="fw-300 fs-24px work-sans-family" style={inside_text}>{info[1]}</p>
                            </div>
                        ))
                    }
                </div>
    </div>
  )
}

export default DescriptionBoxes