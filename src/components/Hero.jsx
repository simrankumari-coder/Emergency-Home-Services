import React from 'react'
import { Link } from 'react-router'
import bgImage from "../assets/bg.jpg"
const Hero = () => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser") || "null")
    return (
        <section className='w-full'>

            <div className='flex flex-col md:flex-row w-full'>
                <div className='md:w-1/2 w-full  md:px-12 md:py-20 px-6 py-6'>
                    <h6 className='text-sm font-semibold'>24/7 EMERGENCY HOME SERVICES</h6>
                    <h1 className='lg:text-5xl text-2xl text-blue-800 mt-4 font-bold'>Get Help at Home , Right When You Need It.</h1>
                    <p className='lg:text-lg text-sm text-slate-600 mt-6'>Request a service and get connected with an availble technician near you.</p>
                    <div className="flex flex-col lg:flex-row gap-4 mt-8">
                        {!loggedUser && (
                            <Link to="/signup" className='bg-blue-800 text-white px-6 py-3 rounded-lg text-center hover:bg-blue-900 transition'>Get Started</Link>
                        )}
                        {loggedUser?.role === "Customer" && (
                            <>
                                <Link to="request-service">
                                    <button className='bg-blue-800 text-white px-6 py-3 rounded-lg text-center hover:bg-blue-900 transition'>Request Service</button>
                                </Link>
                                <Link to="track-service">
                                    <button className='border border-slate-400 text-slate-700 px-6 py-3 rounded-lg hover:bg-slate-100 transition'>Track the Service</button>
                                </Link>

                            </>
                        )}
                        {loggedUser?.role === "Technician" && (
                            <Link to="technician-dashboard" className='bg-blue-800 text-white px-6 py-3 rounded-lg text-center hover:bg-blue-900 transition'
                            >Go to Technician Dashboard
                            </Link>

                        )}
                    </div>
                </div>
                <div className=' w-full md:w-1/2  md:px-12 md:py-20 px-6 py-6 '>
                    <img src={bgImage} className='w-full h-full object-cover rounded-md' alt="background image" />
                </div>
            </div>
        </section>
    )
}

export default Hero
