import React from "react";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
const Signup = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")


    const handleClick = (e) => {
        e.preventDefault()
        if (name === "" || email === "" || password === "" || phone === "" || confirmPass === "") {
            return;
        } else {

            const signUpData = {
                name: name,
                email: email,
                phone: phone,
                password: password

            }


            localStorage.setItem("userInfo", JSON.stringify(signUpData))
            setName("")
            setEmail("")
            setPhone("")
            setPassword("")
            setConfirmPass("")
        }
        navigate("/login")

    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

                {/* Heading */}
                <div className="text-center">
                    <p className="text-blue-600 font-semibold text-sm tracking-wide">
                        GET STARTED
                    </p>

                    <h1 className="text-3xl font-bold text-slate-900 mt-2">
                        Create Your EHS Account
                    </h1>

                    <p className="text-gray-600 mt-2 text-sm">
                        Create an account to manage your emergency services
                    </p>
                </div>

                {/* Form */}
                <form className="mt-8 space-y-5" onSubmit={handleClick}>

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-slate-900 mb-2">
                            Full Name
                        </label>

                        <input value={name} onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        />
                        {(name.length > 0 && name.length < 2) && <p className="text-sm text-red-500 mt-1">Username can't be less than two characters</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-slate-900 mb-2">
                            Email Address
                        </label>

                        <input value={email} onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        />
                        {(email.length > 0 && !emailRegex.test(email)) && <p className="text-sm text-red-500 mt-1">Email should contain @ and . characters</p>}
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-medium text-slate-900 mb-2">
                            Phone Number
                        </label>

                        <input value={phone} onChange={(e) => setPhone(e.target.value)}
                            type="tel"
                            placeholder="Enter your phone number"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        />
                        {(phone > 0 && phone.length !== 10) && <p className="text-sm text-red-500 mt-1">Phone number should be correct</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-slate-900 mb-2">
                            Password
                        </label>

                        <input value={password} onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Create a password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        />
                        {(password.length > 0 && password.length > 6) && <p className="text-sm text-red-500 mt-1">Password should be contain six characters</p>}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-slate-900 mb-2">
                            Confirm Password
                        </label>

                        <input value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)}
                            type="password"
                            placeholder="Confirm your password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        />
                        {(confirmPass.length > 0 && confirmPass.length !== password.length) && <p className="text-sm text-red-500 mt-1">Password didn't match</p>}
                    </div>

                    {/* Sign Up */}
                    <button
                        type="submit"
                        className="w-full bg-blue-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition"
                    >
                        Create Account →
                    </button>

                </form>

                {/* Login */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-blue-600 font-semibold hover:text-blue-700"
                    >
                        Login
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default Signup;