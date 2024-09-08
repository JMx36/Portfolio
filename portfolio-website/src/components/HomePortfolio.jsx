import HomePortfolioDescription from '../components/HomePortfolioDescription.jsx'
import { useMediaQuery } from 'react-responsive';

const HomePortfolio = () => {

    const isSmallerScreen = useMediaQuery({ query: '(max-width: 1000px)' });

    const info = [["Game Developer Projects", 
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut.", 
                        []],
                ["Software Developer Projects",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut.",
                    []
                ]
    ]
  
    return (
    <div className="home-portfolio">
        <div className="home-portfolio-header">
            <div className="rectangle width-45per"></div>
            <div className="home-portfolio-title">
                <h1 className="italic-title title-text-padding home-portfolio-title-text">Portfolios</h1>
            </div>
            <div className="rectangle width-45per"></div>
        </div>

        <HomePortfolioDescription images={[[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 2, 3], [4, 5, 6], [7, 8, 9]]} title={info[0][0]} description={info[1][1]} swap={isSmallerScreen}/>
        <HomePortfolioDescription images={[[1, 2, 3], [4, 5, 6], [7, 8, 9]]} title={info[1][0]} description={info[1][1]} swap={true}/>

        <div className="portfolio-bottom-header width-100per">
            <div className="rectangle"></div>
        </div>


    </div>
  )
}

export default HomePortfolio