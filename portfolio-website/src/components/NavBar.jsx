import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect} from 'react';
import {Rectangle, Circle, Triangle, NavigationLink, ButtonInfo} from "../components/utilities.jsx"
import { useLocation } from 'react-router-dom';



const NavBarDropdown = ({navBarOptions, closing_func}) => 
{
    const [isClosed, SetClicked] = useState(false);
    const [isTriagHoverered, SetIsHovered] = useState(false);

    const rectangle_padding = "3px";
    const rectangle_margin = "10%";

    const HandleAnimationEnd = (e) => 
    {
        console.log("Finishing animation", e.animationName)
        if (e.animationName === "navbar-dropdown-close-anim")
            closing_func(false)
    }

    const circle_style =
    {
        position: "absolute",
        top: "45%",
        display: "flex",
        alignItems: "center",
    }

    const triangle_style = 
    {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
    }

    return (
        <div className={`navbar-dropdown`} style={{position: "fixed", right: 0, bottom: 0}}>
            <div className={`navbar-dropdown-container navbar-dropdown-${!isClosed ? "open" : "close"}`}
                style={isClosed ? {transform: "translateX(400px)"}: {}}
                 onAnimationEnd={HandleAnimationEnd}>
                <Rectangle color="#DAC21C" style={{padding: rectangle_padding, marginTop: rectangle_margin}}/>
                <div className="navbar-dropdown-options fs-32px fw-300 work-sans-family">
                    {navBarOptions.map((info) => (
                        <NavigationLink link={info.link} type={info.type} className="navbar-button navbar-dropwdown-button yellow-hover" 
                    content={<span onClick={() => SetClicked(true)}> {info.text}</span>} scroll_type='scroll' downloadName={info.downloadName}/>
                    ))}
                </div>
                <Triangle width={"15px"} height={"30px"} rotation="right" clickable={true} style={triangle_style} 
                        func={() => SetClicked(true)} color={isTriagHoverered ? "#FFDF00" : "white"} hover_func={SetIsHovered}/> 
                {/* <Circle height={"60px"} width={"60px"} color="#28AAC1" style={circle_style}>
                    
                </Circle> */}
                <Rectangle color="#DAC21C" style={{padding: rectangle_padding, marginBottom: rectangle_margin}}/>
            </div>
        </div>
    )

}

const BurgerComponnet = ({click_func}) =>
{
    const [isHovered, SetIsHovered] = useState(false);

    const line_style = 
    {   
        backgroundColor: isHovered ? "#FFDF00" : "white" 
    }

    return (
        <div className="burger-icon cursor-pointer" onClick={() => click_func(true)}
            onMouseEnter={() => SetIsHovered(true)}
            onMouseLeave={() => SetIsHovered(false)}
        >
            <div className="line1" style={line_style}></div>
            <div className="line2" style={line_style}></div>
            <div className="line3" style={line_style}></div>
        </div>
    )

}

const NavBar = () => {
  
    const AboutLink = new ButtonInfo({text: "About", isLink: true, link: "/#About", type: "Link"});
    const HomePortfolioLink = new ButtonInfo({text: "Portfolios", isLink: true, link: "/#Home-Portfolio", type: "Link"});
    const HomeResumeLink = new ButtonInfo({text: "Resume", isLink: true, link: "/#Home-Portfolio", type: "Link"});
    const SoftwareDevResume = new ButtonInfo({text: "Resume", isLink: true, link: "Resumes/Software Dev Resume.pdf", type: "download", downloadName: "SoftwareDevResume.pdf"});
    const GameDevResume = new ButtonInfo({text: "Resume", isLink: true, link: "Resumes/Game Dev Resume.pdf", type: "download", downloadName: "GameDevResume.pdf"});
    const ContactLink = new ButtonInfo({text: "Contact", isLink: true, link: "#Contact", type: "aTag"});

    const [isDropdownOpen, SetDropdownVisibility] = useState(false);
    const { pathname } = useLocation();

    const navBarOptions = {
        "/": [AboutLink, HomePortfolioLink, HomeResumeLink, ContactLink],
        "/gaming-portfolio": [AboutLink, HomePortfolioLink, GameDevResume, ContactLink],
        "/software-portfolio": [AboutLink, HomePortfolioLink, SoftwareDevResume, ContactLink],
    };
    
    const isSmallerScreen = useMediaQuery({ query: '(max-width: 1000px)' });

    useEffect(() => {
        if (isSmallerScreen) 
            SetDropdownVisibility(false);
      }, [isSmallerScreen, pathname]); // Runs whenever isSmallerScreen changes

    return (
    <nav className="NavBar">
        <div className="NavBarLogo"><NavigationLink link="/" className="LogoButton pacifico-family fs-32px fw-400 yellow-hover" content="Josh Castillo"/></div>
        {
            isSmallerScreen ? <BurgerComponnet click_func={SetDropdownVisibility}/> :
                <div className="NavBarOptions fs-20px fw-300 work-sans-family">
                    {navBarOptions[pathname ? pathname : "/"].map((info) => (
                        <NavigationLink link={info.link} type={info.type} className="navbar-button yellow-hover" content={info.text} 
                        downloadName={info.downloadName}
                    scroll_type="scroll"/>))}
                </div>
        }
        {console.log(isDropdownOpen)}
        {isSmallerScreen && isDropdownOpen ? <NavBarDropdown navBarOptions={navBarOptions[pathname ? pathname : "//"]} closing_func={SetDropdownVisibility}/>: ''}


    </nav>
  )
}

export default NavBar