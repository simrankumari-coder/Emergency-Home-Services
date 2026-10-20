import React from "react";
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaClipboardList,
    FaCircleCheck,
} from "react-icons/fa6";
import { useNavigate } from "react-router";

const Profile = ({ setIsLogin }) => {
    const navigate = useNavigate();


    const user = JSON.parse(
        localStorage.getItem("loggedInUser") || "null"
    );

    const storedRequest = localStorage.getItem("storeRequest");
    const serviceRequests = storedRequest
        ? JSON.parse(storedRequest)
        : [];

    const myRequests =
        user?.role === "Customer"
            ? serviceRequests.filter(
                (request) =>
                    request.email?.toLowerCase() === user.email?.toLowerCase()
            )
            : [];

    const handleLogout = () => {
        localStorage.removeItem("loggedInUser");
        localStorage.removeItem("isLoggedIn");
        setIsLogin(false);
        navigate("/login");
    };

    const handleDeleteAccount = () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete your account?"
        );

        if (confirmDelete) {
            const storedUsers = JSON.parse(
                localStorage.getItem("users") || "[]"
            );

            const updatedUsers = storedUsers.filter(
                (item) => item.email !== user.email
            );

            localStorage.setItem("users", JSON.stringify(updatedUsers));

            localStorage.removeItem("loggedInUser");
            localStorage.removeItem("isLoggedIn");

            setIsLogin(false);
            navigate("/signup");
        }
    };

    if (!user) {
        return (
            <div className="min-h-screen p-6 text-center">
                <p>Please log in to view your profile.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6">

            <div className="max-w-4xl mx-auto mb-10">
                <p className="text-blue-600 font-semibold text-sm tracking-wide">
                    MY PROFILE
                </p>

                <h1 className="text-4xl font-bold text-slate-900 mt-2">
                    Your Account
                </h1>

                <p className="text-gray-600 mt-3">
                    Manage your account information.
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-5">


                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">
                        Personal Information
                    </h2>

                    <div className="space-y-5">

                        <div className="flex items-center gap-4">
                            <FaUser className="text-blue-600 text-xl" />
                            <div>
                                <p className="text-sm text-gray-500">Full Name</p>
                                <p className="font-semibold">{user.name}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-blue-600 text-xl" />
                            <div>
                                <p className="text-sm text-gray-500">Email Address</p>
                                <p className="font-semibold">{user.email}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <FaPhone className="text-blue-600 text-xl" />
                            <div>
                                <p className="text-sm text-gray-500">Phone Number</p>
                                <p className="font-semibold">{user.phone}</p>
                            </div>
                        </div>

                    </div>
                </div>   <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                    <h2 className="text-2xl font-bold text-slate-900 mb-5">
                        Account Overview
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        <div className="bg-gray-50 rounded-xl p-5">
                            <FaUser className="text-blue-600 text-xl" />
                            <p className="text-sm text-gray-500 mt-3">
                                Account Role
                            </p>
                            <p className="text-xl font-bold mt-1">
                                {user.role}
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-5">
                            <FaClipboardList className="text-blue-600 text-xl" />
                            <p className="text-sm text-gray-500 mt-3">
                                {user.role === "Technician"
                                    ? "Technician ID"
                                    : "Date of Birth"}
                            </p>
                            <p className="text-xl font-bold mt-1">
                                {user.role === "Technician"
                                    ? user.technicianId || "Not assigned"
                                    : user.dob || "Not provided"}
                            </p>
                        </div>

                        {user.role === "Customer" && (
                            <div className="bg-gray-50 rounded-xl p-5">
                                <FaCircleCheck className="text-green-500 text-xl" />
                                <p className="text-sm text-gray-500 mt-3">
                                    Services Requested
                                </p>
                                <p className="text-2xl font-bold mt-1">
                                    {myRequests.length}
                                </p>
                            </div>
                        )}

                    </div>
                </div>


                {user.role === "Customer" && (
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-slate-900">
                            My Service Requests
                        </h2>

                        <div className="mt-5 space-y-4">
                            {myRequests.length === 0 ? (
                                <p className="text-gray-500">
                                    No service requests yet.
                                </p>
                            ) : (
                                myRequests.map((request, index) => (
                                    <div
                                        key={request.id || index}
                                        className="border border-gray-200 rounded-xl p-4"
                                    >
                                        <h3 className="font-semibold text-slate-900">
                                            {request.service}
                                        </h3>

                                        <p className="text-sm text-gray-600 mt-1">
                                            Problem: {request.problem}
                                        </p>

                                        <p className="text-sm text-gray-600">
                                            Status: {request.status}
                                        </p>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                )}


                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                    <h2 className="text-xl font-semibold text-slate-900">
                        Account Actions
                    </h2>

                    <button
                        onClick={handleLogout}
                        className="mt-5 px-5 py-2.5 border border-gray-300 rounded-lg text-slate-700 font-medium hover:bg-gray-100"
                    >
                        Logout
                    </button>

                    <div className="mt-6 pt-5 border-t border-gray-200">
                        <h3 className="font-semibold text-red-600">
                            Danger Zone
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                            Delete your account.
                        </p>

                        <button
                            onClick={handleDeleteAccount}
                            className="mt-4 px-5 py-2.5 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700"
                        >
                            Delete Account
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;