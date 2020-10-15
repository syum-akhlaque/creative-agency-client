import React, { useEffect } from 'react';
import { useState } from 'react';
// import feedbackData from '../../../FakeDara/FeedbackData'
import FeedbackCards from './FeedbackCards';


const Feedback = () => {
    const [reviews,setReviews] = useState([])

    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            //authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      }
    useEffect(() => { //retrive all order from mongodb
        fetch('http://localhost:5000/reviews',requestOptions) 
           .then(response => response.json())
           .then(data => setReviews(data)); 
     }, [reviews,requestOptions]);
    return (
        <div  className ='my-5 py-5 w-75 mx-auto '>
            <h2 className ='text-center my-4 pb-5'>Clients <span className = 'text-success'>Feedback</span> </h2>
            <div className="row ">
                {
                    reviews.map(feedbacks => <FeedbackCards feedbacks={feedbacks}> </FeedbackCards>).reverse()
                }
            </div>
        </div>
    );
};

export default Feedback;