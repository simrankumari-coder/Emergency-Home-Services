import React from "react";
import { Link } from "react-router";
import { useState, useEffect } from "react";
const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState(second)

    useEffect(() => {

    }, [])


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
                <form className="mt-8 space-y-5">

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
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-slate-900 mb-2">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            placeholder="Confirm your password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        />
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