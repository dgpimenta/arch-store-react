import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'

import './global.css'
import { createContext, useState } from 'react'

export const ThemeContext = createContext(null)

export function App() {  
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(state => state === 'light' ? 'dark' : 'light')
    console.log('ai salve')
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>             
        <Header />
        <Home />      
        <Footer />        
    </ThemeContext.Provider> 
  )
}


