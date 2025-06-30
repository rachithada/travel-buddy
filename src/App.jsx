import React from 'react'
import Home from "./pages/Home"
import About from './pages/About'
import Places from './pages/Places'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/places" element={<Places />}/>
      </Routes>
    </BrowserRouter>
  )
}

