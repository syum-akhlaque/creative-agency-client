import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faCommentDots,faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Services.css'
const LeftSidebar = () => {
    const displayOrderForm = ()=>{
        document.getElementById('serviceList').style.display = 'none';
        document.getElementById('clientReview').style.display = 'none';
        document.getElementById('orderForm').style.display = 'block';
    }
    const displayServiceList = () => {
        document.getElementById('orderForm').style.display = 'none';
        document.getElementById('clientReview').style.display = 'none';
        document.getElementById('serviceList').style.display = 'block';   
    }
    const displayReviewForm = () => {
        document.getElementById('orderForm').style.display = 'none';
        document.getElementById('serviceList').style.display = 'none';
        document.getElementById('clientReview').style.display = 'block';
   
    }
    return (
        <>
            <p onClick={displayOrderForm} className ='pt-3 pl-4'> <FontAwesomeIcon icon={faCartPlus} />  Order </p>
            <p onClick={displayServiceList} className ='pl-4' ><FontAwesomeIcon icon={faLock} />  Service List</p>
            <p onClick={displayReviewForm} className ='pl-4' ><FontAwesomeIcon icon={faCommentDots} />  Review</p>

        </>
    );
};

export default LeftSidebar;