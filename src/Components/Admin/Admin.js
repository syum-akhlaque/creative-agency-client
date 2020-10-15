import React from 'react';
import MakeAdmin from './MakeAdmin';
import AddService from './AddService';
import AllService from './AllService';
import Sidebar from './Sidebar';
import './Admin.css'


const Admin = () => {
    return (
        <div className='row customer-service'>

        {/* ------------------------------------------left sidebar--------------------------------------------- */}
        <div className = 'col-md-2 left-sidebar' id='sidebar'> 
            <Sidebar></Sidebar>
        </div>

        {/* ------------------------------------------All Servic List --------------------------------------------- */}
        <div id='allService'className = 'col-md-9' style={{background:'#E5E5E5' }}>
            <AllService ></AllService>
        </div>

        {/* -----------------------------------------Review -------------------------------------------------- */}
        <div id='addService'className = 'col-md-9' style={{background:'#E5E5E5'}}>
            <AddService> </AddService>
        </div>

         {/* ------------------------------------------Order Form----------------------------------------------- */}
         <div id='makeAdmin'className = 'col-md-9' style={{background:'#E5E5E5'}}>
            <MakeAdmin ></MakeAdmin>
        </div>

    </div>
    );
};

export default Admin;