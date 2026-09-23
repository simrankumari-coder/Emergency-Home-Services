import React from "react";
import {
    FaBolt,
    FaClock,
    FaLocationDot,
    FaUserShield,
} from "react-icons/fa6";

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50">

            {/* Hero */}
            <section className="bg-white py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-blue-600 font-semibold text-sm tracking-wide">
                        ABOUT EHS
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
                        Emergency Help When You Need It Most
                    </h1>

                    <p className="text-gray-600 mt-5 text-lg leading-8">
                        Emergency Home Services helps people quickly find reliable
                        technicians for urgent home service problems.
                    </p>
                </div>
            </section>

            {/* About EHS */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                    <div>
                        <p className="text-blue-600 font-semibold text-sm tracking-wide">
                            WHO WE ARE
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mt-2">
                            What is Emergency Home Services?
                        </h2>

                        <p className="text-gray-600 mt-5 leading-7">
                            EHS is a home service platform designed to help customers
                            request emergency services such as plumbing, electrical,
                            appliance repair and other urgent home repairs.
                        </p>

                        <p className="text-gray-600 mt-4 leading-7">
                            Our system focuses on connecting customers with available
                            technicians quickly and helping them track their service.
                        </p>
                    </div>

                    <div className="bg-blue-50 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-slate-900">
                            Our Mission
                        </h3>

                        <p className="text-gray-600 mt-4 leading-7">
                            To make emergency home services faster, simpler and easier
                            to track for customers.
                        </p>
                    </div>

                </div>
            </section>

            {/* Why Choose EHS */}
            <section className="bg-white py-16 px-6">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-10">
                        <p className="text-blue-600 font-semibold text-sm tracking-wide">
                            WHY EHS
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mt-2">
                            Why Choose EHS?
                        </h2>

                        <p className="text-gray-600 mt-3">
                            Designed to make emergency service requests easier and faster.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                            <FaBolt className="text-blue-600 text-2xl" />
                            <h3 className="font-bold text-lg text-slate-900 mt-4">
                                Fast Response
                            </h3>
                            <p className="text-gray-600 text-sm mt-2 leading-6">
                                Get connected with available technicians quickly.
                            </p>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                            <FaUserShield className="text-blue-600 text-2xl" />
                            <h3 className="font-bold text-lg text-slate-900 mt-4">
                                Verified Technicians
                            </h3>
                            <p className="text-gray-600 text-sm mt-2 leading-6">
                                Service requests are handled by assigned technicians.
                            </p>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                            <FaLocationDot className="text-blue-600 text-2xl" />
                            <h3 className="font-bold text-lg text-slate-900 mt-4">
                                Smart Assignment
                            </h3>
                            <p className="text-gray-600 text-sm mt-2 leading-6">
                                The system focuses on finding suitable nearby help.
                            </p>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                            <FaClock className="text-blue-600 text-2xl" />
                            <h3 className="font-bold text-lg text-slate-900 mt-4">
                                Available 24/7
                            </h3>
                            <p className="text-gray-600 text-sm mt-2 leading-6">
                                Emergency service requests can be made anytime.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto text-center">

                    <p className="text-blue-600 font-semibold text-sm tracking-wide">
                        HOW IT WORKS
                    </p>

                    <h2 className="text-3xl font-bold text-slate-900 mt-2">
                        Simple Emergency Service Process
                    </h2>

                    <div className="grid md:grid-cols-4 gap-5 mt-10">

                        <div className="bg-white border border-gray-200 rounded-2xl p-6">
                            <div className="text-blue-600 text-2xl font-bold">01</div>
                            <h3 className="font-bold text-slate-900 mt-4">
                                Request
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Submit your emergency service request.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-2xl p-6">
                            <div className="text-blue-600 text-2xl font-bold">02</div>
                            <h3 className="font-bold text-slate-900 mt-4">
                                Assignment
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">
                                A suitable technician is assigned.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-2xl p-6">
                            <div className="text-blue-600 text-2xl font-bold">03</div>
                            <h3 className="font-bold text-slate-900 mt-4">
                                Track
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Track the progress of your service.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-2xl p-6">
                            <div className="text-blue-600 text-2xl font-bold">04</div>
                            <h3 className="font-bold text-slate-900 mt-4">
                                Complete
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Get your emergency problem resolved.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-blue-800 py-14 px-6">
                <div className="max-w-4xl mx-auto text-center text-white">

                    <h2 className="text-3xl font-bold">
                        Need Emergency Home Service?
                    </h2>

                    <p className="mt-3 text-blue-100">
                        Request a service and get connected with available help.
                    </p>

                    <button className="mt-6 bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                        Request Emergency Service →
                    </button>

                </div>
            </section>

        </div>
    );
};

export default About;