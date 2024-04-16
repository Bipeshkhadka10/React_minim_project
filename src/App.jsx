import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
import Home from './Home';
import Contact from './Contact';
import About from './About';
function App() {
 const num=69;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
