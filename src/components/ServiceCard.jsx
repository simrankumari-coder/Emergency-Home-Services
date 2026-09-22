import React from 'react'
import { Link } from 'react-router';
import { FaArrowRightLong } from "react-icons/fa6";
const ServiceCard = ({ id, name, icon, page, description, responseTime, availability, technicianAssignment, rating, price }) => {
    const Icon = icon
    if (page === "home") {
        return (
            <div
                key={id}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
                {/* Icon + Service Name */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                        <Icon />
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-slate-900">
                            {name}
                        </h3>

                        <p className="text-sm text-gray-500">
                            Emergency Service
                        </p>
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-6 mb-5">
                    {description}
                </p>

                {/* Service Information */}
                <div className="space-y-3 border-t border-gray-100 pt-4">

                    <div className="flex justify-between items-center">


                        {/* </div> */}

                        <button className="px-5 py-2.5 w-full bg-blue-800 text-white rounded-lg font-medium hover:bg-blue-900 transition">
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>
            </div >
        )
    } else {
        return (<div
            key={id}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
        >
            {/* Icon + Service Name */}
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Icon />
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                        {name}
                    </h3>

                    <p className="text-sm text-gray-500">
                        Emergency Service
                    </p>
                </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-6 mb-5">
                {description}
            </p>

            {/* Service Information */}
            <div className="space-y-3 border-t border-gray-100 pt-4">

                <div className="flex justify-between">
                    <span className="text-gray-500">Response Time</span>
                    <span className="font-medium text-slate-800">
                        {responseTime}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-gray-500">Availability</span>
                    <span className="font-medium text-green-600">
                        {availability}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-gray-500">Technician</span>
                    <span className="font-medium text-slate-800">
                        {technicianAssignment}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-gray-500">Rating</span>
                    <span className="font-medium text-slate-800">
                        ⭐ {rating}
                    </span>
                </div>

            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between mt-6 pt-5 border-t border-gray-100">
                <div>
                    <p className="text-xs text-gray-500">Starting from</p>
                    <p className="text-lg font-bold text-slate-900">
                        {price}
                    </p>
                </div>

                <Link to={`/services/${id}`}><button className="px-5 py-2.5 bg-blue-800 text-white rounded-lg font-medium hover:bg-blue-900 transition">
                    View Service
                </button></Link>
            </div>
        </div>)
    }


}

export default ServiceCard
