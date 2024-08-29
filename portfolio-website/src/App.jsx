import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import HomePortfolio from './components/HomePortfolio.jsx'
import Contact from './components/Contact.jsx'

const App = () => {
  return (
    <div className="App">
      <header>
        <NavBar />  
        <Hero />
      </header>
      <About />
      <Skills />
      <HomePortfolio />
      <Contact />
    </div>
  )
}

export default App