import { FooterLogos } from "../components/Footer.jsx"
import { Button } from '../components/utilities.jsx'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-content to-front2 blur-background">
              <h1 className="pacifico-family fw-400 fs-64px to-front2" style={{lineHeight: "1"}}>Josh Castillo</h1>
              <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
                textAlign: "center"
              }}>
                <h2 className="work-sans-family fs-30px fw-300 to-front2">Game | Software</h2>
                <p className="work-sans-family fs-30px fw-300 to-front2" style={{marginTop: 0}}>Engineer</p>
              </div>
              <div className="to-front2">
                <FooterLogos/>
              </div>
              <div className="hero-buttons-container to-front2">
                    <Button text="Resume" color="white" 
                            style={{minWidth: "150px"}}  />
                    <Button text="Portfolio" color="white" 
                            style={{minWidth: "150px"}}  />
              </div>
        </div>
    </div>
  )
}

export default Hero