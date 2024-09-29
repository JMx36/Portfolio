import React from 'react'
import linked_in from "../assets/Images/Logos/linked_in.png"
import mail from "../assets/Images/Logos/mail.png"
import github from "../assets/Images/Logos/github.png"
import { LogoImage } from './utilities'
import { useMediaQuery } from 'react-responsive';


const FooterLogos = () => {

    const image_width ="clamp(30px, 5vw, 43px)"

    return (
        <div className="footer-logo-container">
            <LogoImage image={linked_in} width={image_width}/>
            <LogoImage image={github} width={image_width}/>
            <LogoImage image={linked_in} width={image_width}/>
            <LogoImage image={mail} width={image_width}/>
        </div>
    )
}


const Footer = () => {
    const isSmallerScreen = useMediaQuery({ query: '(max-width: 1000px)' });


    return (
        <div className="footer">
            <div className='footer-container'>
                {
                    isSmallerScreen ? 
                        <></>
                    : <p className='work-sans-family fs-20px fw-300'>© 2024. All Rights Reserved.</p>
                }
                <h3 className='pacifico-family fs-36px fw-400'>Josh Castillo</h3>
                <FooterLogos />
                {
                    isSmallerScreen ? 
                    <p className='work-sans-family fs-20px fw-300'>© 2024. All Rights Reserved.</p>
                    : <></>
                }
            </div>
        </div>
    )
}

export default Footer