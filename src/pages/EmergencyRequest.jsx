import React from "react";
import { useState } from "react";
import technicians from "../data/technician";
import { useNavigate } from "react-router";

const EmergencyRequest = () => {
    const [service, setService] = useState("")
    const [problem, setProblem] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [emergencyLevel, setEmergencyLevel] = useState("")
    const navigate = useNavigate()
    const handleClick = () => {
        console.log(service, problem, name, phone, address, emergencyLevel)
        if (service === "" || problem === "" || name === "" || phone === "" || address === "" || emergencyLevel === "") {
            return
        } else {
            const emergencyRequest = {
                service: service,
                problem: problem,
                name: name,
                phone: phone,
                address: address,
                emergencyLevel: emergencyLevel
            }
            console.log(technicians.find((item) => {
                return service === item.service && item.available === true
            }))
            const technician = technicians.find((item) => {
                return service === item.service && item.available === true
            })
            const finalResult = { ...emergencyRequest, technician }
            localStorage.setItem("finalResult", JSON.stringify(finalResult))
            setService("")
            setProblem("")
            setName("")
            setPhone("")
            setAddress("")
            setEmergencyLevel("")
            navigate("/track-service")
        }
    }
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-4xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-10">
                    <p className="text-blue-600 font-semibold text-sm tracking-wide">
                        EMERGENCY REQUEST
                    </p>

                    <h1 className="text-4xl font-bold text-slate-900 mt-2">
                        Request Emergency Service
                    </h1>

                    <p className="text-gray-600 mt-3">
                        Tell us what you need and we'll help you get the right
                        technician quickly.
                    </p>
                </div>

                {/* Form */}
                <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 md:p-10">

                    {/* Service */}
                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-slate-800 mb-2">
                            Service Type
                        </label>

                        <select value={service} onChange={(e) => setService(e.target.value)} className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-600 outline-none focus:border-blue-500">
                            <option value={""}> Select a service</option>
                            <option value={"Plumbing"}> Plumbing</option>
                            <option value={"Electrical"}> Electrical</option>
                            <option value={"AC Repair"}> AC Repair</option>
                            <option value={"Appliance Repair"}> Appliance Repair</option>
                            <option value={"Locksmith"}> Locksmith</option>
                            <option value={"Home Repair"}> Home Repair</option>
                            <option value={"Glass & Window Repair"}> Glass & Window Repair</option>
                            <option value={"Gas & Stove Service"}> Gas & Stove Service</option>
                            <option value={"Water Heater Repair"}> Water Heater Repair</option>
                            <option value={"Emergency Cleaning"}> Emergency Cleaning</option>
                        </select>

                    </div>

                    {/* Problem */}
                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-slate-800 mb-2">
                            Describe the Problem
                        </label>

                        <textarea value={problem} onChange={(e) => setProblem(e.target.value)}
                            rows="4"
                            placeholder="Briefly describe what happened..."
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none resize-none focus:border-blue-500"
                        ></textarea>
                    </div>

                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

                        <div>
                            <label className="block text-sm font-semibold text-slate-800 mb-2">
                                Your Name
                            </label>

                            <input value={name} onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Enter your name"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                            />
                            {(name.length > 0 && name.length < 2) && <p className="text-
                            sm text-red-500 mt-1">Username can't be less than two characters</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-800 mb-2">
                                Phone Number
                            </label>

                            <input value={phone} onChange={(e) => setPhone(e.target.value)}
                                type="tel"
                                placeholder="Enter phone number"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                            />
                            {(phone > 0 && phone.length !== 10) && <p className="text-sm text-red-500 mt-1">Phone number should be correct</p>}
                        </div>

                    </div>

                    {/* Address */}
                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-slate-800 mb-2">
                            Service Address
                        </label>

                        <input value={address} onChange={(e) => setAddress(e.target.value)}
                            type="text"
                            placeholder="Enter your complete address"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Emergency Level */}
                    <div className="mb-8">
                        <label className="block text-sm font-semibold text-slate-800 mb-3">
                            Emergency Level
                        </label>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <label className="border border-gray-300 rounded-xl p-4 cursor-pointer hover:border-blue-500">
                                <input value="Emergency" onChange={(e) => setEmergencyLevel(e.target.value)}
                                    type="radio"
                                    name="priority"
                                    className="mr-3"
                                />
                                <span className="font-medium text-slate-800">
                                    Emergency
                                </span>
                                <p className="text-sm text-gray-500 mt-1 ml-6">
                                    Need help as soon as possible
                                </p>
                            </label>

                            <label className="border border-gray-300 rounded-xl p-4 cursor-pointer hover:border-blue-500">
                                <input value="Urgent" onChange={(e) => setEmergencyLevel(e.target.value)}
                                    type="radio"
                                    name="priority"
                                    className="mr-3"
                                />
                                <span className="font-medium text-slate-800">
                                    Urgent
                                </span>
                                <p className="text-sm text-gray-500 mt-1 ml-6">
                                    Requires quick assistance
                                </p>
                            </label>

                        </div>
                    </div>

                    {/* Button */}
                    <button onClick={handleClick}
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition"
                    >
                        Find a Technician →
                    </button>

                </div>
            </div>
        </div>
    );
};

export default EmergencyRequest;