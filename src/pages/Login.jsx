import React from "react";
import { Link } from "react-router";
import { useState } from "react";
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const userInfo = localStorage.getItem("userInfo")
    const user = JSON.parse(userInfo)

    const handleClick = (e) => {
        e.preventDefault();

        if (email === "" && password === "") {
            return;
        }
        console.log("continue login")
    }
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

                {/* Heading */}
                <div className="text-center">
                    <p className="text-blue-600 font-semibold text-sm tracking-wide">
                        WELCOME BACK
                    </p>

                    <h1 className="text-3xl font-bold text-slate-900 mt-2">
                        Login to EHS
                    </h1>

                    <p className="text-gray-600 mt-2 text-sm">
                        Access your emergency service requests
                    </p>
                </div>

                {/* Form */}
                <form className="mt-8 space-y-5" onSubmit={handleClick}>

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
                        {(email.length > 0 && user.email !== email) && <p>Email are not correct</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-slate-900 mb-2">
                            Password
                        </label>

                        <input value={password} onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        />
                        {(password.length > 0 && user.password !== password) && <p>Password didn't match</p>}
                    </div>

                    {/* Forgot Password */}
                    <div className="text-right">
                        <button
                            type="button"
                            className="text-sm text-blue-600 hover:text-blue-700"
                        >
                            Forgot Password?
                        </button>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition"
                    >
                        Login →
                    </button>

                </form>

                {/* Sign Up */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                        className="text-blue-600 font-semibold hover:text-blue-700"
                    >
                        Sign Up
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default Login;