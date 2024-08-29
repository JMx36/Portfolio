import React from 'react'
import ImagesPreview from '../components/ImagesPreview.jsx'

const Slider = ({images}) =>
{
    return (
        <div className="slider-container width-50per">
            <div className='slider-image-container'>
                <div className="home-portfolio-triangle-container">
                    <div className="home-portfolio-triangle" 
                        style={{transform: 'rotate(90deg)', 
                            top: "35%", left: "-37%"}}></div>
                </div>
                <ImagesPreview images={images}/>
                <div className="home-portfolio-triangle-container">
                    <div className="home-portfolio-triangle" style={{transform: 'rotate(-90deg)', 
                        top: "35%", 
                        left: "-65%"}}></div>
                </div>
            </div>
            <div className="circle-buttons width-50%">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
    )
}


const Description = ({title="Title", description="Description Text"}) =>
{
    return (
        <div className="home-portfolio-section-description width-50per">
            <div className="home-portfolio-section-title">
                <h1 className='sub-title-text'>{title}</h1>
            </div>
            <div className="home-portfolio-section-text">
                <p className='normal-text-medium'>{description}</p>
            </div>
            
        </div>
    )

}


const HomePortfolioDescription = ({images=[0, 1, 2], title="Title", description="Description Text", swap=false}) => {
  return (
    <div className="home-portfolio-section">
        {!swap ? <Slider images={images}/> : <Description title={title} description={description} /> }
        {!swap ? <Description title={title} description={description} /> : <Slider images={images}/>  }
    </div>
  )
}





export default HomePortfolioDescription