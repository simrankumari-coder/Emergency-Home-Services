import React from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { useState } from "react";
const Login = ({ setIsLogin }) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginError, setLoginError] = useState(false)

    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]")
    const user = storedUsers.find((item) => item.email === email.trim().toLowerCase())
    const handleClick = (e) => {
        e.preventDefault();
        if (email.trim() === "" || password.length === 0) {
            setLoginError(true)
            return
        }
        if (storedUsers.length === 0) {
            setLoginError(true)
            return;
        }
        if (!user || user.password !== password) {
            return
        }


        localStorage.setItem("loggedInUser", JSON.stringify(user))
        localStorage.setItem("isLoggedIn", "true")

        setIsLogin(true)

        setEmail("")
        setPassword("")
        if (user.role === "Technician") {
            navigate("/technician-dashboard")

        } else {

            navigate("/profile")
        }
    }
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">


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

                <form className="mt-8 space-y-5" onSubmit={handleClick}>


                    <div>
                        <label className="block text-sm font-medium text-slate-900 mb-2">
                            Email Address
                        </label>

                        <input value={email} onChange={(e) => {
                            setEmail(e.target.value)
                            setLoginError(false)
                        }}
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        />
                        {email.length > 0 && !user && (<p className="text-sm text-red-500 mt-1">Email is not correct</p>)}
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-slate-900 mb-2">
                            Password
                        </label>

                        <input value={password} onChange={(e) => {
                            setPassword(e.target.value)
                            setLoginError(false)
                        }}
                            type="password"
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        />
                        {user && password.length > 0 && user.password !== password && (<p className="text-sm text-red-500 mt-1">Password didn't match</p>)}
                    </div>


                    <div className="text-right">
                        <button
                            type="button"
                            className="text-sm text-blue-600 hover:text-blue-700"
                        >
                            Forgot Password?
                        </button>
                    </div>


                    <button
                        type="submit"
                        className="w-full bg-blue-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition"
                    >
                        Login →
                    </button>
                    {loginError && <p className="text-sm text-red-500 mt-1">Please Sign Up First</p>}
                </form>


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