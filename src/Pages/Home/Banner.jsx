import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../assets/guitar.avif'
import banner2 from '../../assets/harmoni.webp'
import banner3 from '../../assets/piano.webp'

const Banner = () => {
    return (
        <div className='h-96'>
            <Carousel dynamicHeight={true}>
                <div >
                    <img src={banner1} />
                    <div className='legend'>
                        <h1>TAKE YOUR MUSIC TO THE NEXT LEVEL.</h1>
                    </div>
                </div>
                <div>
                    <img src={banner2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={banner3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>        
    );
};

export default Banner;