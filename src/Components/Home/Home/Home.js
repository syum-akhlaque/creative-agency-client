import React from 'react';
import Carousel from '../Carousel/Carousel ';
import Client from '../Client/Client';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Client/>
            <Services/>
            <Carousel/>
            <Feedback/>
            <Footer/>
        </div>
    );
};

export default Home;