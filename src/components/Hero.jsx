import React from 'react'

import bgImage from "../assets/bg.jpg"
const Hero = () => {
    return (
        <section className='w-full'>

            <div className='flex  w-full'>
                <div className='w-1/2 px-12 py-20'>
                    <h6 className='text-sm font-semibold'>24/7 EMERGENCY HOME SERVICES</h6>
                    <h1 className='text-5xl text-blue-800 mt-4 font-bold'>Get Help at Home , Right When You Need It.</h1>
                    <p className='text-lg text-slate-600 mt-6'>Request a service and get connected with an availble technician near you.</p>
                    <div className="flex gap-4 mt-8">

                        <button className='bg-red-600 text-white px-6 py-3 rounded-lg'>Request Emergency Service</button>
                        <button className='border border-slate-400 text-slate-700 px-6 py-3 rounded-lg'>Track the Service</button>
                    </div>
                </div>
                <div className='w-1/2 px-12 py-20 '>
                    <img src={bgImage} className='w-full h-full object-cover rounded-md' alt="background image" />
                </div>
            </div>
        </section>
    )
}

export default Hero
