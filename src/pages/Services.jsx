import React from 'react'
import servicesData from '../data/services'
import ServiceCard from '../components/ServiceCard'
const Services = () => {
    return (
        <div>
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
            <section>
                {servicesData.map((item) => {
                    return <ServiceCard key={item.id} name={item.name} description={item.description} responseTime={item.responseTime} availability={item.availability} technicianAssignment={item.technicianAssignment} rating={item.rating} price={item.price} />
                })}
            </section>
        </div>
    )
}

export default Services
