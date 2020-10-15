import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import './Admin.css'
import AllServiceTR from './AllServiceTR';

const AllService = () => {
    const [AllServiceLists ,setAllServiceLists] = useState([]);
    const [loggedInUser] = useContext(userContext);

    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
        }
      }
      useEffect(() => { //retrive all order from mongodb
        fetch('http://localhost:5000/allCustomerServices',requestOptions) 
           .then(response => response.json())
           .then(data => setAllServiceLists(data)); 
     }, [loggedInUser.email,requestOptions]);
    return (
        <div className = 'right-side '>
            <table className="table table-striped " id = 'event-list'> {/* List of all events */}
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Service</th>
                        <th scope="col">Project Description</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        AllServiceLists.map( services => <AllServiceTR key= {services._id}  services={services} > </AllServiceTR>)
                    }   
                </tbody>
            </table>
        </div>
    );
};

export default AllService;