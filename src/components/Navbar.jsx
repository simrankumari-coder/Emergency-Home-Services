import React from 'react'
import { NavLink } from 'react-router'
import { FcHome } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from 'react';
const Navbar = () => {
    const [menu, setMenu] = useState(false)
    return (
        <nav className='flex justify-between bg-blue-800 px-4 py-4 text-white text-[15px] font-medium '>
            <div className='flex gap-2'>
                <FcHome className="text-xl" />
                <span>EHS</span>
            </div>
            <div className="flex  gap-10">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/request-service">Emergency Request</NavLink>
                <NavLink to="/track-service">Track Service</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </div>
            {/* {menu ? <button onClick={setMenu(!menu)} ><GiHamburgerMenu /></button> : <button onClick={setMenu(false)}><ImCross /></button>} */}
        </nav>
    )
}

export default Navbar
