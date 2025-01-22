import React, { useState } from 'react';
import CircularSelector from './CircularSelector.jsx';
import DescriptionBoxes from './DescriptionBoxes.jsx';
import PortfolioItem from './PortfolioItem.jsx';
import LogosDisplay from './LogosDisplay.jsx';

// Component for the Skills section of each portfolio page
const PortfolioSkills = ({title, title_caption, category_skills_logos, buttons_text, 
    descriptions, circle_logos, all_skills_logos, projects}) => {


    const [currentIndex, SetIndex] = useState(-1);

    return (
        <div id="tech-and-tools" className='skills-section'>
            <h2 className="lighter-blue-text italic work-sans-family fs-64px fw-700" style={{margin: "0% auto", marginTop: "max(50px, 5%)"}}>{title}</h2>
            <p className="caption fs-36px fw-400 work-sans-family" style={{marginBottom: "2%"}}>
                {title_caption}
            </p>
            <CircularSelector buttons_text={buttons_text} logos={circle_logos} parent_index_func={SetIndex}/>
            <LogosDisplay logos={currentIndex >= 0 ? category_skills_logos[currentIndex] : all_skills_logos}/>
            <DescriptionBoxes 
                title="What I bring to the table " 
                title_color='#FFDF00'
                box_background='#574D01'
                background='#A59004'
                descriptions={descriptions}
            />
            <h2 className='lighter-blue-text italic work-sans-family fs-64px fw-700' style={{margin: "5% auto"}}>Projects</h2>
            {
                projects.map((project, index) => (<PortfolioItem project={project}/>))
            }
           
        </div>
  )
}

export default PortfolioSkills