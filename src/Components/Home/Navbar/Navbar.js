/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { userContext } from '../../../App';
import logo from '../../../images/logos/logo.png'


const Navbar1 = () => {
    const [loggedInUser] = useContext(userContext);
    const location = useLocation();
    const currentPath = location.pathname;
    
    return (
       <div>
           <Navbar bg="transparent" expand="lg">
            <Navbar.Brand href="#home"> <Link to="/"><img className="pl-md-5 ml-md-5 mt-2" height='50px' src={logo} alt=""/></Link></Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    
                    {
                        (currentPath === "/" || currentPath === "/home") &&
                        <>
                        <Link to="/"><a className="nav-link mr-5">Home</a></Link>
                        <Link to="/"><a className="nav-link mr-5">Our Portfolio</a></Link>
                        <Link to="/"><a className="nav-link mr-5">Our Team</a></Link>
                        <Link to="/dashboard"> <a className="nav-link mr-5 ">Dashboard</a></Link>
                        </>
                   }
                   {
                        (currentPath === "/dashboard") &&
                        <>
                        <li className="pt-2">
                            <b>{loggedInUser.name}</b>
                         </li>
                        </>
                   }
                </Nav>
                
            </Navbar.Collapse>
            </Navbar>
       </div>
    );
};

export default Navbar1;