import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';
import SocialLogin from '../../Components/SocialLogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const { signIn } = useAuth()
    const [show, setShow] = useState(false)

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(() => {
                toast.success('LoggedIn successfully', {
                    position: 'top-right',
                    style: { backgroundColor: 'blue', color: 'white' }
                })

            })
            .catch((error) => {
                toast.error(error.message, {
                    position: 'top-right',
                    style: { backgroundColor: 'black', color: 'white' }
                })
            })
        reset()
    };
    return (
        <div className='py-10 bg-gray-500'>
            <div className='md:w-1/3 w-2/3 mx-auto bg-white rounded-lg p-3'>
                <h1 className='text-center font-semibold text-3xl pt-3'>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-gray-500">Email</span>
                        </label>
                        <input {...register("email", { required: true })} type="email" placeholder="Type Your Email" className="input-style" />
                        {errors.email && <span className="text-red-600">Email is required</span>}
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text font-medium text-gray-500">Password</span>
                        </label>
                        <input {...register("password", { required: true })} type={show ? "password" : "text"} placeholder="Type Your Password" className="input-style" />
                        {errors.password && <span className="text-red-600">Password is required</span>}
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <span>
                                {
                                    show ? <div onClick={()=>setShow(!show)} className='flex items-center'><FaEye className=' mr-1 text-xl'></FaEye> <small>Show password</small></div> : 
                                    <div onClick={()=>setShow(!show)} className='flex items-center'><FaEyeSlash className='mr-1 text-xl'></FaEyeSlash> <small>Hide Password</small></div>
                                }
                            </span>
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="login-btn" type="submit" value="Login" />
                    </div>
                </form>

                <h1>Didn't have an account? <Link className='text-blue-600' to="/register">Sign Up</Link></h1>
                <div className="divider">Or</div>
                <SocialLogin></SocialLogin>
            </div>
            <Toaster />
        </div>
    );
};

export default Login;