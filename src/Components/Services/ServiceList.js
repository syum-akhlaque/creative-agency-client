import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import ServiceListCards from './ServiceListCards';

const ServiceList = () => {
    const [serviceLists ,setServiceLists] = useState([]);
    const [loggedInUser] = useContext(userContext);
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            //authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      }
      useEffect(() => { //retrive all order from mongodb
        fetch('https://polar-headland-31811.herokuapp.com/orders?email='+loggedInUser.email,requestOptions) 
           .then(response => response.json())
           .then(data => setServiceLists(data)); 
     }, [loggedInUser.email,requestOptions]);


    return (
        <div  className ='py-5'>
            <div className="row">
                {
                    serviceLists.map(orders => <ServiceListCards orders={orders} key={orders._id}> </ServiceListCards>)
                }
            </div>
        </div>
    );
};

export default ServiceList;