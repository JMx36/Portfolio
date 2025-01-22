import HomePortfolioDescription from '../components/HomePortfolioDescription.jsx'
import { useMediaQuery } from 'react-responsive';

const HomePortfolio = () => {

    const isSmallerScreen = useMediaQuery({ query: '(max-width: 1080px)' });

    const info = [["Game Developer Projects", 
                    "During my time at UCI, I worked on diverse game projects that honed my programming and game development skills. My experience spans from developing single-player platformers to creating large-scale first-person multiplayer games using engines like Unity and Unreal Engine 5.",
                        []],
                ["Software Developer Projects",
                    "Through UCI’s Computer Science program, I have refined my problem-solving skills by analyzing challenges and crafting effective plans to address them. One of my key projects involved developing a small-scale search engine for UCI documents, utilizing the foundational concepts and techniques behind search engine design.",
                    []
                ]
    ]
  
    return (
    <div id="Home-Portfolio" className="home-portfolio">
        <div className="home-portfolio-header">
            <div className="home-portfolio-title">
                <h1 className="italic work-sans-family fw-700 fs-64px home-portfolio-title-text" style={
                    {   margin: "0", 
                        padding: "0",
                    }
                }
                >My Portfolios</h1>
            </div>
        </div>

        <HomePortfolioDescription images={[
                ["assets/Images/Preview-Images/GameDev/Dawncore/left.jpg", "assets/Images/Preview-Images/GameDev/Dawncore/middle.jpg", "assets/Images/Preview-Images/GameDev/Dawncore/right.jpg"], 
                ["assets/Images/Preview-Images/GameDev/Quickshot/left.png", "assets/Images/Preview-Images/GameDev/Quickshot/middle.png", "assets/Images/Preview-Images/GameDev/Quickshot/right.png"], 
                ["assets/Images/Preview-Images/GameDev/UE/left.png", "assets/Images/Preview-Images/GameDev/UE/middle.png", "assets/Images/Preview-Images/GameDev/UE/right.png"]]
            } 
            title={info[0][0]} description={info[0][1]} swap={isSmallerScreen} link="/gaming-portfolio"
            downloadLink='Resumes/GameDevResume.pdf' downloadName='GameDevResume.pdf'
            />
        <HomePortfolioDescription images={[
                ["assets/Images/Preview-Images/SoftwareDev/left.png", "assets/Images/Preview-Images/SoftwareDev/middle.jpg", "assets/Images/Preview-Images/SoftwareDev/right.png"]
                ]
            } 
            title={info[1][0]} 
            description={info[1][1]} swap={true} link="/software-portfolio"
            downloadLink='Resumes/SoftwareDevResume.pdf' downloadName='SoftwareDevResume.pdf'
            />
    </div>
  )
}

export default HomePortfolio