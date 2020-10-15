import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';


const Carousel  = () => {
    return (
        <div className = 'bg-darkBlue p-5  text-white'>
            <h2 className ='text-center my-5 pb-5'>Here are some of <span className ='text-success'>our works</span> </h2>
            
            <InfiniteCarousel
                breakpoints={[
                {
                    breakpoint: 500,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    },
                },
                ]}
                    dots={true}
                    showSides={true}
                    sidesOpacity={.5}
                    sideSize={.1}
                    slidesToScroll={4}
                    slidesToShow={4}
                    scrollOnDevice={true}
                >
                <div> <img alt='slider' src='https://i.postimg.cc/ht0bgWQz/carousel-1.png'/></div> 
                <div> <img alt='slider' src='https://i.postimg.cc/bwYLZwhH/carousel-2.png'/> </div>
                <div> <img alt='slider' src='https://i.postimg.cc/Y0ffSJDs/carousel-4.png'/> </div>
                <div> <img alt='slider' src='https://i.postimg.cc/8P4mgg6F/carousel-5.png'/> </div>
                <div> <img alt='slider' src='https://i.postimg.cc/bwYLZwhH/carousel-2.png'/> </div>
                <div> <img alt='slider' src='https://i.postimg.cc/ht0bgWQz/carousel-1.png'/></div> 

            </InfiniteCarousel> 
            <br/><br/><br/>
        </div>
    );
};

export default Carousel ;