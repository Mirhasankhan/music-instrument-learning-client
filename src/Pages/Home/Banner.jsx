import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import banner1 from '../../assets/guitar.avif'
import banner2 from '../../assets/harmoni.webp'
import banner3 from '../../assets/piano.webp'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => { }}
                onSlideChange={() => { }}
            >
                <SwiperSlide className='relative'>
                    <img className='w-full h-84 md:h-[550px]' src={banner1} alt="" />
                    <div className='absolute left-24 md:left-48 top-16 md:top-32'>
                        <h1 className='animate__animated animate__backInDown text-white text-3xl md:text-7xl font-semibold'>Grow your skills <br /> with Tunetutor Academy</h1>
                      <Link to="/register">  <button className='btn btn-outline btn-warning mt-6'>Register Now</button></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img className='w-full h-84 md:h-[550px]' src={banner2} alt="" />
                    <div className='absolute left-24 md:left-48 top-16 md:top-32'>
                        <h1 className='text-red-600 text-3xl md:text-7xl font-semibold'>We Have Some Of <br /> The Best Instructors</h1>
                      <Link to="/instructors">  <button className='btn btn-outline text-white mt-6'>See Instructors</button></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img className='w-full h-84 md:h-[550px]' src={banner3} alt="" />
                    <div className='absolute left-24 md:left-48 top-16 md:top-32'>
                        <h1 className='text-red-600 text-3xl md:text-7xl font-semibold'>Learn Music For Fun <br /> With Our Instructors</h1>
                      <Link>  <button className='common-button mt-6'>Contact Us</button></Link>
                    </div>
                </SwiperSlide>               
                ...
            </Swiper>
        </div>
    );
};

export default Banner;