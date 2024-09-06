
const ImagesPreview = ({height, width, images}) => {

    // probably need to check that there are only 3 images or only do the first three images

    const box_style = [
        { 
            width: '45%',
            height: '70%',
            backgroundColor: '#959494',
            zIndex: '1', 
            top: '30%',
        }, 
        { 
            width: '52%',
            height: '80%',
            backgroundColor: '#503C3C',
            zIndex: '2', 
            left: '23.5%'
        }, 
        { 
            width: '40%',
            height: '61%',
            backgroundColor: '#B8B5B5',
            zIndex: '1', 
            top: '30%',
            left: '60%'
        }];


    return (
        <div className="image-preview" style={{height: {height}, width: {width}}}>
            {images.map((image, index) => (
                <div className={`image-box border-radius-54`} style={box_style[index]}>
                    <img src={image} alt="" />
                </div>
            ))}

        </div>
    )
}

export default ImagesPreview