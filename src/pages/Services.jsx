import React from 'react'
import servicesData from '../data/services'
import ServiceCard from '../components/ServiceCard'
const Services = () => {
    return (
        <div>
            <section className="py-10 px-12">
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
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10 gap-10'>
                {servicesData.map((item) => {
                    return <ServiceCard key={item.id} page="services" name={item.name} icon={item.icon} description={item.description} responseTime={item.responseTime} availability={item.availability} technicianAssignment={item.technicianAssignment} rating={item.rating} price={item.price} />
                })}
            </section>
        </div>
    )
}

export default Services
