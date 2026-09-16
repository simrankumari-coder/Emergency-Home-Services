import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Services from './pages/Services'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
      </Routes>

    </>
  )
}

export default App
