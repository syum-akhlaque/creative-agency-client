import React, { useEffect, useState } from 'react';
import './Services.css'
import ServiceCards from './ServiceCards';

const Services = () => {
    const [services ,setServices] = useState([]);
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
        }
      }

    useEffect(() => {
      fetch('https://polar-headland-31811.herokuapp.com/services',requestOptions) 
          .then(response => response.json())
          .then(data => setServices(data)); 
    }, [services,requestOptions]);

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