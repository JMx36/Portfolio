

const About_me = () => {

    left_text_buttons = ["See My Resume", "See My Portfolio"]
    right_buttons = [ []]

    return (
        <div className="about-me">
            <div className="aboutMe-left-section">
                <img src="" alt="" />
                <div className="aboutMe-Text-Buttons">
                    <a href="index.html" className="cursive-button">See My Resume</a>                
                    <a href="index.html" className="cursive-button">See My Portfolio</a>                
                </div>
            </div>
            <div className="aboutMe-right-section">
                <h1 className="italic-blue-title">About Me</h1>
                <p className="normal-text-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="Logos Container">
                    <a href="">
                        <img src="" alt=""  />
                    </a>

                </div>
            </div>
        </div>
    )
}

export default About_me