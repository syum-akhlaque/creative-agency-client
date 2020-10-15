/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            
            <Link to="/"><img className="pl-md-5 ml-md-5 mt-2" height='50px' src={logo} alt=""/></Link>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse mr-md-5 " id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        
                        <Link to="/"><a className="nav-link mr-5" >Home <span className="sr-only">(current)</span></a></Link>
                    </li>
                    <li className="nav-item">
                        
                        <Link to="/"><a className="nav-link mr-5">Our Portfolio</a></Link>
                    </li>
                    <li className="nav-item">
                        
                        <Link to="/"><a className="nav-link mr-5">Our Team</a></Link>
                    </li>
                    <li className="nav-item">
                       
                        <Link to="/dashboard"> <a className="nav-link mr-5 ">Dashboard</a></Link>
                    </li>
                    <li className="nav-item">
                       
                        <Link to="/login"> <button className='btn text-white bg-darkBlue px-5 mr-md-5 '>Login</button></Link>
                    </li>
                   
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;