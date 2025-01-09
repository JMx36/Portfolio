import React, { useEffect, useState } from 'react';
import ImagesPreview from '../components/ImagesPreview.jsx'
import { Triangle, Circle, Button } from '../components/utilities.jsx'



const CircleButton = ({index, func, color, side="none", width=15, height=70, hover_width=20, hover_height=100}) =>
{
    const [isHovered, setIsHovered] = useState(false);
    
    const clicked = () => 
    {
        func(index, side);
    }

    return(
        <Circle  clickable={true} func={clicked}
                 width={isHovered ? `${hover_width}%` : `${width}%`} 
                 height={isHovered ? `${hover_height}%` : `${height}%`} 
                 color={color}
                 hover_func={setIsHovered} />
    )
}

const CircleDisplayWindow = ({low_index, high_index, current_index, container_length, click_func}) =>
{    
    const add_left_button = low_index > 0;
    const add_right_button = high_index < container_length - 1

    const buttons = [];

    if (add_left_button) 
    {
        // console.log("Adding left button");
        buttons.push(<CircleButton width={8} height={45} index={low_index - 1} side="left" func={click_func} color="#D9D9D9"/>);
    }

    for(let i = low_index; i <= high_index; i++)
    { 
        const color = i == current_index ? "#119DA4" : "#D9D9D9";
        buttons.push(<CircleButton index={i} func={click_func} color={color}/>);
    }

    if (add_right_button) 
    {
        // console.log("Adding right button");
        buttons.push(<CircleButton width={8} height={45} index={high_index + 1} side="right" func={click_func} color="#D9D9D9"/>);
    }

    return (
        buttons
    )
}


export const Slider = ({images_lists, window_size=4, render=(() => {}), delay=10000}) =>
{

    // initial check to make sure the window is a eligible size for 'images_lists'
    if (window_size > images_lists.length) 
    {
        window_size = images_lists.length
    }
    
    const last_index = images_lists.length - 1;
    const middle_index = (Math.floor((last_index) / 2));
    const side_length = Math.floor(window_size / 2); // length of the sides from middle index to the edge of the window
    const w_starting_index = Math.max(0, middle_index - side_length);

    let w_end_index = w_starting_index + window_size - 1;
    w_end_index = Math.min(images_lists.length, w_end_index);

    const [currentIndex, setCurrentIndex] = useState(middle_index);
    const [start_index, setStartIndex] = useState(w_starting_index);
    const [end_index, setEndIndex] = useState(w_end_index);
    const [play_animation, PlayAnimation] = useState(false);
    const [direction, SetDirection] = useState("none");
    const [selected_index, SetSelectedIndex] = useState(middle_index);
    console.log("Initial Current index", currentIndex);
    console.log("Initial Start index", start_index);
    console.log("Initial End index", end_index);

    const ResetAnimation = () =>
    {
        PlayAnimation(false); // Remove the animation class
        setTimeout(() => {
          PlayAnimation(true); // Re-add the animation class after a brief delay
        }, 0); // Delay of 0ms allows the browser to reflow and reset
    }

    const EndAnimation = (e) => 
    {
        
        if (e.animationName === `move_images_out_${direction}`)
        {
            PlayAnimation(false);
            SetDirection("none");
            SetSelectedIndex(currentIndex);
        }

    }

    const HandleClick = (index, side="none") =>
    {
        if (index === currentIndex) return;        
-
        // console.log("Handle Click Index: ", index);
        SetDirection(index < currentIndex ? "left" : "right");
        setCurrentIndex(index);

        if (index < start_index)
        {
            setStartIndex(Math.max(0, index - (window_size - 1)));
            setEndIndex(Math.max(index, window_size - 1));
        }

        if (index > end_index)
        {
            if (((images_lists.length - 1) - index) < window_size) 
            {
                setStartIndex(Math.max(0, images_lists.length - window_size - 1));
                setEndIndex(images_lists.length - 1);
            }
            else
            {
                setStartIndex(index);
                setEndIndex(Math.max(0, index + window_size - 1));
            }
        }
        
        if (play_animation)
            ResetAnimation();
        else
            PlayAnimation(true);


        console.log("Current index", currentIndex);
        console.log("Start index", start_index);
        console.log("End index", end_index);
        // play the animation if it is a new circle
    }

    const HandleSideClick = (side) => 
    {
        const movement = side === "left" ? -1 : 1;
        let next_index = currentIndex + movement;

        // resets the index in the proper direction
        if (next_index > last_index) next_index = 0;
        if (next_index < 0) next_index = last_index;

        const next_side = next_index < start_index ? "left" : next_index > end_index ? "right" : "none";
        HandleClick(next_index, next_side);
    }

    const HandleRightClick = () =>
    {
        HandleSideClick("right");
    }

    const HandleLeftClick = () =>
    {
        HandleSideClick("left");
    }

    // delay is in milliseconds

    useEffect(() => 
        {
            const interval = setInterval(() => {
                HandleSideClick("right");
            }, delay);
    
            return () => clearInterval(interval);
        }, [selected_index]);
        


    return (
        <div className="slider-container">
            <div className='slider-image-container ' style={{}}>
                {
                    // currentIndex === 0 || !preview_container_hovered ? <div style={{width: "5%", height:"20%", margin: "auto auto"}}></div> :
                    // <Triangle width="5%" height="20%" color="#119DA4" rotation="left" margin="auto auto" clickable={true} func={HandleLeftClick}/>
                }
                <div className='preview-container' style={{width: "clamp(300px, 50vw, 800px)", aspectRatio: "16/9.8"}} onAnimationEnd={EndAnimation} >
                    {/* {console.log("Current Index", currentIndex)}
                    {console.log("Selected Index", selected_index)} */}
                    <div className={`${play_animation ? `move-images-out-${direction}` : ''}`}
                            style={{margin:"auto", display: "flex", gap: "10%", boxSizing: "border-box"}}>
                        {
                            direction === "left" ? 
                                render(currentIndex, images_lists)
                                : ''
                        }
                        {render(selected_index, images_lists)}
                        {
                            direction === "right" ? 
                                render(currentIndex, images_lists)
                                : ''
                        }
                    </div>
                </div>
                {
                    // currentIndex === images_lists.length - 1 || !preview_container_hovered? <div style={{width: "5%", height:"20%", margin: "auto auto"}}></div> : 
                    // <Triangle width="5%" height="20%" color="#119DA4" rotation="right" margin="auto auto" clickable={true} func={HandleRightClick}/>
                }
            </div>
            <div className="circle-buttons width-50%">
                {CircleDisplayWindow({low_index: start_index, high_index: end_index, 
                    current_index: currentIndex, container_length: images_lists.length,
                    click_func: HandleClick})}
            </div>
        </div>
    )
}

const Description = ({title="Title", description="Description Text", side="right", link="/index.html"}) =>
{
    return (
        <div className={`home-portfolio-section-description`}>
            <div className="home-portfolio-section-title">
                <h1 className='italic work-sans-family fs-40px fw-600'>{title}</h1>
            </div>
            <div className="home-portfolio-section-text">
                <p className='work-sans-family fs-20px fw-600'>{description}</p>
                <Button text="Explore Now" color="none" style={{marginTop: "5%"}} hover_color="#28AAC1" text_color="black"
                words_style={{textShadow: "3px 3px 4px rgba(40, 170, 193, 0.5)"}} isLink={true} 
                link_to={link} link_type={"Link"}
                />
            </div>
            
        </div>
    )
}


const HomePortfolioDescription = ({images=[0, 1, 2, 3, 4, 5, 6], title="Title", description="Description Text", swap=false, link=""}) => {
  return (
    <div className="home-portfolio-section">
        <div className='home-portfolio-section-left' style={{}}>
            {!swap ? <Slider images_lists={images} side="left" render={(index, image_list) => <ImagesPreview images={image_list[index]} style={{minWidth: "clamp(300px, 50vw, 800px)", aspectRatio: "16/9.8"}}/>}/> : <Description title={title} description={description} link={link}/> }

        </div>

        <div className='home-portfolio-section-right' style={{marginLeft: "3%"}}>
            {!swap ? <Description title={title} description={description} side='left' link={link}/> : <Slider images_lists={images} render={(index, image_list) => <ImagesPreview images={image_list[index]} style={{minWidth: "clamp(300px, 50vw, 800px)", aspectRatio: "16/9.8"}}/>}/> }

        </div>
    
    
    </div>
  )
}

export default HomePortfolioDescription