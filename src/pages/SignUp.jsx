import React from "react";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import technicians from "../data/technician";
const Signup = ({ }) => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [role, setRole] = useState("Customer")
    const [dob, setDob] = useState("")
    const [error, setError] = useState("")
    const [technicianName, setTechnicianName] = useState("")


    const handleClick = (e) => {
        e.preventDefault()

        setError("")
        const isValid = name.trim().length < 2 ||
            !emailRegex.test(email) ||
            password.length < 6 ||
            phone.length !== 10 ||
            confirmPass !== password

        if (isValid) {

            setError("Please enter a valid details")

            return;
        }

        const storedUsers = JSON.parse(localStorage.getItem("users") || "[]")
        const alreadyExists = storedUsers.some((user) => user.email.toLowerCase() === email.trim().toLowerCase())

        if (alreadyExists) {
            setError("An Account with this email already exits")
            return
        }

        let matchedTechnician = null;
        if (role === "Technician") {
            matchedTechnician = technicians.find((item) => item.name === technicianName)
            if (!matchedTechnician) {
                setError("Technician name not found in the technician list. Please use the registered technician name.")
                return;
            }

        }

        const signUpData = {
            id: Date.now(),
            name: name.trim(),
            email: email.trim().toLowerCase(),
            phone,
            password,
            dob,
            role,
            technicianId: matchedTechnician ? matchedTechnician.id : null

        }


        storedUsers.push(signUpData)
        localStorage.setItem("users", JSON.stringify(storedUsers))
        setName("")
        setEmail("")
        setPhone("")
        setPassword("")
        setDob("")
        setConfirmPass("")


        navigate("/login")

    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">


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

                <form className="mt-8 space-y-5" onSubmit={handleClick}>


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


                    <div>
                        <label className="block text-sm font-medium text-slate-900 mb-2">
                            Phone Number
                        </label>

                        <input value={phone} onChange={(e) => setPhone(e.target.value)}
                            type="tel"
                            placeholder="Enter your phone number"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        />
                        {(phone.length > 0 && phone.length !== 10) && <p className="text-sm text-red-500 mt-1">Phone number should be correct</p>}
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-slate-900 mb-2">
                            Date Of Birth
                        </label>
                        <input value={dob} onChange={(e) => setDob(e.target.value)}
                            type="date"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-900 mb-2">Register As</label>
                        <select className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600" value={role} onChange={(e) => { setRole(e.target.value); setTechnicianName(""); }}>
                            <option value="Customer">Customer</option>
                            <option value="Technician">Technician</option>
                        </select>
                    </div>
                    {
                        role === "Technician" && (
                            <div>

                                <label className="block text-sm font-medium text-slate-900 mb-2">Select</label>
                                <select value={technicianName} onChange={(e) => setTechnicianName(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600" >

                                    <option value="">Select Technician Name</option>
                                    {technicians.map((item) =>
                                        <option key={item.id} value={item.name}>{item.name}</option>)}
                                </select>
                            </div>
                        )
                    }

                    <div>
                        <label className="block text-sm font-medium text-slate-900 mb-2">
                            Password
                        </label>

                        <input value={password} onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Create a password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        />
                        {(password.length > 0 && password.length < 6) && <p className="text-sm text-red-500 mt-1">Password should be contain six characters</p>}
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-slate-900 mb-2">
                            Confirm Password
                        </label>

                        <input value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)}
                            type="password"
                            placeholder="Confirm your password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        />
                        {confirmPass.length > 0 && confirmPass !== password && (<p className="text-sm text-red-500 mt-1">Password didn't match</p>)}
                    </div>
                    {error && (
                        <p className="text-red-500 text-sm text-center">{error}</p>)}


                    <button
                        type="submit"
                        disabled={
                            !name.trim() ||
                            name.trim().length < 2 ||
                            !email ||
                            !emailRegex.test(email) ||
                            !phone ||
                            password.length < 6 ||
                            phone.length !== 10 ||
                            !confirmPass ||
                            confirmPass !== password ||
                            !role
                        }
                        className="w-full bg-blue-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition"
                    >
                        Create Account →
                    </button>

                </form>


                <p className="text-center text-sm text-gray-600 mt-6"

                >
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-blue-600 font-semibold hover:text-blue-700"
                    >
                        Login
                    </Link>
                </p>

            </div>
        </div >
    );
};

export default Signup;