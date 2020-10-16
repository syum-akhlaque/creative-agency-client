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
        }
      }
    useEffect(() => { //retrive all order from mongodb
        fetch('https://polar-headland-31811.herokuapp.com/reviews',requestOptions) 
           .then(response => response.json())
           .then(data => setReviews(data)); 
     }, [reviews,requestOptions]);
    return (
        <div  className ='my-5 py-5 w-75 mx-auto '>
            <h2 className ='text-center my-4 pb-5'>Clients <span className = 'text-success'>Feedback</span> </h2>
            <div className="row ">
                {
                    reviews.map(feedbacks => <FeedbackCards feedbacks={feedbacks}  key={feedbacks._id}> </FeedbackCards>).reverse()
                }
            </div>
        </div>
    );
};

export default Feedback;