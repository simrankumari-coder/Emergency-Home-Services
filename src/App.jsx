import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import EmergencyRequest from './pages/EmergencyRequest'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App
