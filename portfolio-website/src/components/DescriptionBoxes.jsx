import React from 'react'

const DescriptionBoxes = ({title, descriptions, title_color="#DAC21C", text_color='white', 
    background="linear-gradient(-180deg, #13505B 0%, #28AAC1 100%, #28AAC1 100%)", box_background="#02313A", main_title_style={}, inside_title_style={}, inside_text_style={}}) => {
  
    const main_title = {
        margin: 0,
        padding: 0,
        marginTop: "5%",
        marginLeft: "3%",
        color: title_color,
        ...main_title_style,
    }

    const description_title={

        padding: "2rem",
        paddingBottom: "0rem",
        marginBottom: "5%",
        ...inside_title_style,
    }

    const inside_text = {
        margin: "0% auto",
        textAlign: "left",
        padding: "2rem",
        paddingTop: "0",
        ...inside_text_style
    }
  
    return (
    <div className="skills-description" style={{background: background}}>
            <h3 className="italic fw-700 work-sans-family fs-64px" style={main_title}>{title}</h3>
            <div className="boxes-container " style={{color: text_color}}>
                {
                    descriptions.map((info) => (
                        <div className="description-box" >
                            <div className='description-box-blur' style={{backgroundColor: box_background}}></div>
                            <h3 className="italic fw-400 fs-40px work-sans-family to-front2" style={description_title}>{info[0]}</h3>
                            <p className="fw-300 fs-24px work-sans-family to-front2" style={inside_text}>{info[1]}</p>
                        </div>
                    ))
                }
            </div>
    </div>
  )
}

export default DescriptionBoxes