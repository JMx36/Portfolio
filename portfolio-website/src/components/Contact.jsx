import React from 'react'
import mail from "../assets/Images/Logos/mail.png"
import { useMediaQuery } from 'react-responsive';
import { Button } from '../components/utilities.jsx'

const ContactInputField = ({label, placeholder, background_color, useTextArea=false, style={}}) =>
{

  const label_style = 
  {
      color: "#119DA4",
      fontSize: "24px"
  }


  const input_style = 
  {
    backgroundColor: background_color,
    color: "white",
    width: "600px",
    borderRadius: "9px",
    border: "none",
    padding: "0.5rem",
    fontWeight: "400"
  }

  return(
    <div className='contact-input-field'>
      <label className="normal-text-medium" htmlFor="name" style={label_style}>{label}<span style={{color: "red"}}>*</span></label>
      {
        useTextArea ? <textarea className="normal-text-medium" type="text" id={label} name={label} placeholder={placeholder} style={input_style}></textarea> : 
        <input className="normal-text-medium" type="text" id={label} name={label} placeholder={placeholder} style={input_style}/>
      }
    </div>
  )
}


const ContactLogoImage = ({image, title, info}) =>
{
  return(
    <div className="contact-logo-image">
          <img src={image} style={{width: "96px", height: "96px"}}/>
          <div className="contact-logo-image-info">
              <h2 className="fs-30px" style={{margin: "0"}}>{title}</h2>
              <p className="normal-text-medium" style={{textAlign: "left", margin: "0"}}>{info}</p>
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
    <div className="contact-section"> 
        <div className="contact-section-title">
            <h1 className='italic-title' style={{ fontSize: "64px", margin: "0"}}>Get In Touch</h1>
        </div>  
        <div className="contact-info-container">
          <div className="contact-logos-container">
            <ContactLogoImage image={mail} title="EMAIL" info="jcpm2603@gmail.com"/>
            <ContactLogoImage image={mail} title="PHONE" info="(714)-276-7492"/>
            <ContactLogoImage image={mail} title="LOCATION" info="CA, United States"/>
          </div>
          <div className='contact-input'>
            <div className="contact-input-container">
              <ContactInputField label="Email" placeholder="Enter your email address" background_color="black" />
              <ContactInputField label="Subject" placeholder="Enter the subject of your email" background_color="black" />
              <ContactInputField useTextArea={true} label="Message" placeholder="Enter your message (ex. Hi :) )" background_color="black" />
              <Button text="Send" color="linear-gradient(90deg, #119DA4 58%, #0C7489 100%)" style={button_style}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact