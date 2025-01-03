import React from 'react'

const VideoPreview = ({image, caption}) => {
  return (
    <div className="Video-Preview" style={{ margin: "auto"}}>
        <img className="" style={{width: "clamp(300px, 50vw, 800px)", aspectRatio: "16/9",}} src={image} alt='Task Preview'/>
        <p className='work-sans-family fs-20px fw-300' style={{textAlign: "center", margin: "1% auto"}}>{caption}</p>
    </div>
  )
}

export default VideoPreview