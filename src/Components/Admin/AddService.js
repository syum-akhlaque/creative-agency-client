import React, { useContext } from 'react';
import { userContext } from '../../App';
import { useForm } from "react-hook-form";
import './Admin.css'

const AddService = () => {

    
    const [loggedInUser] = useContext(userContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => { 
       
        alert("Ya Hoo !! A New Service Added!")
        const review = { //object that will be push in database
            title    :  data.title,
            description : data.description,
            imgUrl    : 'https://i.postimg.cc/FF01GGhW/service1.png',
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review) 
        };
        fetch('http://localhost:5000/addServices', requestOptions)// fetch req to add events

    };
    return (
        <div className="col-md-5 p-5 ">
            <form onSubmit={handleSubmit(onSubmit)}>

                <div class="form-group">
                    <input name="title" class="form-control" type="text" placeholder= 'Enter Service Title' ref={register({ required: true, minLength: 3 })} />
                    {errors.title && <span className='error'>*Required, minimum 3 charecters  </span>}
                </div>

                <div class="form-group">
                    <input name="description" class="form-control" type="text"  placeholder= 'Enter Service Description' ref={register({ required: true, minLength: 3  })} />
                    {errors.description && <span className='error'>*Required, minimum charecters 3 </span>}
                </div>
            
                <button className="btn text-white bg-darkBlue px-5" type='submit' >Send</button>
            </form>
        </div>
    );
};

export default AddService;