import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Footer from './components/Footer'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/:id' element={<ServiceDetail />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App
