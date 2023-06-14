import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../Hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import useUsers from '../../Hooks/useUsers';
import { Fade, Slide } from "react-awesome-reveal";

const Classes = () => {
    const { user } = useAuth()
    const [users] = useUsers()
    const addmin = users?.find(check => check.role === 'admin' && check.email === user?.email)
    const instrucor = users?.find(check => check.role === 'instructor' && check.email === user?.email)


    const { data: approvedClasses = [] } = useQuery({
        queryKey: ['approved'],
        queryFn: async () => {
            const res = await fetch('https://music-instrument-learning-server-seven.vercel.app/classes?status=approved')
            return res.json()
        }
    })

    const handleSelectClass = (service) => {
        if (!addmin && !instrucor && user?.email) {
            const selectedClass = { sellerEmail: service.email, email: user?.email, class: service.class, price: service.price, sellerName: service.instructorName }
            //    todo 
            fetch(`https://music-instrument-learning-server-seven.vercel.app/selected`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('Class Selected successfully', {
                        position: 'top-right',
                        style: { backgroundColor: 'blue', color: 'white' }
                    })
                })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You need to login as Student'
            })
        }

    }

    return (
        <div>
            <Helmet>
                <title>TuneTutor | Classes</title>
            </Helmet>
            <div>
                <div className='w-1/2 mx-auto my-8 border-b-2 pb-3 text-center '>
                    <h1 className='animate__animated animate__backInRight  font-medium text-2xl md:text-3xl text-purple-600 '>Our Classes Approved By Admin!!</h1>
                    <Fade delay={1e3} cascade damping={1e-1}>
                        Select Your Favourite Class
                    </Fade>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-3 gap-3'>
                    {
                        approvedClasses.map(approved => <div key={approved._id} className={`text-white card w-full bg-purple-400 shadow-xl ${approved.seats == 0 ? 'bg-red-500' : 'bg-purple-400'} `}>
                            <figure className="px-6 pt-5">
                                <img src={approved.photo} alt="Shoes" className="rounded-xl h-52 w-full" />
                            </figure>
                            <div className='card-body'>
                                <h2 className="card-title ">Class Name: {approved.class}</h2>
                                <p>Instructor: {approved.instructorName}</p>
                                <div className='flex justify-between'>
                                    <p>Available Seats: <span className='text-black'>{approved.seats}</span></p>
                                    <p>Price: <span className='text-black'> ${approved.price}</span></p>
                                </div>
                                <div className="card-actions mt-auto">
                                    <button disabled={addmin || instrucor || approved.seats == 0 ? true : false} onClick={() => handleSelectClass(approved)} className="btn btn-primary w-full">Select Class</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Classes;