import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './Admin.css'

const AddService = () => {

    const [file, setFile] = useState({})
    const { register, handleSubmit, errors } = useForm();

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const onSubmit = (data) => {

        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', data.title);
        formData.append('description', data.description);

        fetch('https://polar-headland-31811.herokuapp.com/addServices', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert("Ya Hoo !! Success!")
            }
        })
        .catch(error => {
            console.error(error)
        })
    }
   
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
                    <label className='pl-1' htmlFor="file">Upload Image</label>
                    <input onChange={handleFileChange} type="file" name="file" id="" ref={register({ required: true })}/>
                   {errors.file && <span className='error'>file is required </span>}
                </div>

                <button className="btn text-white bg-darkBlue px-5" type='submit' >Send</button>
            </form>
        </div>
    );
};

export default AddService;