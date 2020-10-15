import React, { useEffect, useState } from 'react';
import './Services.css'
import serviceData from '../../../FakeDara/serviceData'
import ServiceCards from './ServiceCards';

const Services = () => {
    const [services ,setServices] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5000/services') 
          .then(response => response.json())
          .then(data => setServices(data)); //state a data save kora hocche
    }, [services]);

    return (
        <div  className ='my-5 pt-4 w-75 mx-auto '>
            <h2 className ='text-center my-5'>Provide awesome <span className = 'text-success'>services</span> </h2>
            <div className="row">
                {
                    services.map(service => <ServiceCards service={service} key={service._id}> </ServiceCards>)
                }
            </div>
        </div>
    );
};

export default Services;