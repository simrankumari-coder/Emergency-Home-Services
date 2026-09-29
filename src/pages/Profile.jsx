import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaClipboardList, FaCircleCheck } from "react-icons/fa6";

const Profile = () => {
    const userInfo = localStorage.getItem("userInfo")
    const user = JSON.parse(userInfo)
    console.log(user)
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6">

            {/* Heading */}
            <div className="max-w-4xl mx-auto mb-10">
                <p className="text-blue-600 font-semibold text-sm tracking-wide">
                    MY PROFILE
                </p>

                <h1 className="text-4xl font-bold text-slate-900 mt-2">
                    Your Account
                </h1>

                <p className="text-gray-600 mt-3">
                    Manage your account and view your emergency service activity.
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-5">

                {/* Personal Information */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

                    <h2 className="text-2xl font-bold text-slate-900 mb-6">
                        Personal Information
                    </h2>

                    <div className="space-y-5">

                        <div className="flex items-center gap-4">
                            <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center">
                                <FaUser className="text-blue-600" />
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">Full Name</p>
                                <p className="font-semibold text-slate-900">
                                    {user.name}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center">
                                <FaEnvelope className="text-blue-600" />
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">Email Address</p>
                                <p className="font-semibold text-slate-900">
                                    {user.email}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center">
                                <FaPhone className="text-blue-600" />
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">Phone Number</p>
                                <p className="font-semibold text-slate-900">
                                    {user.phone}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>



                {/* Service Summary */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

                    <h2 className="text-2xl font-bold text-slate-900 mb-5">
                        Account Overview
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">



                        <div className="bg-gray-50 rounded-xl p-5">
                            <FaClipboardList className="text-blue-600 text-xl" />

                            <p className="text-sm text-gray-500 mt-3">
                                Member Since
                            </p>

                            <p className="text-2xl font-bold text-slate-900 mt-1">
                                {user.dob}
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-5">
                            <FaCircleCheck className="text-green-500 text-xl" />

                            <p className="text-sm text-gray-500 mt-3">
                                Completed Services
                            </p>

                            <p className="text-2xl font-bold text-slate-900 mt-1">
                                3
                            </p>
                        </div>

                    </div>
                </div>

                {/* Logout */}
                <div className="flex justify-end">
                    <button className="px-6 py-3 border border-red-300 text-red-600 rounded-lg font-medium hover:bg-red-50 transition">
                        Logout
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Profile;
