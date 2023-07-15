import React from 'react';
import useAuth from '../Hooks/useAuth';
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const AddClass = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { photo, price, seats, instructorName, email } = data;

        const addedClass = { class: data.class, photo, price: parseFloat(price), seats: parseFloat(seats), instructorName, email, status: 'pending' }

        fetch('http://localhost:5000/classes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedClass)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Class Added successfully', {
                        position: 'top-right',
                        style: { backgroundColor: 'blue', color: 'white' }
                    })
                }
            })
        reset()
    };
   
    return (
        <div className='px-6'>
            <Helmet>
                <title>Dashboard | Add Class</title>
            </Helmet>
             <h1 className='animate__animated animate__backInRight text-center font-medium text-2xl md:text-3xl text-purple-600 my-8 border-b-2 pb-3'>Add New Class</h1>
            <div className='w-full '>
                <form className='bg-gray-200 p-5 rounded-md' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex'>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Class name*</span>
                            </label>
                            <input {...register("class", { required: true })} type="text" placeholder="class" className="input input-bordered w-full " />
                            {errors.class && <span className='text-red-400 p-2'>Class name is required</span>}
                        </div>
                        <div className="form-control w-full ml-2">
                            <label className="label">
                                <span className="label-text">Instructor name</span>
                            </label>
                            <input {...register("instructorName", { required: true })} readOnly type="text" defaultValue={user?.displayName} className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} readOnly type="email" defaultValue={user?.email} className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full ml-2">
                            <label className="label">
                                <span className="label-text">Available Seats</span>
                            </label>
                            <input {...register("seats", { required: true })} type="number" className="input input-bordered w-full " />
                            {errors.seats && <span className='text-red-400 p-2'>Number of seat is required</span>}
                        </div>
                    </div>
                    <div className="flex">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input {...register("price", { required: true })} type="number" placeholder='price' className="input input-bordered w-full " />
                            {errors.price && <span className='text-red-400 p-2'>Price is required</span>}
                        </div>
                        <div className="form-control w-full ml-2">
                            <label className="label">
                                <span className="label-text">PhotoURL*</span>
                            </label>
                            <input {...register("photo", { required: true })} type="url" placeholder='photo' className="input input-bordered w-full " />
                            {errors.photo && <span className='text-red-400 p-2'>PhotoURL is required</span>}
                        </div>
                    </div>
                    <input className='login-btn mt-5' type="submit" value="Add Class" />
                </form>
                <Toaster></Toaster>
            </div>
        </div>
    );
};

export default AddClass;