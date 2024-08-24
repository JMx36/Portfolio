import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'

const App = () => {
  return (
    <div className="App">
      <header>
        <NavBar />  
        <Hero />
      </header>
      <About />
      <Skills />
    </div>
  )
}

export default App