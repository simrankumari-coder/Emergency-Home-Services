import React from 'react'
import { FaEnvelope } from "react-icons/fa";
const Footer = () => {
    return (

        <footer className=' text-white bg-gray-950 p-4'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-2'>
                <section>
                    <h1 className='text-xl'>EHS</h1>
                    <h2 className='text-gray-200 hover:text-blue-400 transition text-sm' >Emergency Home Services</h2>
                    <p className='text-gray-200 hover:text-blue-400 transition text-[12px]'>Quick and reliable help for urgent home needs</p>
                </section>
                <section>
                    <h1 className='text-gray-100 text-lg font-semibold uppercase tracking-wide mb-4'>Quick Links</h1>
                    <ul>
                        <li className='text-gray-200 hover:text-blue-400 transition text-sm'>Home</li>
                        <li className='text-gray-200 hover:text-blue-400 transition text-sm'>Services</li>
                        <li className='text-gray-200 hover:text-blue-400 transition text-sm'>Emergency Request</li>
                        <li className='text-gray-200 hover:text-blue-400 transition text-sm'>Track Service</li>
                        <li className='text-gray-200 hover:text-blue-400 transition text-sm'>About</li>
                    </ul>
                </section>
                <section>
                    <h1 className='text-gray-100 text-lg font-semibold uppercase tracking-wide mb-4'>Services</h1>
                    <ul>
                        <li className='text-gray-200 hover:text-blue-400 transition text-sm'>Plumbing</li>
                        <li className='text-gray-200 hover:text-blue-400 transition text-sm'>Electrical</li>
                        <li className='text-gray-200 hover:text-blue-400 transition text-sm'>AC Repair</li>
                        <li className='text-gray-200 hover:text-blue-400 transition text-sm'>Appliance Repair</li>
                        <li className='text-gray-200 hover:text-blue-400 transition text-sm'>Locksmith</li>
                    </ul>
                </section>
                <section>
                    <h1 className='text-gray-100 text-lg font-semibold uppercase tracking-wide mb-4'>Contact</h1>
                    <ul>
                        <li className='text-gray-200 hover:text-blue-400 transition text-sm'>24/7 Emergency Support</li>
                        <li className='text-gray-200 hover:text-blue-400 transition text-sm'>+ 91 XXXXX XXXXX</li>
                        <li > <p className='flex gap-1'>
                            <a className='text-gray-300 flex gap-1 text-sm' href='https://mail.google.com/mail/?view=cm&fs=1&to=support@hometownhub.com' target='_blank' rel='noopener noreferer'>< FaEnvelope className='text-sm mt-1 ' /><span className=''>support@ehs.com</span></a></p></li>
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
