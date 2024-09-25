import HomePortfolioDescription from '../components/HomePortfolioDescription.jsx'
import { useMediaQuery } from 'react-responsive';

const HomePortfolio = () => {

    const isSmallerScreen = useMediaQuery({ query: '(max-width: 1080px)' });

    const info = [["Game Developer Projects", 
                    "Throughout my time at UCI, I’ve worked on a variety of game projects that have sharpened both my programming and game development skills. My experience ranges from creating single-player platformers to full-scale first-person multiplayer games. I’m currently collaborating with a team to develop a game in Unreal Engine 5, which will be added to my portfolio soon.", 
                        []],
                ["Software Developer Projects",
                    "Although my software portfolio isn’t as extensive as my game development work, it still features key projects I’m proud of. This includes a class project where I built a small-scale search engine for UCI documents, as well as other AI-based projects. More projects will be added as I continue to develop and complete them.",
                    []
                ]
    ]
  
    return (
    <div className="home-portfolio">
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

        <HomePortfolioDescription images={[[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 2, 3], [4, 5, 6], [7, 8, 9]]} title={info[0][0]} description={info[1][1]} swap={isSmallerScreen}/>
        <HomePortfolioDescription images={[[1, 2, 3], [4, 5, 6], [7, 8, 9]]} title={info[1][0]} description={info[1][1]} swap={true}/>

    </div>
  )
}

export default HomePortfolio