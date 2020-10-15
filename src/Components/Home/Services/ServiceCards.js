/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './Services.css'

const serviceCards = (props) => {
    const {description , title, imgUrl} = props.service;
    const location = useLocation()
    const history = useHistory()
    const handleAddService = (name)=>{
        history.push({ 
            pathname: '/dashboard',
            state: { 
                serviceName : name
            }
        });
    }
    return (
        <div className="col-md-4 px-3 ">
            <div onClick={()=>handleAddService(title)} className= 'service-cards d-flex flex-column justify-content-center p-4 '>
                <img className="mx-auto mb-3" src={imgUrl} alt=""/>
                <h4 className= 'mx-auto mb-3 text-center'>{title}</h4> 
                <p className= 'mx-auto text-center' >{description}</p>
            </div>
        </div>
    );
};

export default serviceCards;
