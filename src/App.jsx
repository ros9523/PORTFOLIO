import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import About_me from './components/About_me'
import BG2 from './components/bg/BG2'



function App() {
  const [count, setCount] = useState(0)
   
  return (
    <div className="App">
  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about_me" element={<About_me/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
