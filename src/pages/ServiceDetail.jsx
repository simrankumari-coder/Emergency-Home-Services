import React from "react";
import { useParams } from "react-router";
import servicesData from "../data/services";

const ServiceDetails = () => {
    const { id } = useParams();

    const service = servicesData.find((item) => {
        return item.id === Number(id);
    });

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h2 className="text-2xl font-semibold text-slate-900">
                    Service not found
                </h2>
            </div>
        );
    }

    const Icon = service.icon;

    return (
        <div className="bg-gray-50 min-h-screen py-16 px-6">

            {/* Main Details Card */}
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">

                <div className="grid grid-cols-1 lg:grid-cols-2">

                    {/* Left Side */}
                    <div className="p-10 lg:p-14">

                        <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                            <Icon className="text-3xl text-blue-600" />
                        </div>

                        <p className="text-red-600 font-semibold text-sm tracking-wide">
                            EMERGENCY SERVICE
                        </p>

                        <h1 className="text-4xl font-bold text-slate-900 mt-2">
                            {service.name}
                        </h1>

                        <p className="text-gray-600 leading-7 mt-5">
                            {service.description}
                        </p>

                        {/* Service Information */}
                        <div className="mt-8 space-y-4">

                            <div className="flex justify-between border-b border-gray-100 pb-3">
                                <span className="text-gray-500">
                                    Response Time
                                </span>
                                <span className="font-medium text-slate-900">
                                    {service.responseTime}
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-gray-100 pb-3">
                                <span className="text-gray-500">
                                    Availability
                                </span>
                                <span className="font-medium text-green-600">
                                    {service.availability}
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-gray-100 pb-3">
                                <span className="text-gray-500">
                                    Technician
                                </span>
                                <span className="font-medium text-slate-900">
                                    {service.technicianAssignment}
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-500">
                                    Rating
                                </span>
                                <span className="font-medium text-slate-900">
                                    ⭐ {service.rating}
                                </span>
                            </div>

                        </div>

                    </div>

                    {/* Right Side */}
                    <div className="bg-blue-50 p-10 lg:p-14 flex flex-col justify-center">

                        <p className="text-sm text-gray-500">
                            Starting from
                        </p>

                        <h2 className="text-4xl font-bold text-slate-900 mt-1">
                            {service.price}
                        </h2>

                        <p className="text-gray-600 mt-4 leading-6">
                            Get quick assistance from an available technician
                            for your emergency service needs.
                        </p>

                        <button className="mt-8 w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
                            Request This Service
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;