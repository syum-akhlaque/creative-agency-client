import React, { useContext, useState } from 'react';
import { userContext } from '../../App';
import { useForm } from "react-hook-form";
import './Admin.css'

const AddService = () => {

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
        formData.append('title', data.title);
        formData.append('description', data.description);

        fetch('http://localhost:5000/addServices', {
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

    // const onSubmit = data => { 
       
    //     alert("Ya Hoo !! A New Service Added!")
    //     const review = { //object that will be push in database
    //         title    :  data.title,
    //         description : data.description,
    //         imgUrl    : 'https://i.postimg.cc/FF01GGhW/service1.png',
    //     }
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(review) 
    //     };
    //     fetch('http://localhost:5000/addServices', requestOptions)// fetch req to add events

    // };
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

                <div class="form-group">
                <input onChange={handleFileChange} type="file" name="file" id="" ref={register({ required: true })}/>
                   {errors.file && <span className='error'>file is required </span>}
                </div>

                <button className="btn text-white bg-darkBlue px-5" type='submit' >Send</button>
            </form>
        </div>
    );
};

export default AddService;