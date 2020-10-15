import React, { useContext } from 'react';
import { userContext } from '../../App';
import { useForm } from "react-hook-form";


const Review = () => {
    const [loggedInUser] = useContext(userContext);
    
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => { 
        const review = { //-------------object that will be push in database
            name    :  data.name,
            designation : data.designation,
            email   : loggedInUser.email ,
            message : data.message,
            img     : loggedInUser.photoURL ,
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review) 
        };
        fetch('https://polar-headland-31811.herokuapp.com/addReviews', requestOptions)//--------------- fetch req to add Reviews
        .then(res => res.json())
        .then( data => {
            alert("Your file is being uploaded");
        })  
    };

    return (
        <div className="col-md-5 p-5 ">
            <form onSubmit={handleSubmit(onSubmit)}>

                <div class="form-group">
                    <input name="name" class="form-control" type="text" defaultValue={loggedInUser.name} placeholder= 'Your Name / Company Name' ref={register({ required: true, minLength: 3 , pattern : /^([^0-9]*)$/ })} />
                    {errors.name && <span className='error'>*Required, minimum charecters 3 and digit not allowed</span>}
                </div>

                <div class="form-group">
                    <input name="designation" class="form-control" type="text"  placeholder= 'companyName, Designation' ref={register({ required: true, minLength: 3 , pattern : /^([^0-9]*)$/ })} />
                    {errors.designation && <span className='error'>*Required, minimum charecters 3 and digit not allowed</span>}
                </div>

                <div class="form-group">
                    <input name="message" rows="5" class="form-control" type="text" placeholder='Your message' ref={register({ required: true })} />
                    {errors.message && <span className='error'>*Required, Please write your messege</span>}
                </div>

                <button className="btn text-white bg-darkBlue px-5" type='submit' >Send</button>
            </form>
    </div>
    );
};

export default Review;