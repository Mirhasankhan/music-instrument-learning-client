import React from 'react';
import useAuth from '../Hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';

const SocialLogin = () => {
    const { googleSignIn } = useAuth()
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const loggedInUser = result.user;
                const insertUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(insertUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        toast.success('LoggedIn successfully', {
                            position: 'top-right',
                            style: { backgroundColor: 'blue', color: 'white' }
                        })
                    })

            })
            .catch((error) => {
                toast.error(error.message, {
                    position: 'top-right',
                    style: { backgroundColor: 'black', color: 'white' }
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