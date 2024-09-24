import React, {useState} from 'react'

export const Triangle = ({height, width, color="white", rotation="right", margin="",
    hover_func=undefined,  clickable=false, func=null, style={}}) => {

    const right_triangle = "polygon(0 0, 0 100%, 100% 50%)";
    const left_triangle = "polygon(100% 0, 100% 100%, 0% 50%)";
    const up_triangle = "polygon(0 100%, 100% 100%, 50% 0%)";
    const down_triangle = "polygon(0 0, 100% 0%, 50% 100%)";

    let selected_triangle = right_triangle;

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


export const LogoImage = ({image, index, setIsHovered=undefined, width="", height="", margin_left=""}) => {

    const image_style = {};
    // console.log(image, width, height);
    if (width != "") image_style["width"] = width;
    if (height != "") image_style["height"] = height;
    if (margin_left != "") image_style["marginLeft"] = margin_left;

    return (
        <img className={"logo-image cursor-pointer logo-image-" + index} 
            src={image}
            onMouseEnter={setIsHovered === undefined ? undefined : () => setIsHovered(true)}
            onMouseLeave={setIsHovered === undefined ? undefined : () => setIsHovered(false)}
            style={image_style}
            />
    )
}

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


export const Button = ({text, text_style="pacifico-family fw-400 fs-36px", radius="50px", text_color="black", 
    color="black", logo=null, logo_style={}, words_style={}, style={}}) => 
{

    const button_style = {
        display: "flex",
        background: color,
        color: text_color,
        borderRadius: radius,
        border: "none",
        boxShadow: "2px 7px 4px 0px rgba(0, 0, 0, 25%)",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.5rem 4.5rem",
        boxSizing: "border-box"
    }

    const p_style = {
        padding: "0%", 
        margin: "0%"
    }

    return(
        <button className={`button-util cursor-pointer`} style= {{...button_style, ...style}}>
            {logo === null ? '' : <img src={logo} style={logo_style}/>}
            <p className={` ${text_style}`} style={{...p_style, ...words_style}}>{text}</p>
        </button>
    )
}