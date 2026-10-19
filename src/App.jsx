import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import EmergencyRequest from './pages/EmergencyRequest'
import Login from './pages/Login'
import TechnicianDashboard from './pages/TechnicianDashboard'
import SignUp from './pages/SignUp'
import Footer from './components/Footer'
import Profile from './pages/Profile'
import Services from './pages/Services'
import TrackService from './pages/TrackService'
import ServiceDetail from './pages/ServiceDetail'
import Navbar from './components/Navbar'

function App() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLoggedIn") === "true")
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/:id' element={<ServiceDetail />} />
        <Route path="/request-service" element={<EmergencyRequest />} />
        <Route path="/track-service" element={<TrackService />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="profile" element={<Profile isLogin={isLogin} setIsLogin={setIsLogin} />} />
        <Route path="/login" element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />} />
        <Route path='/technician-dashboard' element={<TechnicianDashboard />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App
