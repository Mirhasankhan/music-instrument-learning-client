import React from 'react';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className='bg-hero-pattern pt-10 h-[90vh] bg-no-repeat bg-cover'>
            <div className='w-1/3 mx-auto bg-white rounded-lg p-3'>
                <h1 className='text-center font-semibold text-3xl pt-3'>Login</h1>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-gray-500">Email</span>
                        </label>
                        <input type="text" placeholder="Type Your Email" className="input-style" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-gray-500">Password</span>
                        </label>
                        <input type="text" placeholder="Type Your Password" className="input-style" />
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <input type="checkbox" name="" id="" />
                            <p className='ml-2'>Remember Me</p>
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">                        
                        <input className="login-btn" type="submit" value="Login" />
                    </div>
                </form>
                <div className="divider">Or</div>
                <button className="btn btn-outline btn-warning w-full">Login With Google</button>
            </div>
        </div>
    );
};

export default Login;