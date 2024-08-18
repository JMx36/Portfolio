import linked_in from "../assets/Images/Logos/linked_in.png"
import mail from "../assets/Images/Logos/mail.png"
import github from "../assets/Images/Logos/github.png"
import brush_stroke from "../assets/Images/Logos/brush-stroke2.png"

const About_me = () => {

    const left_text_buttons = ["See My Resume", "See My Portfolio"]
    const right_buttons = [linked_in, github, mail]

    return (
        <div className="about-me">
            <div className="about-shape"></div>
            <div className="about-left-section">
                <div className="in-front circle-mask">
                    <img src="" alt="" />
                </div>
                <div className="in-front about-text-buttons">
                    {left_text_buttons.map((text) => (
                        <a href="index.html" className="text-button cursive-button">{text}</a>
                    )
                )}              
                </div>
            </div>
            <img class="brush-stroke" src={brush_stroke} alt="brush stroke" />
            <div className="about-right-section">
                <h1 className="about-title italic-blue-title">About Me</h1>
                <p className="about-description normal-text-medium blue-normal-text in-front">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                
                <div className="logos-container">
                    {right_buttons.map((image) => (
                        <a href="index.html"><img className="about-me-logo-pictures in-front" src={image}/></a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About_me