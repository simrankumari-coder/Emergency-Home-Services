import React from "react";

const EmergencyRequest = () => {
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

                        <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-600 outline-none focus:border-blue-500">
                            <option>Select a service</option>
                            <option>Plumbing</option>
                            <option>Electrical</option>
                            <option>AC Repair</option>
                            <option>Appliance Repair</option>
                            <option>Locksmith</option>
                            <option>Home Repair</option>
                            <option>Glass & Window Repair</option>
                            <option>Gas & Stove Service</option>
                            <option>Water Heater Repair</option>
                            <option>Emergency Cleaning</option>
                        </select>
                    </div>

                    {/* Problem */}
                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-slate-800 mb-2">
                            Describe the Problem
                        </label>

                        <textarea
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

                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-800 mb-2">
                                Phone Number
                            </label>

                            <input
                                type="tel"
                                placeholder="Enter phone number"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                            />
                        </div>

                    </div>

                    {/* Address */}
                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-slate-800 mb-2">
                            Service Address
                        </label>

                        <input
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
                                <input
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
                                <input
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
                    <button
                        type="button"
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