import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import { FaHeart } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Fade, Slide } from "react-awesome-reveal";

const PopularInstructors = () => {
    const [ins, setIns] = useState([])
    useEffect(() => {
        fetch('popular.json')
            .then(res => res.json())
            .then(data => setIns(data))
    }, [])

    const addTOFavoutrite = () => {
        Swal.fire({
            position: 'bottom-left',
            icon: 'success',
            title: 'Added To Your Favourite',
            showConfirmButton: false,
            timer: 500
        })
    }
    return (
        <div className='my-8'>
            <div className='w-1/2 mx-auto my-8 border-b-2 pb-3 text-center '>
                <h1 className='animate__animated animate__backInRight  font-medium text-2xl md:text-3xl text-purple-600 '>Popular Instructors</h1>
                <Fade delay={1e3} cascade damping={1e-1}>
                    Here is our best instructor for you, select your loved ones!!
                </Fade>
            </div>
            <Marquee speed={100} pauseOnHover={true}>
                <div>
                    <div className='flex gap-4 my-2 relative'>
                        {
                            ins.map(inst => <div key={inst.id} className="card w-96 bg-base-100 shadow-xl">
                                <figure><img className='w-full h-72' src={inst.image} alt="Shoes" /></figure>
                                <div className="card-body ">
                                    <h2 className="card-title">
                                        {inst.name}
                                        <div className="badge badge-secondary">{inst.role}</div>
                                    </h2>
                                    <FaHeart onClick={addTOFavoutrite} className='text-white text-4xl absolute right-2 top-2' cursor="pointer"></FaHeart>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default PopularInstructors;