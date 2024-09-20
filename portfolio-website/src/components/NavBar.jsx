import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect} from 'react';
import {Rectangle, Circle, Triangle} from "../components/utilities.jsx"


const NavBarDropdown = ({navBarOptions, closing_func}) => 
{
    const [isClosed, SetClicked] = useState(false);

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
        left: "-20px",
        display: "flex",
        alignItems: "center",
    }

    const triangle_style = 
    {
        marginLeft: "10px"
    }

    return (
        <div className={`navbar-dropdown`} >
            <div className={`navbar-dropdown-container navbar-dropdown-${!isClosed ? "open" : "close"}`}
                style={isClosed ? {transform: "translateX(400px)"}: {}}
                 onAnimationEnd={HandleAnimationEnd}>
                <Rectangle color="#DAC21C" style={{padding: rectangle_padding, marginTop: rectangle_margin}}/>
                <div className="navbar-dropdown-options fs-20px fw-300">
                    {navBarOptions.map((option) => (<a href="index.html" className="navbar-button navbar-dropwdown-button yellow-hover" style={{fontSize: "30px"}}> {option}</a>))}
                </div>
                <Circle height={"60px"} width={"60px"} color="#0a515f" style={circle_style}>
                    <Triangle width={"15px"} height={"30px"} rotation="right" clickable={true} style={triangle_style} 
                        func={() => SetClicked(true)}/> 
                </Circle>
                <Rectangle color="#DAC21C" style={{padding: rectangle_padding, marginBottom: rectangle_margin}}/>
            </div>
        </div>
    )

}

const BurgerComponnet = ({click_func}) =>
{
    return (
        <div className="burger-icon cursor-pointer" onClick={() => click_func(true)}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    )

}

const NavBar = () => {
  
    const [isDropdownOpen, SetDropdownVisibility] = useState(false);

    const navBarOptions = ["About", "Portfolios", "Resume", "Contact"];
    const isSmallerScreen = useMediaQuery({ query: '(max-width: 1000px)' });

    useEffect(() => {
        SetDropdownVisibility(false);
      }, [isSmallerScreen]); // Runs whenever isSmallerScreen changes

    return (
    <nav className="NavBar">
        <div className="NavBarLogo"><a href="index.html" className="LogoButton cursive-button yellow-hover">Josh Castillo</a></div>
        {
            isSmallerScreen ? <BurgerComponnet click_func={SetDropdownVisibility}/> :
                <div className="NavBarOptions fs-20px fw-300">
                    {navBarOptions.map((option) => (<a href="index.html" className="navbar-button yellow-hover"> {option}</a>))}
                </div>
        }
        {console.log(isDropdownOpen)}
        {isSmallerScreen && isDropdownOpen ? <NavBarDropdown navBarOptions={navBarOptions} closing_func={SetDropdownVisibility}/>: ''}

    </nav>
  )
}

export default NavBar