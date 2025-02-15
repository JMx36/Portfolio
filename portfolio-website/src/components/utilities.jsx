import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

// Class like struct useful for defining Link attributes for NavigationLink Component
export class LinkInfo
{
    constructor({text, link, type="Link", className='', style={}}) 
    {
        this.text = text;
        this.link = link;
        this.type = type;
        this.className = className;
        this.style = style;
    }
}

// Class like struct useful for defining button attributes used by the Button Component
export class ButtonInfo
{
  constructor({text, isLink = false, link = "", type = "none", scroll_type="auto", downloadName="filename"})
  {
    this.text = text;
    this.isLink = isLink;
    this.link = link;
    this.type = type;
    this.scroll_type = scroll_type;
    this.downloadName = downloadName;
  }
}

// Creates a triangle in page with the specified style and hover functionality. 
// If clickable is set to true, it will call the defined func when clicked.
export const Triangle = ({height, width, color="white", rotation="right", margin="",
    hover_func=undefined,  clickable=false, func=null, style={}}) => {

    // Define the polygon for different triangles
    const right_triangle = "polygon(0 0, 0 100%, 100% 50%)";
    const left_triangle = "polygon(100% 0, 100% 100%, 0% 50%)";
    const up_triangle = "polygon(0 100%, 100% 100%, 50% 0%)";
    const down_triangle = "polygon(0 0, 100% 0%, 50% 100%)";

    let selected_triangle = right_triangle;

    // Select the triangle specified 
    if (rotation == "left") selected_triangle = left_triangle;
    else if (rotation == "up") selected_triangle = up_triangle;
    else if (rotation == "down") selected_triangle = down_triangle; 

    let triangle_style = {
        height: height,
        width: width,
        backgroundColor: color,
        clipPath: selected_triangle
    }

    if (margin)
        triangle_style["margin"] = margin;
    
    if (clickable)
        triangle_style["cursor"] = "pointer";

    if (clickable && func == null)
        console.log("You forgot to add a function to a clickable element");
    
    const combined_styles = {...triangle_style, ...style}

    return (
        <div className="triangle" style={combined_styles} onClick={clickable ? func : undefined}
            onMouseEnter={hover_func === undefined ? undefined : () => hover_func(true)}
            onMouseLeave={hover_func === undefined ? undefined : () => hover_func(false)}>

            </div>
    )
}

// Creates an image with hover functionality
export const LogoImage = ({image, index, setIsHovered=undefined, width="", height="", 
        margin_left="", margin_right="", margin_bottom= "", margin_top="", alt_text=""}) => {

    const image_style = {};
    
    if (width != "") image_style["width"] = width;
    if (height != "") image_style["height"] = height;
    if (margin_left != "") image_style["marginLeft"] = margin_left;
    if (margin_right != "") image_style["marginRight"] = margin_right;
    if (margin_top != "") image_style["marginTop"] = margin_top;
    if (margin_bottom != "") image_style["marginBottom"] = margin_bottom;

    return (
        <img className={"logo-image cursor-pointer logo-image-" + index} 
            src={image}
            onMouseEnter={setIsHovered === undefined ? undefined : () => setIsHovered(true)}
            onMouseLeave={setIsHovered === undefined ? undefined : () => setIsHovered(false)}
            style={image_style}
            alt={alt_text}
            />
    )
}

// Creates a Circle in page with the specified style and hover functionality. 
// If clickable is set to true, it will call the defined func when clicked.
export const Circle = ({height, width, color="white", radius="50%", margin="", 
                        hover_func=undefined,  clickable=false, func=null, style={}, children=null}) => {

    let circle_style = {
        height: height,
        width: width,
        backgroundColor: color,
        borderRadius: radius
    }

    if (margin)
        circle_style["margin"] = margin;
    
    if (clickable)
        circle_style["cursor"] = "pointer";

    if (clickable && func == null)
        console.log("You forgot to add a function to a clickable element");
    
    const combined_styles = {...circle_style, ...style}

    return (
        <div className="circle" style={combined_styles} onClick={clickable ? func : undefined}
            onMouseEnter={hover_func === undefined ? undefined : () => hover_func(true)}
            onMouseLeave={hover_func === undefined ? undefined : () => hover_func(false)}
        > 
            {children === null ? '' : children}
        </div>
    )
}

// Creates a Rectangle in page with the specified style and hover functionality. 
// If clickable is set to true, it will call the defined func when clicked.
export const Rectangle = ({height, width, color="white", clickable=false, 
                                hover_func=undefined, func=undefined, style={}}) => {

    let rectangle_style = {
        height: height,
        width: width,
        backgroundColor: color,
    }

    if (clickable)
        rectangle_style["cursor"] = "pointer";

    if (clickable && func == undefined)
        console.log("You forgot to add a function to a clickable element");

    const combined_styles = {...rectangle_style, ...style}

    return (
        <div className='rectangle-util' style={combined_styles} onClick={clickable ? func : undefined}
                    onMouseEnter={hover_func === undefined ? undefined : () => hover_func(true)}
                    onMouseLeave={hover_func === undefined ? undefined : () => hover_func(false)}
        >
        </div>
    )
}

// Button wrapper class that can create different kinds of buttons depending on parameters passed to it
// Usefulf for keeping consistent styling and reusablity across different buttons
export const Button = ({text, text_style="pacifico-family fw-400 fs-36px", radius="20px", text_color="black", 
                        color="black", logo=null, logo_style={}, words_style={}, style={}, textShadow="3px 2px 4px rgba(255, 255, 255, 70%)",
                        hover_color="white", click_func=null, type="button", 
                        isLink=false, link_to="", link_type="", scroll_type="auto", downloadName="filename"}) => 
{

    const [isHovered, SetIsHovered] = useState(false);

    const button_style = {
        display: "flex",
        background: color,
        color: isHovered ? hover_color : text_color,
        borderRadius: radius,
        border: "none",
        // boxShadow: "2px 7px 4px 0px rgba(0, 0, 0, 25%)",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem 1.5rem",
        boxSizing: "border-box"
    }

    const p_style = {
        display: "block",
        padding: "0", 
        margin: "0%",
        lineHeight: "1",
        textShadow: textShadow,
        textDecoration: "none",
        color: "inherit"
    }

    // Selects which Component to return depending on the condition
    return(
        <>
            { isLink ? 
            
                    <div className={`button-util cursor-pointer`} style= {{...button_style, ...style}} 
                        onMouseEnter={() => SetIsHovered(true)} 
                        onMouseLeave={() => SetIsHovered(false)} 
                        onMouseDown={(e) => 
                            {
                                e.preventDefault();
                                click_func != null ? click_func() : ''
                            }
                            }   
                    >
                        {logo === null ? '' : <img src={logo} style={logo_style}/>}
                        <NavigationLink link={link_to} type={link_type} content={text} scroll_type={scroll_type}
                                className={text_style} style={{...p_style, ...words_style}} downloadName={downloadName} />
                    </div> 
                :
                    <button type={type} className={`button-util cursor-pointer`} style= {{...button_style, ...style}} 
                        onMouseEnter={() => SetIsHovered(true)} 
                        onMouseLeave={() => SetIsHovered(false)} 
                        onMouseDown={(e) => 
                            {
                                e.preventDefault();
                                click_func != null ? click_func() : ''
                            }
                            }   
                    >
                        {logo === null ? '' : <img src={logo} style={logo_style}/>}
                        {
                            <span className={` ${text_style}`} style={{...p_style, ...words_style}}>{text}</span>
                        }
                    </button>
            }    
        </>
    )
}

// Component used for returning different kinds of navigation links depending on the parameters passed
export const NavigationLink = ({content, link, type="Link", scroll_type="auto", className='', downloadName='filename', style={}}) => 
{
    // Function used for changing the scroll behavior of the website 
    const HandleScroll = () => 
    {
        // console.log("HANDLING SCROLL")
        if (scroll_type === 'scroll')
        {
            document.documentElement.style.scrollBehavior = 'smooth';
            // console.log("Link Scroll");
        }
        else
        {
            document.documentElement.style.scrollBehavior = 'auto';
            // console.log("Link teleport");
        }
    }

    return (
        type === "Link" ? 
            <Link to={link} className={className} style={style} onClick={HandleScroll}>{content}</Link>
            : type === "aTag" ? 
            <a href={link} style={{...style, textDecoration: "none"}} className={className} onClick={HandleScroll}>{content}</a> 
            : type === "external" ? 
            <a href={link} style={{...style, textDecoration: "none"}} className={className} target='_blank'>{content}</a> 
            : type === "download" ?
            <a href={link} style={{...style, textDecoration: "none"}} className={className} download={downloadName}>{content}</a> 
            : ''
    )
}

// Handles Scrolling after page loaded if needed 
export const ScrollToTop = () => {
    const {pathname, hash} = useLocation();
    

    useEffect(() => {
        // console.log("Scroll To Top");
        const elementId = location.hash.replace("#", ""); // Get the element ID
        const element = document.getElementById(elementId);
        if (element) {
            // console.log("Scroll")
            element.scrollIntoView({ behavior: 'smooth' });
        }
        else
        {
            // console.log("Teleport")
            window.scrollTo({top: 0, behavior: "auto"}); // Scroll to the top of the page
        }
        // document.documentElement.style.scrollBehavior = 'auto';
    }, [pathname, hash]); // Trigger scroll whenever the pathname changes
  
    return
  }
  
