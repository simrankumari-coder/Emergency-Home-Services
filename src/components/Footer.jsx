import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router';
const Footer = () => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser") || "null")
    const isTechnician = loggedUser?.role === "Technician"
    return (

        <footer className=' text-white bg-gray-950 p-4'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-2'>
                <section>
                    <h1 className='text-xl'>EHS</h1>
                    <h2 className='text-gray-200 hover:text-blue-400 transition text-sm' >Emergency Home Services</h2>
                    <p className='text-gray-200 hover:text-blue-400 transition text-[12px]'>Quick and reLinkable help for urgent home needs</p>
                </section>
                <section>
                    <h1 className='text-gray-100 text-lg font-semibold uppercase tracking-wide mb-4'>Quick lis</h1>
                    <ul>
                        <Link to="/" className='text-gray-200 hover:text-blue-400 transition text-sm'>Home</Link>
                        {isTechnician ? (<Link className='text-gray-200 hover:text-blue-400 transition text-sm'>Technician Dashboard</Link>) : (<>
                            <li>
                                <Link to="/services" className='text-gray-200 hover:text-blue-400 transition text-sm'>Services</Link>
                            </li>
                            <li >
                                <Link to="/request-service" className='text-gray-200 hover:text-blue-400 transition text-sm'>Emergency Request</Link>
                            </li>
                            <li >
                                <Link to="/track-service" className='text-gray-200 hover:text-blue-400 transition text-sm'>Track Service</Link>
                            </li>
                        </>)}
                        <li>
                            <Link to="/about" className='text-gray-200 hover:text-blue-400 transition text-sm'>About</Link></li>
                    </ul>
                </section>
                <section>
                    <h1 className='text-gray-100 text-lg font-semibold uppercase tracking-wide mb-4'>Services</h1>
                    <ul>
                        {!isTechnician && (
                            <>
                                <li>
                                    <Link to="/services" className='text-gray-200 hover:text-blue-400 transition text-sm'>Plumbing</Link>
                                </li>
                                <li>
                                    <Link to="/services" className='text-gray-200 hover:text-blue-400 transition text-sm'>Electrical</Link>
                                </li>
                                <li>
                                    <Link to="/services" className='text-gray-200 hover:text-blue-400 transition text-sm'>AC Repair</Link>
                                </li>
                                <li>
                                    <Link to="/services" className='text-gray-200 hover:text-blue-400 transition text-sm'>AppLinkance Repair</Link>
                                </li>
                                <li>
                                    <Link to="/services" className='text-gray-200 hover:text-blue-400 transition text-sm'>Locksmith</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </section>
                <section>
                    <h1 className='text-gray-100 text-lg font-semibold uppercase tracking-wide mb-4'>Contact</h1>
                    <ul>
                        <Link className='text-gray-200 hover:text-blue-400 transition text-sm'>24/7 Emergency Support</Link>
                        <Link className='text-gray-200 hover:text-blue-400 transition text-sm'>+ 91 XXXXX XXXXX</Link>
                        <p className='flex gap-1'>
                            <a className='text-gray-300 flex gap-1 text-sm' href='https://mail.google.com/mail/?view=cm&fs=1&to=support@hometownhub.com' target='_blank' rel='noopener noreferer'>< FaEnvelope className='text-sm mt-1 ' /><span className=''>support@ehs.com</span></a></p>
                    </ul>
                </section>
            </div>
            <div className=' border-t border-slate-700 mt-10 pt-6 text-center flex justify-center items-center text-sm text-gray-400'>
                &copy; {new Date().getFullYear()} EHS. All rights reserved.
            </div>
        </footer>

    )
}

export default Footer
