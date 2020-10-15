import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { userContext } from '../../App';
import Admin from '../Admin/Admin';
import Services from '../Services/Services';

const Dashboard = () => {
    const [loggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
        }
      }
      useEffect(() => { 
        fetch('http://localhost:5000/isAdmin?email='+loggedInUser.email,requestOptions) 
           .then(response => response.json())
           .then(data => setIsAdmin(data)); 
     }, [loggedInUser.email,requestOptions,isAdmin]);


    return (
        <div>
            {
                isAdmin?         // ---------------------------Check whether email is admin or customer?--------------------
                    <Admin/> :   //---------------------------display admin functionalities---------------------------------
                    <Services/>  //------------------------- display clint functionalities----------------------------------
            }
        </div>
    );
};

export default Dashboard;