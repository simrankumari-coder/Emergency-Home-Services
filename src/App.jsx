import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import EmergencyRequest from './pages/EmergencyRequest'
import Footer from './components/Footer'
import Services from './pages/Services'
import TrackService from './pages/TrackService'
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
        <Route path="/request-service" element={<EmergencyRequest />} />
        <Route path="/track-service" element={<TrackService />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App
