import React from 'react';
import headerFrame from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <main style={{height:'500px'}} className="row d-flex align-items-center header-main ">
            <div className="col-md-4 offset-md-1 px-2">
                <h1 className='h1' style={{color: '#111430', fontWeight: '700', fontSize: '52px'}}>Let’s Grow Your Brand To The Next Level
                </h1>
                <p className="text-secondary py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat</p>
                <button className="btn text-white bg-darkBlue px-5">Hire us</button>
            </div>
            <div className="col-md-6 pl-5">
                <img src={headerFrame} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;