import React from 'react'

const Triangle = ({height, width, color="white", rotation="right", margin="", clickable=false, func=null, style={}}) => {

    const right_triangle = "polygon(0 0, 0 100%, 100% 50%)";
    const left_triangle = "polygon(100% 0, 100% 100%, 0% 50%)";
    const up_triangle = "polygon(0 100%, 100% 100%, 50% 0%)";
    const down_triangle = "polygon(0 0, 100% 0%, 50% 100%)";

    let selected_triangle = right_triangle;
    if (rotation == "left") selected_triangle = left_triangle;
    else if (rotation == "up") selected_triangle = up_triangle;
    else if (rotation == "down") selected_triangle = down_triangle; 

    let rectangle_style = {
        height: height,
        width: width,
        backgroundColor: color,
        clipPath: selected_triangle
    }

    console.log(style);
    if (margin)
        rectangle_style["margin"] = margin;
    
    if (clickable)
        rectangle_style["cursor"] = "pointer";
    
    if (clickable && func == null)
        console.log("You forgot to add a function to a clickable element");
    
    const combined_styles = {...rectangle_style, ...style}

    return (
        <div className="triangle" style={combined_styles}></div>
    )
}

export default Triangle