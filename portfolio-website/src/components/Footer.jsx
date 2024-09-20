import React from 'react'
import linked_in from "../assets/Images/Logos/linked_in.png"
import mail from "../assets/Images/Logos/mail.png"
import github from "../assets/Images/Logos/github.png"
import { LogoImage } from './utilities'

const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-container'>
                <h3 className='pacifico-family fs-36px fw-400' style={{margin: "0"}}>Josh Castillo</h3>
                <div className="footer-logo-container">
                    <LogoImage image={linked_in} width="43px"/>
                    <LogoImage image={github} width="43px"/>
                    <LogoImage image={linked_in} width="43px"/>
                    <LogoImage image={mail} width="43px"/>
                </div>
                <p className='work-sans-family fs-20px fw-300' style={{margin: "0"}}>© 2024. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer