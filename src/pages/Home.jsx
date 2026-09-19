import React from 'react'
import Hero from '../components/Hero'
import servicesData from '../data/services'
import { FaArrowRightLong } from "react-icons/fa6";
import ServiceCard from '../components/ServiceCard'

const Home = () => {
    return (
        <div>
            <Hero />
            <section className="py-10 px-12">
                <div className="text-center">
                    <p className="text-red-600 text-xl font-semibold">
                        OUR SERVICES
                    </p>

                    <h2 className="text-3xl font-bold text-slate-900 mt-2">
                        Get Emergency Help When You Need It Most
                    </h2>


                </div>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-10 gap-10'>
                {servicesData.slice(0, 2).map((item) => {
                    return <ServiceCard key={item.id} page="home" name={item.name} icon={item.icon} description={item.description} responseTime={item.responseTime} availability={item.availability} technicianAssignment={item.technicianAssignment} rating={item.rating} price={item.price} />
                })}
            </section>
            <section className="py-16 px-12 bg-gray-50">
                <div className="text-center mb-12">
                    <p className="text-red-600 text-xl font-semibold">
                        WHY CHOOSE US
                    </p>

                    <h2 className="text-3xl font-bold text-slate-900 mt-2">
                        Why Choose Our Emergency Services?
                    </h2>

                    <p className="text-slate-600 mt-3">
                        Reliable emergency support when you need help the most.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Fast Response */}
                    <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-200">
                        <div className="w-14 h-14 mx-auto rounded-full bg-red-50 flex items-center justify-center mb-5">
                            <span className="text-2xl">⚡</span>
                        </div>

                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                            Fast Response
                        </h3>

                        <p className="text-sm text-gray-600 leading-6">
                            Get quick assistance for urgent home service needs.
                        </p>
                    </div>

                    {/* Verified Technicians */}
                    <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-200">
                        <div className="w-14 h-14 mx-auto rounded-full bg-red-50 flex items-center justify-center mb-5">
                            <span className="text-2xl">🛠️</span>
                        </div>

                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                            Verified Technicians
                        </h3>

                        <p className="text-sm text-gray-600 leading-6">
                            Connect with skilled technicians for your home service needs.
                        </p>
                    </div>

                    {/* Nearest Technician */}
                    <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-200">
                        <div className="w-14 h-14 mx-auto rounded-full bg-red-50 flex items-center justify-center mb-5">
                            <span className="text-2xl">📍</span>
                        </div>

                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                            Nearest Technician
                        </h3>

                        <p className="text-sm text-gray-600 leading-6">
                            Requests can be assigned to available technicians nearby.
                        </p>
                    </div>

                    {/* Available 24/7 */}
                    <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-200">
                        <div className="w-14 h-14 mx-auto rounded-full bg-red-50 flex items-center justify-center mb-5">
                            <span className="text-2xl">🕐</span>
                        </div>

                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                            Available 24/7
                        </h3>

                        <p className="text-sm text-gray-600 leading-6">
                            Emergency service support is available whenever you need it.
                        </p>
                    </div>

                </div>
            </section>
            <section className="py-16 px-12 bg-white">
                <div className="text-center mb-12">
                    <p className="text-red-600 text-xl font-semibold">
                        HOW IT WORKS
                    </p>

                    <h2 className="text-3xl font-bold text-slate-900 mt-2">
                        How Our Emergency Service Works
                    </h2>

                    <p className="text-slate-600 mt-3">
                        Get the help you need in four simple steps.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

                    {/* Step 1 */}
                    <div className="text-center">
                        <div className="w-14 h-14 mx-auto rounded-full bg-red-50 flex items-center justify-center mb-5">
                            <span className="text-xl font-bold text-red-600">1</span>
                        </div>

                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                            Request a Service
                        </h3>

                        <p className="text-sm text-gray-600 leading-6">
                            Choose the emergency service you need for your home.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="text-center">
                        <div className="w-14 h-14 mx-auto rounded-full bg-red-50 flex items-center justify-center mb-5">
                            <span className="text-xl font-bold text-red-600">2</span>
                        </div>

                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                            Technician Assigned
                        </h3>

                        <p className="text-sm text-gray-600 leading-6">
                            An available technician is assigned to your service request.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="text-center">
                        <div className="w-14 h-14 mx-auto rounded-full bg-red-50 flex items-center justify-center mb-5">
                            <span className="text-xl font-bold text-red-600">3</span>
                        </div>

                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                            Track Your Service
                        </h3>

                        <p className="text-sm text-gray-600 leading-6">
                            Check your service status and technician progress.
                        </p>
                    </div>

                    {/* Step 4 */}
                    <div className="text-center">
                        <div className="w-14 h-14 mx-auto rounded-full bg-red-50 flex items-center justify-center mb-5">
                            <span className="text-xl font-bold text-red-600">4</span>
                        </div>

                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                            Service Completed
                        </h3>

                        <p className="text-sm text-gray-600 leading-6">
                            Your technician completes the requested home service.
                        </p>
                    </div>

                </div>
            </section>
            <section>
                <div className="text-center p-4 flex flex-col items-center justify-center mx-auto  bg-gray-50">
                    <h1 className='text-3xl font-bold text-slate-900 mt-2'>Need Emergency Help right now </h1>
                    <p className="text-sm text-gray-600 leading-6">Request a service and get the available help right now</p>
                    <button className="px-5 py-2.5 flex gap-2 justify-center items-center bg-blue-800 text-white rounded-lg font-medium hover:bg-blue-900 transition mt-4">Request Emergency Help < FaArrowRightLong className='text-center mt-1' /></button>
                </div>
            </section>
        </div>
    )
}

export default Home
