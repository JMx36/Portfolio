import { Route, createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from 'react-router-dom';

import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import HomePortfolio from './components/HomePortfolio.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import MainLayout from './layouts/MainLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="index.html" element={<HomePage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}/>;
    // <div className="App">
    //   <header>
    //     <NavBar />  
    //     <Hero />
    //   </header>
    //   <About />
    //   <Skills />
    //   <HomePortfolio />
    //   <Contact />
    //   <Footer />
    // </div>

}

export default App