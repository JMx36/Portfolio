import React from 'react'

import Hero from '../components/Hero.jsx';
import PortfolioSkills from '../components/PortfolioSkills.jsx';
import { ButtonInfo } from '../components/utilities.jsx';


// Category Logos //
import web_dev_icon from "../assets/Images/Categories/web-development.svg"
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
import react_logo from "../assets/Images/WhiteLogos/react.svg"
import js_logo from "../assets/Images/WhiteLogos/javascript.svg"
import vs_logo from "../assets/Images/WhiteLogos/vs.png"
import vscode_logo from "../assets/Images/WhiteLogos/vscode.png"
import jira_logo from "../assets/Images/WhiteLogos/jira_small.png"
import trello_logo from "../assets/Images/WhiteLogos/trello.svg"
import html_logo from "../assets/Images/WhiteLogos/html.svg"
import css_logo from "../assets/Images/WhiteLogos/css.svg"


// Tasks
import projects from "../Information/software-portfolio-tasks.json"


class ImageInfo
{
    constructor({image, width="clamp(20px, 10vw, 50px)", height="auto"})
    {
        this.image = image;
        this.width = width;
        this.height = height;
    }
}

const GamingPortfolio = () => {

    const hero_typewrite_text = ["Web Developer", "Software Engineer"]
    const hero_buttons = [
    new ButtonInfo({text: "Resume", isLink: true, link: "/", type: "aTag"}), 
    new ButtonInfo({text: "About", isLink: true, link: "/#About", type: "aTag"})
    ]


    const CLogo = new ImageInfo({ image: c_logo});
    const CSharp = new ImageInfo({ image: cs_logo});
    const CPP = new ImageInfo({ image: cpp_logo});
    const Gitkraken = new ImageInfo({ image: gitkraken_logo});
    const Python = new ImageInfo({ image: python_logo});
    const Jira = new ImageInfo({ image: jira_logo});
    const GitHub = new ImageInfo({ image: github_logo});
    const React = new ImageInfo({ image: react_logo});
    const JavaScript = new ImageInfo({ image: js_logo});
    const VisualStudio = new ImageInfo({ image: vs_logo});
    const VSCode = new ImageInfo({ image: vscode_logo});
    const Trello = new ImageInfo({ image: trello_logo});
    const Html = new ImageInfo({ image: html_logo});
    const CSS = new ImageInfo({ image: css_logo});


    const Web_Dev = new ImageInfo({ image: web_dev_icon, width: "clamp(20px, 20vw, 70px)"});
    const Dev_Tools = new ImageInfo({ image: dev_tools, width: "clamp(20px, 20vw, 70px)"});
    const Production = new ImageInfo({ image: production, width: "clamp(20px, 20vw, 70px)"});
    const Prog_Languages = new ImageInfo({ image: prog_languages, width: "clamp(20px, 20vw, 70px)"});
    const Version_Ctrl = new ImageInfo({ image: version_control, width: "clamp(20px, 20vw, 70px)"});

    const buttons_text = ["Production", "Web Dev", "Version Control", "Software", "Languages"];
    const category_skills_logos = [
        [Jira, Trello],
        [React, JavaScript],
        [GitHub, Gitkraken],
        [VisualStudio, VSCode],
        [CLogo, CPP, CSharp, Python, JavaScript]
    ];

    const circle_logos = [
        Production, Web_Dev, Version_Ctrl, Dev_Tools, Prog_Languages
    ]

    const all_skills_logos = [Jira, Trello, GitHub, Gitkraken, VisualStudio, VSCode, CLogo, CPP, CSharp, Python,  React, JavaScript, Html, CSS]


    const descriptions = 
    [
        ["Software Dev.",
            "Experienced in both Object-Oriented and functional programming, leveraging these paradigms to develop efficient software solutions that achieve specific goals. With a strong understanding of low-level programming, I focus on writing code that maximizes resource usage and ensures optimal performance. My experience extends to multithreading and network programming, allowing me to develop concurrent systems and handle network communication effectively. While working on my different projects, I have kept a strong emphasis on writing clean, maintainable, and self-documented code that is scalable and easy to extend."
        ],
        ["Collaboration",
            "Experience working in collaborative environments, using tools like Git, Perforce, Jira, and Trello to coordinate tasks and maintain project alignment. I’ve contributed to Agile workflows, participating in sprint planning, stand-ups, and retrospectives. My ability to communicate effectively across different disciplines has been key in delivering high-quality projects."
        ],
        ["Leadership",
            "As the programming team lead for several group projects, I was responsible for organizing team meetings, ensuring clear communication, and making sure everyone understood their roles and tasks. I created UML diagrams and control flow charts to clarify system designs and support my fellow programmers in implementing features effectively. By fostering collaboration and maintaining a clear project vision, I helped deliver projects on time while proactively addressing technical challenges to ensure smooth development."
        ]
    ]

    const caption = "As a software developer, I am passionate about problem-solving and crafting efficient, user-focused solutions. I embrace challenges as opportunities to grow and excel in a constantly evolving tech landscape. Below are some of the tools and technologies I have honed on my journey to build impactful software."

    return (
    <>
        <Hero typewriter_text={hero_typewrite_text} buttons_info={hero_buttons} background='url("assets/Images/Hero/SEHeroImage.jpg")'/>
        <PortfolioSkills title="Technologies & Tools" title_caption={caption} category_skills_logos={category_skills_logos}
                buttons_text={buttons_text} descriptions={descriptions} 
                circle_logos={circle_logos} all_skills_logos={all_skills_logos}
                projects={projects}
                />
    </>
    )
}

export default GamingPortfolio