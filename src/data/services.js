import { FaFaucet, FaBolt, FaSnowflake, FaKey, FaHouse, FaWindowMaximize, FaFire, FaWater, FaBroom, FaScrewdriverWrench } from "react-icons/fa6"



const servicesData = [
    {
        id: 1,
        icon: FaFaucet,
        name: "Plumbing",
        description: "Leaks, blocked drains, broken taps and pipe problems.",
        responseTime: "15–30 min",
        availability: "24/7",
        technicianAssignment: "Nearest available technician",
        rating: "4.8",
        price: "₹299",
    },

    {
        id: 2,
        icon: FaBolt,
        name: "Electrical",
        description: "Power faults, switches, sockets and wiring problems.",
        responseTime: "20–35 min",
        availability: "24/7",
        technicianAssignment: "Nearest available technician",
        rating: "4.7",
        price: "₹349",
    },

    {
        id: 3,
        icon: FaScrewdriverWrench,
        name: "Appliance Repair",
        description:
            "Repair help for refrigerators, washing machines and microwaves.",
        responseTime: "30–45 min",
        availability: "24/7",
        technicianAssignment: "Nearest available technician",
        rating: "4.6",
        price: "₹399",
    },

    {
        id: 4,
        icon: FaSnowflake,
        name: "AC Repair",
        description: "Cooling issues, AC faults and urgent repair needs.",
        responseTime: "25–40 min",
        availability: "24/7",
        technicianAssignment: "Nearest available technician",
        rating: "4.8",
        price: "₹499",
    },

    {
        id: 5,
        icon: FaKey,
        name: "Locksmith",
        description: "Help with broken keys, locks and urgent access problems.",
        responseTime: "10–20 min",
        availability: "24/7",
        technicianAssignment: "Nearest available technician",
        rating: "4.9",
        price: "₹249",
    },

    {
        id: 6,
        icon: FaHouse,
        name: "Home Repair",
        description: "Doors, fixtures and other minor household repair needs.",
        responseTime: "30–60 min",
        availability: "24/7",
        technicianAssignment: "Nearest available technician",
        rating: "4.5",
        price: "₹299",
    },

    {
        id: 7,
        icon: FaWindowMaximize,
        name: "Glass & Window Repair",
        description: "Broken glass, window damage and fitting problems.",
        responseTime: "25–45 min",
        availability: "24/7",
        technicianAssignment: "Nearest available technician",
        rating: "4.6",
        price: "₹399",
    },

    {
        id: 8,
        icon: FaFire,
        name: "Gas & Stove Service",
        description: "Urgent assistance for stove and gas-appliance problems.",
        responseTime: "20–40 min",
        availability: "24/7",
        technicianAssignment: "Nearest available technician",
        rating: "4.7",
        price: "₹349",
    },

    {
        id: 9,
        icon: FaWater,
        name: "Water Heater Repair",
        description: "Geyser and water-heater faults and repair issues.",
        responseTime: "25–45 min",
        availability: "24/7",
        technicianAssignment: "Nearest available technician",
        rating: "4.6",
        price: "₹399",
    },

    {
        id: 10,
        icon: FaBroom,
        name: "Emergency Cleaning",
        description: "Quick home cleaning and urgent cleanup services.",
        responseTime: "30–60 min",
        availability: "24/7",
        technicianAssignment: "Nearest available technician",
        rating: "4.5",
        price: "₹299",
    },
];

export default servicesData;