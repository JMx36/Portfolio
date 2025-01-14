import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './style/index.css'
import './style/navbar.css'
import './style/hero.css'
import './style/text.css'
import './style/about.css'
import './style/skills.css'
import './style/home_portfolio.css'
import './style/contact.css'
import './style/utilities.css'
import './style/footer.css'
import './style/gaming_portfolio.css'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />

  
  // </StrictMode>,
)
