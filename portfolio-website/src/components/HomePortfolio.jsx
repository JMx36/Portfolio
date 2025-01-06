import HomePortfolioDescription from '../components/HomePortfolioDescription.jsx'
import { useMediaQuery } from 'react-responsive';

const HomePortfolio = () => {

    const isSmallerScreen = useMediaQuery({ query: '(max-width: 1080px)' });

    const info = [["Game Developer Projects", 
                    "Throughout my time at UCI, I’ve worked on a variety of game projects that have sharpened both my programming and game development skills. My experience ranges from creating single-player platformers to full-scale first-person multiplayer games in engines like Unity and Unreal 5", 
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

        <HomePortfolioDescription images={[[1, 2, 3], [4, 5, 6], [7, 8, 9]]} 
            title={info[0][0]} description={info[0][1]} swap={isSmallerScreen} link="/gaming-portfolio"/>
        <HomePortfolioDescription images={[[1, 2, 3], [4, 5, 6], [7, 8, 9]]} title={info[1][0]} description={info[1][1]} swap={true}/>
        <div style={{marginBottom: "5%"}}></div>
    </div>
  )
}

export default HomePortfolio