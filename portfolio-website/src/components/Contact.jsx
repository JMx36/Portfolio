import React from 'react'
import mail from "../assets/Images/Logos/mail.png"
import { useMediaQuery } from 'react-responsive';
import { Button } from '../components/utilities.jsx'

const ContactInputField = ({label, placeholder, background_color, useTextArea=false, style={}}) =>
{

  const label_style = 
  {
      display: "block",
      color: "black",
      fontSize: "24px",
      boxSizing: "border-box"
  }

  const input_style = 
  {
    display: "block",
    backgroundColor: background_color,
    color: "white",
    width: "clamp(260px, 69vw, 600px)",
    borderRadius: "9px",
    padding: "0.5rem",
    boxSizing: "border-box",
    outline: "none"
  }

  return(
    <div className='contact-input-field'>
      <label className="work-sans-family fw-600 fs-24px" htmlFor="name" style={label_style}>{label}<span style={{color: "red"}}>*</span></label>
      {
        useTextArea ? <textarea className="work-sans-family fw-400 fs-24px" type="text" id={label} name={label} placeholder={placeholder} style={input_style}></textarea> : 
        <input className="work-sans-family fw-400 fs-24px" type="text" id={label} name={label} placeholder={placeholder} style={input_style}/>
      }
    </div>
  )
}


const ContactLogoImage = ({image, title, info}) =>
{
  return(
    <div className="contact-logo-image">
          <img src={image}/>
          <div className="contact-logo-image-info fs-24px">
              <h2 className="work-sans-family fw-700 italic" style={{margin: "0"}}>{title}</h2>
              <p className="work-sans-family fw-400" style={{textAlign: "left", margin: "0"}}>{info}</p>
          </div>
    </div>
  )
  
}


const Contact = () => {

  const button_style = 
  {
    marginTop: "2.5%"
  }

  return (
    <div id="Contact" className="contact-section"> 
        <div className="contact-section-title">
            <h1 className='italic work-sans-family fw-700 fs-64px' style={{margin: 0, padding: 0}}>Get In Touch</h1>
        </div>  
        <div className="contact-info-container">
          <div className="contact-logos-container">
            <ContactLogoImage image={mail} title="EMAIL" info="jcpm2603@gmail.com"/>
            <ContactLogoImage image={mail} title="PHONE" info="(714)-276-7492"/>
            <ContactLogoImage image={mail} title="LOCATION" info="CA, United States"/>
          </div>
          <div className='contact-input'>
            <div className="contact-input-container">
              <ContactInputField label="Email" placeholder="Enter your email address" background_color="rgba(222, 221, 221, 0.5)" />
              <ContactInputField label="Subject" placeholder="Enter the subject of your email" background_color="rgba(222, 221, 221, 0.5)" />
              <ContactInputField useTextArea={true} label="Message" placeholder="Enter your message (ex. Hi :) )" background_color="rgba(222, 221, 221, 0.5)" />
              <Button text="Send" color="none" style={button_style} text_color='white'
                hover_color='black'
                words_style={{textShadow: "3px 2px 4px rgba(255, 255, 255, 40%)"}}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact