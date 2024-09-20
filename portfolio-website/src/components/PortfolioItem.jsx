import React from 'react'
import {Button} from "../components/utilities.jsx"


const CalculatePositions = () => {

}

const TaskDescription = ({task_title, tasks}) =>
{
    return (
        <div className='task-description'>
            <h3>{task_title}</h3>
            <ul class="custom-list thin-white-text">
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>  /* Use the index as a unique key */
                ))}
            </ul>
        </div>
    )
}

const PortfolioItem = ({youtube_vid="https://www.youtube.com/embed/OQ1CwPhE8KQ", tasks=[], images=[]}) => {

    tasks.push(["Destruction Strike Team Member", [
        "Was part of a core engineering effort to implement fine-grain destruction, a marquee feature for the title",
        "Destructible asset pipeline and rigid body optimization",
        "Improved client only clutter to assist with destructible atmosphere"]])

    images.push("https://i.makeagif.com/media/4-27-2017/Ov0nNw.gif")

    return (
        <div className="portfolio-item">
            <div className='title-section dark-overlay'>
                <div className='container to-front2'>
                    <div className='text-container normal-text-bigger'>
                        <h2 style={{marginBottom: "10%"}}>QuickShot</h2>
                        <p className='normal-text-medium'>Gameplay Engineer | Programming Lead</p>
                        <p className='thin-white-text' style={{marginTop: "2%"}}>(Unity | PC)</p>
                        <p className='thin-white-text' style={{marginTop: "2%", fontStyle: "italic"}}>
                            A sniper free-for-all (FFA) game, where the sniper is inspired from Overwatch's character, Ana.
                        </p>
                        <Button text="Try it out!" 
                                text_style={"normal-text-medium"} 
                                radius="10px"
                                style={{color: "white", padding: "1rem 1rem", margin: "4% auto 0% auto"}}

                        />
                    </div>
                    <iframe  src={youtube_vid}
                        width="640" height="360" title="YouTube embed" allow="autoplay; fullscreen" allowFullScreen>
                    </iframe>

                </div>
            </div>
            <div className='tasks-section'>
                <div className='task-container'>
                    <div className='container to-front2'>
                        <div className='left description-text'>
                            <h1>Gameplay Engineer</h1>
                            <TaskDescription task_title={tasks[0][0]} tasks={tasks[0][1]}/>
                            <TaskDescription task_title={tasks[0][0]} tasks={tasks[0][1]}/>
                            <TaskDescription task_title={tasks[0][0]} tasks={tasks[0][1]}/>
                        </div>
                        <div className='right'>
                            <div className='right-container'>
                                <div class="">
                                    <img src="https://i.makeagif.com/media/4-27-2017/Ov0nNw.gif" alt="Responsive GIF"/>
                                </div>
                                <div class="">
                                    <img src="https://i.makeagif.com/media/4-27-2017/Ov0nNw.gif" alt="Responsive GIF"/>
                                </div>
                                <div class="">
                                    <img src="https://i.makeagif.com/media/4-27-2017/Ov0nNw.gif" alt="Responsive GIF"/>
                                </div>
                                <div class="">
                                    <img src="https://i.makeagif.com/media/4-27-2017/Ov0nNw.gif" alt="Responsive GIF"/>
                                </div>
                                <div class="">
                                    <img src="https://i.makeagif.com/media/4-27-2017/Ov0nNw.gif" alt="Responsive GIF"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='reflection normal-text-medium to-front2'>
                        <h1 style={{fontStyle: "italic"}}>Thoughts</h1>
                        <p className='thin-white-text'>From this project I have learned ...</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PortfolioItem