/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import airbnb from '../../../images/logos/airbnb.png'
import google from '../../../images/logos/google.png'
import netflix from '../../../images/logos/netflix.png'
import slack from '../../../images/logos/slack.png'
import uber from '../../../images/logos/uber.png'


const Client = () => {
    return (
        <section className = 'container w-md-75 my-5'>
            <div className="row client-section">
                <div className=" col-md pb-3 text-center"><img  src={slack} height='36px'/></div>
                <div className=" col-md pb-3 text-center"><img  src={google} height='44px'/></div>
                <div className=" col-md pb-3 text-center"><img  src={uber} height='50px'/></div>
                <div className=" col-md pb-3 text-center"><img  src={netflix} height='60px'/></div>
                <div className=" col-md pb-3 text-center"><img  src={airbnb} height='51px'/></div>
            </div>
        </section>
    );
};

export default Client;