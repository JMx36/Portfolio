import React, { useState } from 'react';
import ImagesPreview from '../components/ImagesPreview.jsx'
import { Triangle, Circle } from '../components/utilities.jsx'


const CircleButton = ({index, func, color, side="none", width=12, height=70, hover_width=20, hover_height=100}) =>
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
        console.log("Adding left button");
        buttons.push(<CircleButton width={10} height={50} index={low_index - 1} side="left" func={click_func} color="#90E0EF"/>);
    }

    for(let i = low_index; i <= high_index; i++)
    { 
        const color = i == current_index ? "#FFDF00" : "#90E0EF";
        buttons.push(<CircleButton index={i} func={click_func} color={color}/>);
    }

    if (add_right_button) 
    {
        console.log("Adding right button");
        buttons.push(<CircleButton width={10} height={50} index={high_index + 1} side="right" func={click_func} color="#90E0EF"/>);
    }

    return (
        buttons
    )
}


const Slider = ({images_lists, window_size=4}) =>
{
    // initial check to make sure the window is a eligible size for 'images_lists'
    if (window_size > images_lists.length) 
    {
        window_size = images_lists.length
    }
    
    const middle_index = (Math.floor((images_lists.length -1) / 2));
    const side_length = Math.floor(window_size / 2); // length of the sides from middle index to the edge of the window
    const w_starting_index = middle_index - side_length;
    // We substract 1 from side length if the window is an even number 
    const w_end_index = window_size % 2 == 0 ? middle_index + (side_length - 1) : middle_index + side_length

    const [currentIndex, setCurrentIndex] = useState(middle_index);
    const [start_index, setStartIndex] = useState(w_starting_index);
    const [end_index, setEndIndex] = useState(w_end_index);
    const [play_animation, PlayAnimation] = useState(false);
    const [direction, SetDirection] = useState("none");
    const [preview_container_hovered, SetPreviewContainerHovered] = useState(false);
    const [selected_index, SetSelectedIndex] = useState(middle_index);
    // console.log("Current index", currentIndex);
    // console.log("Start index", start_index);
    // console.log("End index", end_index);

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

        SetDirection(index < currentIndex ? "left" : "right");
        setCurrentIndex(index);
        
        if (side === "left")
        {
            setStartIndex(Math.max(0, start_index - window_size))
            setEndIndex(index);
        }
        else if (side === "right")
        {
            setEndIndex(Math.min(images_lists.length - 1, end_index + window_size))
            setStartIndex(index);
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
        const next_index = currentIndex + movement;
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

    return (
        <div className="slider-container ">
            <div className='slider-image-container' style={{}}
                        onMouseEnter={() => SetPreviewContainerHovered(true)}
                        onMouseLeave={() => SetPreviewContainerHovered(false)}
                        >
                {
                    currentIndex === 0 || !preview_container_hovered ? <div style={{width: "5%", height:"20%"}}></div> :
                    <Triangle width="5%" height="20%" color="#90E0EF" rotation="left" margin="auto 0%" clickable={true} func={HandleLeftClick}/>
                }
                <div className='preview-container' onAnimationEnd={EndAnimation} >
                    {/* {console.log("Current Index", currentIndex)}
                    {console.log("Selected Index", selected_index)} */}
                    <div className={`${play_animation ? `move-images-out-${direction}` : ''}`}
                            style={{height: "100%", width: "100%", margin:"auto auto", display: "flex", gap: "40%"}}>
                        {
                            direction === "left" ? 
                                <ImagesPreview height="100%" width="100%" images={images_lists[currentIndex]} style={{flex: "0 0 100%"}}/> 
                                : ''
                        }
                        <ImagesPreview height="100%" width="100%" images={images_lists[selected_index]} style={{flex: "0 0 100%"}}/>
                        {
                            direction === "right" ? 
                                <ImagesPreview height="100%" width="100%" images={images_lists[currentIndex]} style={{flex: "0 0 100%"}}/> 
                                : ''
                        }
                    </div>
                </div>
                {
                    currentIndex === images_lists.length - 1 || !preview_container_hovered? <div style={{width: "5%", height:"20%"}}></div> : 
                    <Triangle width="5%" height="20%" color="#90E0EF" rotation="right" margin="auto 0%" clickable={true} func={HandleRightClick}/>
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

const Description = ({title="Title", description="Description Text"}) =>
{

    const [text_color, SetColor] = useState("#13505B")

    return (
        <div className="home-portfolio-section-description">
            <div className="home-portfolio-section-title">
                <h1 className='sub-title-text'>{title}</h1>
            </div>
            <div className="home-portfolio-section-text">
                <p className='normal-text-medium'>{description}</p>
            </div>
            <p className='cursive-button cursor-pointer' style={{color: text_color, margin: "auto"}}
                onMouseEnter={() => SetColor("#DAC21C")} onMouseLeave={() => SetColor("#13505B")}
                >Check it out!</p>
        </div>
    )
}


const HomePortfolioDescription = ({images=[0, 1, 2, 3, 4, 5, 6], title="Title", description="Description Text", swap=false}) => {
  return (
    <div className="home-portfolio-section">
        {!swap ? <Slider images_lists={images}/> : <Description title={title} description={description} /> }
        {!swap ? <Description title={title} description={description} /> : <Slider images_lists={images}/>  }
    </div>
  )
}

export default HomePortfolioDescription