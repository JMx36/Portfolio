import React from 'react'

import linked_in from "../assets/Images/Contact/linkedin.svg"
import itch_io from "../assets/Images/Contact/itch-io.svg"
import github from "../assets/Images/Contact/github.svg"
import email from "../assets/Images/Contact/email.svg"


import { LogoImage, NavigationLink } from './utilities'
import { useMediaQuery } from 'react-responsive';
import Contact from '../components/Contact.jsx';


export const FooterLogos = () => {

    const image_width ="clamp(20px, 2vw, 43px)"
    
    return (
        <div className="footer-logo-container">
            <NavigationLink link="https://www.linkedin.com/in/joshcastillo36/" type="external" content={<LogoImage image={linked_in} width={image_width} alt_text="LinkedIn Logo"/>}/>
            <NavigationLink link="https://github.com/JMx36" type="external" content={<LogoImage image={github} width={image_width} alt_text="Github Logo"/>}/>
            <NavigationLink link="https://jm36.itch.io/" type="external" content={<LogoImage image={itch_io} width={image_width} alt_text="Itch.io Logo"/>}/>
            <NavigationLink link="#Contact" type="aTag" scroll_type='scroll' content={<LogoImage image={email} width={image_width} alt_text="Email Logo"/>}/>
        </div>
    )
}


const Footer = () => {
    const isSmallerScreen = useMediaQuery({ query: '(max-width: 1000px)' });


    return (
        <footer className="footer">
            <Contact />
            <div className='footer-container'>
                {
                    isSmallerScreen ? 
                        <></>
                    : <p className='work-sans-family fs-20px fw-300'>© 2024. All Rights Reserved.</p>
                }
                <h3 className='pacifico-family fs-36px fw-400' style={{margin: "0 auto", padding: 0, lineHeight: 1}}>Josh Castillo</h3>
                <FooterLogos />
                {
                    isSmallerScreen ? 
                    <p className='work-sans-family fs-20px fw-300'>© 2024. All Rights Reserved.</p>
                    : <></>
                }
            </div>
        </footer>
    )
}

export default Footer