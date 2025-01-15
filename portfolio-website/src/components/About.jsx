
import { useMediaQuery } from 'react-responsive';
import { Button, ButtonInfo } from '../components/utilities.jsx'
import MePic from '../assets/Images/About/me.jpg'
import React, { useState } from 'react';

const About = () => {

    // const isSmallerScreen = useMediaQuery({ query: '(max-width: 1000px)' });
    // const [isReadingMore, SetIsReadingMore] = useState(true);
    // const maxSize = isSmallerScreen || !isReadingMore ? 600 : 2000;

    const about_buttons = [
        new ButtonInfo({text: "Resume", isLink: true, link:"#Home-Portfolio", type: "Link"}), 
        new ButtonInfo({text: "Portfolio", isLink: true, link:"#Home-Portfolio", type: "aTag"})
    ]

    const about_text = ``;

    return (
        <div id="About" className="about-me">            
            <div className="about-container in-front">
                <h1 className="about-title work-sans-family fw-700 italic fs-64px in-front">About Me</h1>
                <div className="about-info-container">
                    <div className="about-left-section">
                        <div className="circle-container">
                            <div className="circle-mask" style={{backgroundImage: `url(${MePic})`, backgroundSize: "cover", 
                            backgroundPosition: "center", backgroundRepeat: "no-repeat"
                        }}>


                                {/* <img src={MePic} /> */}
                            </div>
                        </div>
                        <div className="about-info-buttons">
                        {
                            about_buttons.map((info) => (
                                <Button text={info.text} color="none" isLink={info.isLink}
                                link_to={info.link} link_type={info.type} scroll_type='scroll'
                                text_color='black' words_style={{textShadow: "3px 2px 4px rgba(0, 0, 0, 50%)"}}
                                />
                            )
                            )            
                        }
                        </div>
                        
                    </div>
                    
                    <div className="about-right-section">
                        <div className="about-text-section" style={{padding: "2rem"}}>
                            <p className="work-sans-family fw-300 fs-20px in-front" style={{paddingBottom: "1rem"}}>
                            Hi, I’m Josh, a passionate programmer and aspiring software and game developer. With experience in Computer Science and Game Development, I specialize in creating solutions that are not only functional but impactful. My work spans programming systems and tools that empower teams to bring their ideas to life.
                            </p>
                            <p className="work-sans-family fw-300 fs-20px in-front" style={{paddingBottom: "1rem"}}>
                            Over the past three years, I’ve built a strong foundation in programming through hands-on experience by working on multiple game projects and software applications in both individual and collaborative settings. I take pride in writing clean, maintainable code and thrive in environments where teamwork and innovation intersect.
                            </p>
                            <p className="work-sans-family fw-300 fs-20px in-front" >
                            Whether developing intuitive apps or immersive games, I’m driven by the desire to create meaningful experiences that resonate with people. As I transition into the professional world, I’m eager to bring my skills to projects that inspire and connect others.

                            </p>
                            {/* <Button text={isReadingMore ? "...read less" : "read more..."} 
                                text_style="italic work-sans-family fw-400 fs-20px to-front2" text_color="white" color="none" style={{
                                        padding: "1rem 2rem",
                                        marginLeft: "auto",
                                        marginRight: "0",
                                        marginTop: 0,
                                        boxShadow: "none"
                                    }}
                                    hover_color='black'
                                    words_style={{textShadow: "3px 2px 4px rgba(0, 0, 0, 50%)"}}
                                    click_func={() => {
                                        console.log("read more");
                                        SetIsReadingMore(!isReadingMore)
                                    }}
                                    /> */}
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default About