import React from 'react'
import Hero from '../components/Hero'
const Home = () => {
    return (
        <div>
            <Hero />
            <section className="py-16 px-12">
                <div className="text-center">
                    <p className="text-red-600 text-xl font-semibold">
                        OUR SERVICES
                    </p>

                    <h2 className="text-3xl font-bold text-slate-900 mt-2">
                        Emergency Services We Provide
                    </h2>

                    <p className="text-slate-600 mt-3">
                        Get quick and reliable help from verified technicians.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Home
