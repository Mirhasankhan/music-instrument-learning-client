import React from 'react';
import { Fade, Slide } from "react-awesome-reveal";
import img1 from '../../assets/cello.avif'
import img2 from '../../assets/guitar2.avif'
import img3 from '../../assets/piano2.avif'
import img4 from '../../assets/tobla.avif'
import img5 from '../../assets/harmoni.webp'
import img6 from '../../assets/drum.webp'
import AdminRoute from '../../Routes/AdminRoute';

const TopInstruments = () => {
    return (
        <div className='my-8 mx-6'>
            <div className='w-1/2 mx-auto my-8 border-b-2 pb-3 text-center '>
                <h1 className='animate__animated animate__backInRight  font-medium text-2xl md:text-3xl text-purple-600 '>Best Musical Instruments!!</h1>
                <Fade delay={1e3} cascade damping={1e-1}>
                    Which One You Wants To Learn
                </Fade>
            </div>
            <div data-aos="fade-up" className='grid grid-cols-1 md:grid-cols-3 gap-3 '>
                <img className='h-96 w-full rounded-md' src={img4} alt="" />
                <img className='h-96 w-full rounded-md' src={img5} alt="" />
                <img className='h-96 w-full rounded-md' src={img3} alt="" />

            </div>
            <div data-aos="fade-up" className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-5'>
                <img className='h-96 w-full rounded-md' src={img1} alt="" />
                <img className='h-96 w-full rounded-md' src={img2} alt="" />
                <img className='h-96 w-full rounded-md' src={img6} alt="" />
            </div>
            <AdminRoute></AdminRoute>
        </div>
    );
};

export default TopInstruments;