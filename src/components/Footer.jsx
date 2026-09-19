import React from 'react'

const Footer = () => {
    return (

        <footer>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-2 '>
                <div>
                    <h1>EHS</h1>
                    <h2>Emergency Home Services</h2>
                    <p>Quick and reliable help for urgent home needs</p>
                </div>
                <section>
                    <h1>Quick Links</h1>
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Emergency Request</li>
                        <li>Track Service</li>
                        <li>About</li>
                    </ul>
                </section>
                <section>
                    <ul>
                        <li>Plumbing</li>
                        <li>Electrical</li>
                        <li>AC Repair</li>
                        <li>Appliance Repair</li>
                        <li>Locksmith</li>
                    </ul>
                </section>
                <section>
                    <ul>
                        <li>24/7 Emergency Support</li>
                        <li>+ 91 XXXXX XXXXX</li>
                        <li>supportEHS@gmail.com</li>
                    </ul>
                </section>
            </div>
        </footer>

    )
}

export default Footer
