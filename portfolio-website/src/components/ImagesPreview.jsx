
const ImagesPreview = ({height, width, images, style={}}) => {

    // probably need to check that there are only 3 images or only do the first three images

    const box_style = [
        { 
            width: '45%',
            backgroundColor: '#959494',
            zIndex: '1', 
            top: '31%',
            aspectRatio: '1/1',
            borderRadius: '17%'
        }, 
        { 
            width: '52%',
            backgroundColor: '#503C3C',
            zIndex: '2', 
            left: '23.5%',
            aspectRatio: '9/10',
            borderRadius: '17%'
        }, 
        { 
            width: '40%',
            backgroundColor: '#B8B5B5',
            zIndex: '1', 
            top: '31%',
            left: '60%',
            aspectRatio: '1/1',
            borderRadius: '17%'
        }];

    
    const image_box_style = {

        position: "relative",
    }

    const combined_styles = { ...image_box_style, ...style};

    return (
        <div className="image-preview" style={combined_styles}>
            {images.map((image, index) => (
                <div className={`image-box`} style={box_style[index]}>
                    <img src={image} alt="" />
                </div>
            ))}

        </div>
    )
}

export default ImagesPreview