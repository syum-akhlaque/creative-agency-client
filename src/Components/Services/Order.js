import React, { useContext } from 'react';
import { userContext } from '../../App';
import { useForm } from "react-hook-form";
import './Services.css'
import { useState } from 'react';

const Order = (props) => {
    const serviceName = props.serviceName;
    const [file, setFile] = useState({})
   

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { register, handleSubmit, errors } = useForm();
    // ------------------------
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const onSubmit = (data) => {

        const formData = new FormData()

        formData.append('file', file);
        formData.append('name', data.name);
        formData.append('serviceName', data.serviceName);
        formData.append('projectDetails', data.projectDetails);
        formData.append('email', data.email);
        formData.append('status', 'pending');

        fetch('http://localhost:5000/addOrders', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.error(error)
            })
    }
    //--------------------------
 

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

                   <input onChange={handleFileChange} type="file" name="file" id="" ref={register({ required: true })}/>
                   {errors.file && <span className='error'>file is required </span>}
       
       
                   <input type="submit" value =  'Order'  />
               </form>  
        </div>
    );
};

export default Order;