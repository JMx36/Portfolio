
const ImagesPreview = ({images, style={}}) => {

    // probably need to check that there are only 3 images or only do the first three images

    const box_style = [
        { 
            width: 'clamp(115px, 18vw, 300px)', //45%
            backgroundColor: '#959494',
            zIndex: '1', 
            top: '31%',
            aspectRatio: '1/1',
            borderRadius: '17%',
            overflow: 'hidden'
        }, 
        { 
            width: 'clamp(140px, 22vw, 350px)', //52%
            backgroundColor: '#503C3C',
            zIndex: '2', 
            left: '27%',
            aspectRatio: '9/10',
            borderRadius: '17%',
            overflow: 'hidden'
        }, 
        { 
            width: 'clamp(106px, 18vw, 280px)', //40%
            backgroundColor: '#B8B5B5',
            zIndex: '1', 
            top: '40%',
            left: '63%',
            aspectRatio: '1/1',
            borderRadius: '17%',
            overflow: 'hidden'
        }];

    
    const image_box_style = {

        position: "relative",
        margin: "auto",
        boxSizing: "border-box",
    }

    const combined_styles = { ...image_box_style, ...style};

    return (
        <div className="image-preview" style={{margin: 'auto'}}>
            <div className="image-preview-container" style={combined_styles}>
                {images.map((image, index) => (
                    <div className={`image-box preview-image-box-${index}`} style={box_style[index]}>
                        <img src={image} alt="" style={{ width: "100%", height: '100%'}}/>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ImagesPreview