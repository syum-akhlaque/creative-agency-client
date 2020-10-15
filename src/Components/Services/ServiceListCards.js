import React from 'react';
import './Services.css';

const ServiceListCards = (props) => {
    const {serviceName , email, projectDetails, img , image} = props.orders;
    return (
        <div className="col-md-6 d-flex flex-column mb-3">
            <div className= 'serviceList-cards py-4'>
                <div className='d-flex'>
                       {img ?  <img className="ml-3" src={img} alt=""/> :
                              <img alt="" className="ml-3" src={"data:image/png;base64," + image.img} />
                        }
                        <div  className="ml-auto mr-3 mt-3 ">
                            <button  className="btn  btn-sm bg-lightBlue px-5 ">Done</button>
                        </div>
                </div>
                <div>
                    <h4 className = 'pt-3 pl-3'>{serviceName}</h4>
                </div>
                <div>
                    <p className = 'text-muted pt-3 pl-3'>{projectDetails}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceListCards;