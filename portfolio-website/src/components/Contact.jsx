import React, { useState } from 'react'
import mail from "../assets/Images/Contact/email.svg"
import location from "../assets/Images/Contact/location-pin.svg"
import phone from "../assets/Images/Contact/phone.svg"
import { useMediaQuery } from 'react-responsive';
import { Button } from '../components/utilities.jsx'
import emailjs from 'emailjs-com';

const ContactInputField = ({label, placeholder, background_color, change_func, value_state,
  type="text", useTextArea=false, style={}}) =>
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
        useTextArea ? 
        <textarea required className="work-sans-family fw-400 fs-24px" type={type} id={label} value={value_state}
                    name={label} placeholder={placeholder} style={input_style} onChange={change_func}>
        </textarea>
         : 
        
        <input required className="work-sans-family fw-400 fs-24px" type={type} id={label} value={value_state}
         name={label} placeholder={placeholder} style={input_style} onChange={change_func}/>
      }
    </div>
  )
}


const ContactLogoImage = ({image, title, info}) =>
{
  return(
    <div className="contact-logo-image">
          <div style={{display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "black", borderRadius: "50%", padding: "1rem"}}>
            <img src={image}/> 
          </div>
          <div className="contact-logo-image-info fs-24px">
              <h2 className="work-sans-family fw-700 italic" style={{margin: "0"}}>{title}</h2>
              <p className="work-sans-family fw-400" style={{textAlign: "left", margin: "0"}}>{info}</p>
          </div>
    </div>
  )
  
}


const Contact = () => {

  const email_max_length = 100;
  const subject_max_length = 150;

  const [formData, setFormData] = useState({
    Email: '',
    Subject: '',
    Message: '',
  });
  
  const HandleChange = (e) => {
    if (e.target.name === "Email" && e.target.value.length > email_max_length)
      return;
    if (e.target.name === "Subject" && e.target.value.length > subject_max_length)
      return;

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const SendEmail = (e) => {
    e.preventDefault();
    console.log("Send Email")
    // Resets form data
    setFormData(
      {     
      Email: '',
      Subject: '',
      Message: '',
      }
    )

    emailjs
      .send(
        'portfolio_sender', // Service ID from EmailJS
        'portfolio_template', // Template ID from EmailJS
        formData,
        "67b-4Fk8MlobREdTO"
      )
      .then(
        (result) => {
          alert('Email sent successfully!');
          console.log(result.status, result.message);
        },
        (error) => {
          alert("Unknown error happened. Email not sent");
          console.log("Error", error)
        }
      );
  };

  
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
            <ContactLogoImage image={phone} title="PHONE" info="(714)-276-7492"/>
            <ContactLogoImage image={location} title="LOCATION" info="CA, United States"/>
          </div>
          <div className='contact-input'>
            <form className="contact-input-container" onSubmit={SendEmail}>
              <ContactInputField label="Email" type="email" placeholder="Enter your email address" change_func={HandleChange}
                      value_state={formData.Email} background_color="rgba(222, 221, 221, 0.5)" />
              <ContactInputField label="Subject" placeholder="Enter the subject of your email" change_func={HandleChange}
                      value_state={formData.Subject} background_color="rgba(222, 221, 221, 0.5)" />
              <ContactInputField useTextArea={true} label="Message" placeholder="Enter your message (ex. Hi :) )" 
                      value_state={formData.Message} change_func={HandleChange} background_color="rgba(222, 221, 221, 0.5)" />
              <Button text="Send" color="none" style={button_style} text_color='white'
                hover_color='black'
                words_style={{textShadow: "3px 2px 4px rgba(255, 255, 255, 40%)"}}
                type="submit"
                />
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact