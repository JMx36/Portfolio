const Triangle = ({color, height, width, rotation="right", clickable=false, func=null}) => {

    const right_triangle = "polygon(0 0, 0 100%, 100% 50%)";
    const left_triangle = "polygon(100% 0, 100% 100%, 0% 50%)";
    const up_triangle = "polygon(0 100%, 100% 100%, 50% 0%)";
    const down_triangle = "polygon(0 0, 100% 0%, 50% 100%)";

    let selected_triangle = right_triangle;
    if (rotation == "left") selected_triangle = left_triangle;
    else if (rotation == "up") selected_triangle = up_triangle;
    else if (rotation == "down") selected_triangle = down_triangle; 

    const rectangle_style = {
        height: height,
        width: width,
        backgroundColor: color,
        clipPath: selected_triangle
    }

    if (clickable)
        style["cursor"] = "pointer";

    if (clickable && func == null)
        Console.Log("You forgot to add a function to a clickable element");


    return (
        <div className="triangle border-black" style={rectangle_style}></div>
    )
}

export default Triangle