import React, { useState } from 'react';
import CircularSelector from '../components/CircularSelector.jsx';
import DescriptionBoxes from '../components/DescriptionBoxes.jsx';
import PortfolioItem from '../components/PortfolioItem.jsx';
import LogosDisplay from '../components/LogosDisplay.jsx';

// Category Logos //
import game_engine_icon from "../assets/Images/Categories/game-development-icon.svg"
import dev_tools from "../assets/Images/Categories/dev-tools.svg"
import production from "../assets/Images/Categories/production.svg"
import prog_languages from "../assets/Images/Categories/prog-languages.svg"
import version_control from "../assets/Images/Categories/version-control.svg"


// Logos ///
import c_logo from "../assets/Images/WhiteLogos/c.png"
import cpp_logo from "../assets/Images/WhiteLogos/cpp.png"
import cs_logo from "../assets/Images/WhiteLogos/cs.png"
import python_logo from "../assets/Images/WhiteLogos/python.png"
import github_logo from "../assets/Images/WhiteLogos/github.png"
import gitkraken_logo from "../assets/Images/WhiteLogos/gitkraken.png"
import unity_logo from "../assets/Images/WhiteLogos/unity_small.png"
import unreal_logo from "../assets/Images/WhiteLogos/unreal_small.png"
import vs_logo from "../assets/Images/WhiteLogos/vs.png"
import vscode_logo from "../assets/Images/WhiteLogos/vscode.png"
import jira_logo from "../assets/Images/WhiteLogos/jira_small.png"

// Tasks

import projects from "../Information/game-portfolio-tasks.json"


class ImageInfo
{
    constructor({image, width="clamp(20px, 10vw, 50px)", height="auto"})
    {
        this.image = image;
        this.width = width;
        this.height = height;
    }
}


const GamingSkills = () => {
    const CLogo = new ImageInfo({ image: c_logo});
    const CSharp = new ImageInfo({ image: cs_logo});
    const CPP = new ImageInfo({ image: cpp_logo});
    const Gitkraken = new ImageInfo({ image: gitkraken_logo});
    const Python = new ImageInfo({ image: python_logo});
    const Jira = new ImageInfo({ image: jira_logo});
    const GitHub = new ImageInfo({ image: github_logo});
    const Unreal = new ImageInfo({ image: unreal_logo});
    const Unity = new ImageInfo({ image: unity_logo});
    const VisualStudio = new ImageInfo({ image: vs_logo});
    const VSCode = new ImageInfo({ image: vscode_logo});

    const Game_Engine = new ImageInfo({ image: game_engine_icon, width: "clamp(20px, 20vw, 70px)"});
    const Dev_Tools = new ImageInfo({ image: dev_tools, width: "clamp(20px, 20vw, 70px)"});
    const Production = new ImageInfo({ image: production, width: "clamp(20px, 20vw, 70px)"});
    const Prog_Languages = new ImageInfo({ image: prog_languages, width: "clamp(20px, 20vw, 70px)"});
    const Version_Ctrl = new ImageInfo({ image: version_control, width: "clamp(20px, 20vw, 70px)"});

    const buttons_text = ["Production", "Engines", "Version Control", "Software", "Languages"];
    const category_skills_logos = [
        [Jira],
        [Unity, Unreal],
        [GitHub, Gitkraken],
        [VisualStudio, VSCode],
        [CLogo, CPP, CSharp, Python]
    ];

    const circle_logos = [
        Production, Game_Engine, Version_Ctrl, Dev_Tools, Prog_Languages
    ]

    const all_skills_logos = [Jira, Unreal, Unity, GitHub, Gitkraken, VisualStudio, VSCode, CLogo, CPP, CSharp, Python]

    const [currentIndex, SetIndex] = useState(-1);

    const descriptions = 
    [
        ["Game Dev.",
            "Proficient in industry-standard game engines like Unreal Engine and Unity, with experience in developing gameplay mechanics and implementing editor scripting in Unity to streamline workflows and improve productivity. I’ve worked with Unreal’s C++ and Blueprints, as well as Unity’s scripting and Photon for multiplayer functionality. My experience includes integrating visual effects created by VFX team members into games, as well as implementing UI designs to enhance user experiences."
        ],
        ["Collaboration",
            "Experience working in collaborative environments, using tools like Git, Perforce, Jira, and Trello to coordinate tasks and maintain project alignment. I’ve contributed to Agile workflows, participating in sprint planning, stand-ups, and retrospectives. My ability to communicate effectively across disciplines (e.g. designers, artists, audio, etc.) has been key in delivering high-quality projects."
        ],
        ["Leadership",
            "As the programming team lead for several game projects, I was responsible for organizing team meetings, ensuring clear communication, and making sure everyone understood their roles and tasks. I created UML diagrams and control flow charts to clarify system designs and support my fellow programmers in implementing features effectively. By fostering collaboration and maintaining a clear project vision, I helped deliver projects on time while proactively addressing technical challenges to ensure smooth development."
        ]
    ]

    return (
        <div className='skills-section'>
            <h2 className="lighter-blue-text italic work-sans-family fs-64px fw-700" style={{margin: "0% auto", marginTop: "5%"}}>Technologies & Tools</h2>
            <p className="caption fs-36px fw-400 work-sans-family" style={{marginBottom: "2%"}}>As a game developer, I thrive on continuous learning and adaptability. I enjoy diving into diverse tools and technologies to bring creative visions to life. Below are some of the technologies I've worked with on my journey.
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

export default GamingSkills