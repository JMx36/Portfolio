import React, { useState } from 'react';
import CircularSelector from '../components/CircularSelector.jsx';
import DescriptionBoxes from '../components/DescriptionBoxes.jsx';
import PortfolioItem from '../components/PortfolioItem.jsx';


import c_logo from "../assets/Images/WhiteLogos/c.png"
import cpp_logo from "../assets/Images/WhiteLogos/cpp.png"
import cs_logo from "../assets/Images/WhiteLogos/cs.png"
import python_logo from "../assets/Images/WhiteLogos/python.png"
import github_logo from "../assets/Images/WhiteLogos/github.png"
import gitkraken_logo from "../assets/Images/WhiteLogos/gitkraken.png"
import unity_logo from "../assets/Images/WhiteLogos/unity.png"
import unreal_logo from "../assets/Images/WhiteLogos/unreal.png"
import vs_logo from "../assets/Images/WhiteLogos/vs.png"
import vscode_logo from "../assets/Images/WhiteLogos/vscode.png"
import jira_logo from "../assets/Images/WhiteLogos/jira.png"


class ImageInfo
{
    constructor({image, width="50px", height="50px"})
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
    const Jira = new ImageInfo({ image: jira_logo, width: "100px"});
    const GitHub = new ImageInfo({ image: github_logo});
    const Unreal = new ImageInfo({ image: unreal_logo, width: "100px"});
    const Unity = new ImageInfo({ image: unity_logo, width: "100px"});
    const VisualStudio = new ImageInfo({ image: vs_logo});
    const VSCode = new ImageInfo({ image: vscode_logo});

    const buttons_text = ["Production", "Engines", "Version Control", "Software", "Languages"];
    // const buttons_text = ["Production"];
    const logos = [
        [Jira],
        [Unreal, Unity],
        [GitHub, Gitkraken],
        [VisualStudio, VSCode],
        [CLogo, CPP, CSharp, Python]
    ];

    const descriptions = 
    [
        ["Team Work",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        ],
        ["Team Work",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        ],
        ["Team Work",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        ]
    ]

    return (
        <div className='skills-section'>
            <h2 className="lighter-blue-text italic-title" style={{margin: "5% auto"}}>Technologies & Tools</h2>
            <p className="caption description-text">As a developer, 
                I embrace the philosophy of continuous learning and versatility. 
                I find joy in exploring and mastering various technologies. 
                Here are some of the technologies I've had the pleasure of working with.
            </p>
            <CircularSelector buttons_text={buttons_text} logos={logos}/>
            <DescriptionBoxes 
                title="Experience with ... " 
                title_color='#FFDF00'
                box_background='#574D01'
                background='#A59004'
                descriptions={descriptions}
            />

            <PortfolioItem />
        </div>
  )
}

export default GamingSkills