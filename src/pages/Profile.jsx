import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaClipboardList, FaCircleCheck } from "react-icons/fa6";
import { Navigate, useNavigate } from "react-router";

const Profile = ({ isLogin, setIsLogin }) => {
    const navigate = useNavigate();
    const storedRequest = localStorage.getItem("storeRequest")
    let serviceRequests = storedRequest ? JSON.parse(storedRequest) : [];

    const userInfo = localStorage.getItem("userInfo")
    const user = userInfo ? JSON.parse(userInfo) : {}

    localStorage.getItem("isLoggedIn")


    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn")
        setIsLogin(false)
        navigate("/login")
    }

    const handleDeleteAccount = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete your account ?")

        if (confirmDelete) {
            localStorage.removeItem("isLoggedIn")
            localStorage.removeItem("userInfo")
            localStorage.removeItem("storeRequest")
            setIsLogin(false)
            navigate("/signup")

        }
    }

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

                            <div className="truncate">
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
                                Services Requested
                            </p>

                            <p className="text-2xl font-bold text-slate-900 mt-1">
                                {serviceRequests.length}
                            </p>
                        </div>

                    </div>
                </div>

                {/* mt requests */}
                <div className="max-w-4xl mx-auto mt-6">
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-slate-900">
                            My Service Requests
                        </h2>

                        <div className="mt-5 space-y-4">
                            {serviceRequests.map((request, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-xl p-4"
                                >
                                    <h3 className="font-semibold text-slate-900">
                                        {request.service}
                                    </h3>

                                    <p className="text-sm text-gray-600 mt-1">
                                        Priority: {request.emergencyLevel}
                                    </p>

                                    <p className="text-sm text-gray-600">
                                        Problem: {request.problem}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Logout */}
                {/* Account Actions */}
                <div className="max-w-4xl mx-auto mt-6">
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

                        <h2 className="text-xl font-semibold text-slate-900">
                            Account Actions
                        </h2>

                        <button onClick={handleLogout}
                            className="mt-5 px-5 py-2.5 border border-gray-300 rounded-lg
                 text-slate-700 font-medium hover:bg-gray-100 transition"
                        >
                            Logout
                        </button>

                        {/* Danger Zone */}
                        <div className="mt-6 pt-5 border-t border-gray-200">
                            <h3 className="font-semibold text-red-600">
                                Danger Zone
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                                Delete your account and all saved information.
                            </p>

                            <button onClick={handleDeleteAccount}
                                className="mt-4 px-5 py-2.5 bg-red-600 text-white
                   rounded-lg font-medium hover:bg-red-700 transition"
                            >
                                Delete Account
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;
