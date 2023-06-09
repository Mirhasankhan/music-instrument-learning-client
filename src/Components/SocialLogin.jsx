import React from 'react';
import useAuth from '../Hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';

const SocialLogin = () => {
    const {googleSignIn} = useAuth()
    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(()=>{
            toast.success('LoggedIn successfully',{
                position: 'top-right',
                style: {backgroundColor: 'blue', color: 'white'}
            })
        })
        .catch((error)=>{
            toast.error(error.message, {
                position: 'top-right',
                style: {backgroundColor: 'black', color: 'white'}
            })   
        })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-warning w-full">Login With Google</button>
            <Toaster></Toaster>
        </div>
    );
};

export default SocialLogin;