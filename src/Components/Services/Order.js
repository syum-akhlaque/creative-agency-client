import React, { useContext } from 'react';
import { userContext } from '../../App';
import { useForm } from "react-hook-form";
// import './Services.css'
import { useState } from 'react';

const Order = (props) => {
    const serviceName = props.serviceName;
    const [file, setFile] = useState({})
   

    const [loggedInUser] = useContext(userContext);
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

        fetch('https://polar-headland-31811.herokuapp.com/addOrders', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert(" Success....!")
            }
        })
        .catch(error => {
            console.error(error)
        })
    }
    //--------------------------
 

    return (
        <div className= 'px-md-5 py-5'>
            <form onSubmit={handleSubmit(onSubmit)} >
                   
                <div class="form-group">
                     <input  class="form-control"name="name" type="text" defaultValue={loggedInUser.name} placeholder= 'Your Name / Company Name' ref={register({ required: true, minLength: 3 , pattern : /^([^0-9]*)$/ })} />
                    {errors.name && <span className='error'>*Required, minimum charecters 3 and digit not allowed</span>}
                </div>
                <div class="form-group">
                    <input  class="form-control"name="email" type="email" defaultValue={loggedInUser.email} placeholder = "Your Email address" ref={register({ required: true })} />
                </div>
                <div class="form-group">
                    <input  class="form-control"name="serviceName" type="text" defaultValue={serviceName} placeholder= 'Service Name'  ref={register({ required: true })} />
                    {errors.serviceName && <span className='error'>Service Name  is required </span>}       
                </div>
                <div class="form-group">
                    <input  class="form-control"name="projectDetails" type="text" placeholder= 'Project Details'  ref={register({ required: true })}/>
                    {errors.projectDetails && <span className='error'>Project Details is required </span>}
                </div>
                <div class="form-group">
                    <input  class="form-control"name="price" type="text" defaultValue='$100' placeholder= 'Price'  ref={register({ required: true })} />
                    {errors.price && <span className='error'>Price is required </span>}
                </div>
                <div class="form-group">
                    <label className='pl-1' htmlFor="file">Upload Image</label>
                    <input  class="form-control"onChange={handleFileChange} type="file" name="file" id="" ref={register({ required: true })}/>
                    {errors.file && <span className='error'>file is required </span>}
                </div>
 
                <button className="btn text-white bg-darkBlue px-5" type='submit' >Send</button>
               </form>  
               
        </div>
    );
};

export default Order;