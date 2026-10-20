import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = ({ isLogin, setIsLogin }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const loggedUser = JSON.parse(localStorage.getItem("loggedInUser") || "null")

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");
    setIsLogin(false);
    setMenu(false);
    navigate("/login");
  };


  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-blue-200 font-semibold"
      : "text-white hover:text-blue-200";

  return (
    <nav className="flex justify-between bg-blue-800 px-4 py-4 text-white">

      <div className="flex items-center gap-1">
        <FaHome className="text-xl" />
        <span className="font-bold text-xl">EHS</span>
      </div>

      <div className="hidden md:flex items-center gap-6">

        <NavLink to="/" className={linkStyle}>
          Home
        </NavLink>
        {isLogin && loggedUser?.role === "Technician" ? (
          <>
            <NavLink to="/technician-dashboard">Technician Dashboard</NavLink>
            <NavLink to="/profile" className={linkStyle}>
              Profile
            </NavLink>
          </>
        ) : (
          <>

            <NavLink to="/services" className={linkStyle}>
              Services
            </NavLink>

            <NavLink to="/request-service" className={linkStyle}>
              Emergency Request
            </NavLink>
            {isLogin && (

              <NavLink to="/track-service" className={linkStyle}>
                Track Service
              </NavLink>)}
            {isLogin && (
              <NavLink to="/profile" className={linkStyle}>
                Profile
              </NavLink>
            )}
          </>
        )}


        <NavLink to="/about" className={linkStyle}>
          About
        </NavLink>

        {isLogin ? (
          <>
            <span>Hi, {loggedUser?.name?.split(" ")[0] || "User"}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login" className={linkStyle}>
              Login
            </NavLink>

            <NavLink to="/signup" className={linkStyle}>
              Sign Up
            </NavLink>
          </>
        )}
      </div>

      <button
        className="md:hidden"
        onClick={() => setMenu(!menu)}
      >
        {menu ? <ImCross /> : <GiHamburgerMenu />}
      </button>

      {menu && (
        <div className="absolute right-4 top-16 flex flex-col gap-4 bg-blue-800 p-5 md:hidden">

          <NavLink to="/" onClick={() => setMenu(false)}>
            Home
          </NavLink>
          {isLogin && loggedUser?.role === "Technician" ? (
            <>
              <NavLink to="/technician-dashboard" onClick={() => setMenu(false)}>Technician Dashboard</NavLink>
              <NavLink to="/profile" onClick={() => setMenu(false)} >
                Profile
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/services" onClick={() => setMenu(false)}>
                Services
              </NavLink>

              <NavLink to="/request-service" onClick={() => setMenu(false)}>
                Emergency Request
              </NavLink>
              {isLogin && (
                <>

                  <NavLink to="/track-service" onClick={() => setMenu(false)}>
                    Track Service
                  </NavLink>
                  <NavLink to="/profile" onClick={() => setMenu(false)} >
                    Profile
                  </NavLink>
                </>
              )}
            </>

          )}



          <NavLink to="/about" onClick={() => setMenu(false)}>
            About
          </NavLink>

          {isLogin ? (
            <>
              <span>
                Hi, {loggedUser?.name?.split(" ")[0] || "User"}
              </span>


              <button onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" onClick={() => setMenu(false)}>
                Login
              </NavLink>

              <NavLink to="/signup" onClick={() => setMenu(false)}>
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;