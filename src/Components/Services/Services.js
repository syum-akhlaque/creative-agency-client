import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import LeftSidebar from './LeftSidebar';
import Order from './Order';
import Review from './Review';
import ServiceList from './ServiceList';
import './Services.css'


const Services = () => {
    const history = useHistory();
    const location = useLocation();
    const {serviceName} = location.state || ''; // get organization name and img url from state
 
    return (
        <div className='row customer-service'>

            {/* ------------------------------------------left sidebar--------------------------------------------- */}
            <div className = 'col-md-2 left-sidebar' id='leftSidebar'> 
                <LeftSidebar></LeftSidebar>
            </div>
           
            {/* ------------------------------------------Order Form----------------------------------------------- */}
            <div id='orderForm'className = 'col-md-7' style={{background:'#E5E5E5', paddingLeft:'60px'}}>
                <Order serviceName={serviceName}></Order>
            </div>

            {/* ------------------------------------------Servic List --------------------------------------------- */}
            <div id='serviceList'className = 'col-md-9' style={{background:'#E5E5E5', paddingLeft:'60px'}}>
                <ServiceList serviceName={serviceName}></ServiceList>
            </div>

            {/* -----------------------------------------Review -------------------------------------------------- */}
            <div id='clientReview'className = 'col-md-9' style={{background:'#E5E5E5', paddingLeft:'60px'}}>
                <Review serviceName={serviceName}></Review>
            </div>

        </div>
    );
};

export default Services;
