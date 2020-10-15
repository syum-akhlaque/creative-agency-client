import React, { useContext } from 'react';
import { userContext } from '../../App';
import { useForm } from "react-hook-form";
import './Services.css'

const Order = (props) => {
    const serviceName = props.serviceName;

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => { 
       
        const order = { //object that will be push in database
            name    : loggedInUser.name || data.name,
            serviceName : serviceName || data.serviceName,
            email   : loggedInUser.email || data.email, 
            projectDetails : data.projectDetails,
            img     : 'https://i.postimg.cc/FF01GGhW/service1.png'
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order) 
        };
        fetch('http://localhost:5000/addOrders', requestOptions); // fetch req to add order
        // dispaly block service list hare
    };
    

    return (
        <div className= 'order-form my-5'>
            <form onSubmit={handleSubmit(onSubmit)} >
                   
                   <input name="name" type="text" defaultValue={loggedInUser.name} placeholder= 'Your Name / Company Name' ref={register({ required: true, minLength: 3 , pattern : /^([^0-9]*)$/ })} />
                   {errors.name && <span className='error'>*Required, minimum charecters 3 and digit not allowed</span>}
               
                   <input name="email" type="email" defaultValue={loggedInUser.email} placeholder = "Your Email address" ref={register({ required: true })} />
       
                   <input name="serviceName" type="text" defaultValue={serviceName} placeholder= 'Service Name'  ref={register({ required: true })} />
                   {errors.serviceName && <span className='error'>Service Name  is required </span>}       
       
                   <input name="projectDetails" type="text" placeholder= 'Project Details'  ref={register({ required: true })}/>
                   {errors.projectDetails && <span className='error'>Project Details is required </span>}
       
                   <input name="price" type="text" defaultValue='$100' placeholder= 'Price'  ref={register({ required: true })} />
                   {errors.price && <span className='error'>Price is required </span>}
       
       
                   <input type="submit" value =  'Order' />
               </form>  
        </div>
    );
};

export default Order;