import React from 'react'
import linked_in from "../assets/Images/Logos/linked_in.png"
import mail from "../assets/Images/Logos/mail.png"

const Contact = () => {

  const image_style = 
  {
    height: '10%',
    width: '20%'
  }  
  
  const circulay_mask =
  {
    height: "100%",
    width: "85%",
    backgroundImage: "url('path-to-your-image.jpg')", 
    backgroundSize: "cover",
    borderRadius: "50%", /* Makes the element circular */
    backgroundColor: "#D9D9D9",
    margin: "0% auto"
  }

  return (
    <div className="contact-section"> 
        <div className="contact-section-title">
            <h1 className='text sub-title-text'>Contact Me</h1>
        </div>  
        <div className="contact-logos-container">
            <img src={linked_in} alt="linkedIn" style={image_style} />
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