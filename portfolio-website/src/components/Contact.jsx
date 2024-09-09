import React from 'react'
import linked_in from "../assets/Images/Logos/linked_in.png"
import mail from "../assets/Images/Logos/mail.png"
import { useMediaQuery } from 'react-responsive';

const Contact = () => {

  const isSmallerScreen = useMediaQuery({ query: '(max-width: 1000px)' });

  const image_style = 
  {
    width: "30%"
  }  
  
  const circulay_mask =
  {
    height: "100%",
    width: "100%",
    backgroundImage: "url('path-to-your-image.jpg')", 
    backgroundSize: "cover",
    borderRadius: "50%", /* Makes the element circular */
    backgroundColor: "#D9D9D9",
    margin: "5% auto"
  }

  return (
    <div className="contact-section"> 
        <div className="contact-section-title">
            <h1 className='sub-title-text' style={{margin: "0"}}>Contact Me</h1>
        </div>  
        <div className="contact-logos-container">
            
            <img className="" src={linked_in} alt="linkedIn" style={image_style} />
            <div className="name-section">
                <div className="contact-photo-view">
                  <div style={circulay_mask}></div>
                </div>
                <h3 className="contact-name cursive-button">Josh Castillo</h3>
            </div>
            <img src={mail} alt="email" style={image_style}/>
        </div>
    </div>
  )
}

export default Contact