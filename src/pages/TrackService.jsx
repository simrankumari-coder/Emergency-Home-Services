import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLocationDot, FaCircleCheck } from "react-icons/fa6";

const TrackService = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6">

            {/* Page Heading */}
            <div className="text-center mb-10">
                <p className="text-blue-600 font-semibold text-sm tracking-wide">
                    TRACK SERVICE
                </p>

                <h1 className="text-4xl font-bold text-slate-900 mt-2">
                    Track Your Service
                </h1>

                <p className="text-gray-600 mt-3">
                    Check the current status of your emergency service request
                </p>
            </div>

            {/* Request Summary */}
            <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">

                <div className="flex flex-col md:flex-row md:justify-between gap-4">

                    <div className="flex gap-3 items-center">
                        <span className="font-semibold text-slate-900">
                            Request ID:
                        </span>

                        <span className="text-gray-600">
                            #EHS1024
                        </span>
                    </div>

                    <div className="flex gap-3 items-center">
                        <span className="font-semibold text-slate-900">
                            Current Status:
                        </span>

                        <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                            Technician Assigned
                        </span>
                    </div>

                </div>
            </div>

            {/* Service Information */}
            <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mt-5">

                <h2 className="text-2xl font-bold text-slate-900 mb-5">
                    Service Information
                </h2>

                <div className="flex gap-2 items-center mb-3">
                    <span className="font-semibold text-slate-900">
                        Service:
                    </span>

                    <span className="text-gray-600">
                        Plumbing
                    </span>
                </div>

                <div className="text-blue-600 font-semibold text-sm tracking-wide mb-3">
                    EMERGENCY SERVICE
                </div>

                <div className="flex gap-2 items-center">
                    <span className="font-semibold text-slate-900">
                        Estimated Arrival:
                    </span>

                    <span className="text-gray-600">
                        20 min
                    </span>
                </div>

            </div>

            {/* Technician */}
            <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mt-5">

                <h2 className="text-2xl font-bold text-slate-900">
                    Your Technician
                </h2>

                <div className="mt-5">

                    <div className="flex items-center gap-3">

                        <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-xl">
                            <FaUser className="text-blue-600 text-lg" />
                        </div>

                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-semibold text-slate-900">
                                    Raj Kumar
                                </span>

                                <span className="text-gray-600">
                                    ★ 4.8
                                </span>
                            </div>

                            <p className="text-gray-500 text-sm">
                                Plumbing Technician
                            </p>
                        </div>

                    </div>

                    <button className="mt-5 px-5 py-2.5 bg-blue-800 text-white rounded-lg font-medium hover:bg-blue-900 transition">
                        Contact Technician
                    </button>

                </div>

            </div>

            {/* Service Progress */}
            <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mt-5">

                <h2 className="text-2xl font-bold text-slate-900">
                    Service Progress
                </h2>

                <div className="flex flex-col gap-5 mt-6">

                    {/* Completed */}
                    <div className="flex gap-3 items-center">
                        <FaCircleCheck className="text-green-500" />

                        <span className="text-slate-900">
                            Request Received
                        </span>
                    </div>

                    {/* Completed */}
                    <div className="flex gap-3 items-center">
                        <FaCircleCheck className="text-green-500" />

                        <span className="text-slate-900">
                            Technician Assigned
                        </span>
                    </div>

                    {/* Current */}
                    <div className="flex gap-3 items-center">
                        <div className="w-4 h-4 bg-blue-700 rounded-full"></div>

                        <span className="font-medium text-blue-700">
                            Technician On the Way
                        </span>
                    </div>

                    {/* Pending */}
                    <div className="flex gap-3 items-center">
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>

                        <span className="text-gray-400">
                            Service Started
                        </span>
                    </div>

                    {/* Pending */}
                    <div className="flex gap-3 items-center">
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>

                        <span className="text-gray-400">
                            Service Completed
                        </span>
                    </div>

                </div>

            </div>

            {/* Service Location */}
            <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mt-5">

                <h2 className="text-2xl font-bold text-slate-900">
                    Service Location
                </h2>

                <div className="flex gap-4 mt-5 items-center">

                    <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-xl">
                        <FaLocationDot className="text-blue-600 text-lg" />
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900">
                            Your Service Address
                        </h3>

                        <p className="text-sm text-gray-500">
                            Address provided in your service request
                        </p>
                    </div>

                </div>

                {/* Map Placeholder */}
                <div className="h-40 bg-gray-100 rounded-xl mt-5 flex items-center justify-center">
                    <span className="text-gray-400">
                        Map will appear here
                    </span>
                </div>

            </div>

        </div>
    );
};

export default TrackService;