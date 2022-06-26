import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Gettting all service from service.json
        // fetch('service.json')
        //Getting all services fro server
        fetch('https://ancient-citadel-53678.herokuapp.com/service')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div id="services" className='container mt-5'>
            <h1 className='text-primary text-center'>All services</h1>
            <div className="services-container">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div> 
        </div>
    );
};

export default Services;