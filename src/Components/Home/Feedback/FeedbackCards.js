import React from 'react';
import './feedback.css'

const FeedbackCards = (props) => {
    
    const {name , designation, message , img} = props.feedbacks;
    return (
        <div className="col-md-4 d-flex flex-column mb-3">
            <div className= 'feedback-cards py-4'>
               <div className='d-flex'>
                    <img className="ml-3 " src={img} alt=""/>
                    <h4 className= ' mb-3 pl-3'>{name} <br/>
                        <small>{designation}</small>
                    </h4> 
               </div>
                <div>
                    <p className = 'text-muted pt-3 pl-3'>{message}</p>
                </div>
            </div>
            
        </div>
    );
};

export default FeedbackCards;