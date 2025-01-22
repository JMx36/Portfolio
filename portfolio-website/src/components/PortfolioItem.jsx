import React from 'react'
import {Button} from "../components/utilities.jsx"
import {Slider} from "../components/HomePortfolioDescription.jsx"
import { useMediaQuery } from 'react-responsive';
import VideoPreview from '../components/VideoPreview.jsx'


const TaskDescription = ({task_title, tasks}) =>
{
    return (
        <div className='task-description'>
            <h2 className='fs-24px'>{task_title}</h2>
            <ul className="custom-list work-sans-family fs-20px fw-300">
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>  /* Use the index as a unique key */
                ))}
            </ul>
        </div>
    )
}


const GameTitleInfo = ({title, subTitle, game_info, description, btn_link}) => {
    return (
        <div className='text-container fs-40px work-sans-family fw-600'>
            <h2 style={{marginBottom: "2rem"}}>{title}</h2>
            <p className='work-sans-family fs-24px fw-600'>{subTitle}</p>
            <p className='work-sans-family fs-20px fw-300' style={{marginTop: "2%"}}>{game_info}</p>
            <p className='work-sans-family fs-20px fw-300' style={{marginTop: "2%", fontStyle: "italic"}}>
                {description}
            </p>
            <Button text="Try it out!" textShadow='3px 2px 4px rgba(0, 0, 0, 50%)'
                                text_style={"work-sans-family fs-24px fw-600"} 
                                radius="10px"
                                color="white"
                                style={{color: "black", padding: "1rem 1rem", margin: "4% auto 0% auto"}}
                                isLink={true}
                                link_to={btn_link}
                                link_type='external'
                        />
        </div>
    )
}

const PortfolioItem = ({project}) => {
       
    // images.push(jira)
    return (
        <div className="portfolio-item">
            <div className='title-section dark-overlay' style={{backgroundImage: project["title-background-image"]}}>
                <div className='container to-front2'>
                        <GameTitleInfo title={project.title} subTitle={project["job-title"]} 
                        game_info={project.tools} description={project.description} btn_link={project["game-link"]}/>
                        {
                            project.trailer === "" ? "" : 
                            <iframe src={project.trailer}
                            title="YouTube embed" allow="autoplay; fullscreen" allowFullScreen>
                            </iframe> 
                        }
                </div>
            </div>
            <div className='tasks-section' style={{backgroundImage:  project["task-section-background-color"]}}>
                <div className='task-container'>
                    <div className='container to-front2'>
                        <div className='left fw-600 fs-20px work-sans-family'>
                            <h1>{project['task-section-title']}</h1>
                            {project["jobs-section"].map((job, index) =>
                                (<TaskDescription task_title={job.title} tasks={job.jobs}/>))
                            }
                        </div>
                        <div className='right'>
                            <div className='right-container'>
                                {
                                    <Slider images_lists={project["gifs-section"]} render={(index, gifsInfo) => <VideoPreview image={gifsInfo[index].gif} caption={gifsInfo[index].caption}/>}/>
                                }
                            </div>
                        </div>
                    </div>
                    <div className='reflection work-sans-family fs-24px fw-600 to-front2'>
                        <h1 className=''>Final Thoughts</h1>
                        <p className='work-sans-family fw-300 fs-20px'>{project.thoughts}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PortfolioItem