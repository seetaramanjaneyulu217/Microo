import react, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './components/Services'
import About from './components/About'
import Shop from './components/Shop'
import Client from './components/Client'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/client' element={<Client/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
