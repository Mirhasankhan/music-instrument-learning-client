import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useUsers from '../Hooks/useUsers';
import 'animate.css';
import { Helmet } from 'react-helmet-async';

const AllUsers = () => {
    const [isDisabled, setDisabled] = useState(false)
    const [adminDisable, setAdminDisable] = useState(false)
    const [users] = useUsers()

    const handleMakeInstructor = (id) => {
        setDisabled(true)
        fetch(`https://music-instrument-learning-server-seven.vercel.app/users/instructor/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success('User listed as instructor', {
                        position: 'top-right',
                        style: { backgroundColor: 'blue', color: 'white' }
                    })
                }
            })
    };

    const handleMakeAdmin = (id) => {
        setDisabled(true)
        fetch(`https://music-instrument-learning-server-seven.vercel.app/users/admin/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount) {
                    toast.success('User listed as admin', {
                        position: 'top-right',
                        style: { backgroundColor: 'blue', color: 'white' }
                    })
                }
            })
    }
  
    return (
        <div className='md:px-6'>
            <Helmet>
                <title>Dashboard | All Users</title>
            </Helmet>
            <h1 className='animate__animated animate__backInRight text-center font-medium text-2xl md:text-3xl text-purple-600 my-8 border-b-2 pb-3'>All Users List</h1>
            <div className='w-full '>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead className='bg-purple-400 text-white text-[14px]'>
                            <tr>
                                <th>SL</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Current Role</th>
                                <th>Manage Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr
                                    key={user._id}
                                >
                                    <th>{index + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>{user?.role || 'User'}</td>
                                    <td>
                                        <button disabled={user._id == isDisabled ? true : false} onClick={() => { handleMakeInstructor(user?._id); setDisabled(user._id) }} className="btn btn-outline btn-info mr-2">Make Instructor</button>
                                        <button disabled={user._id == adminDisable ? true : false} onClick={() => { handleMakeAdmin(user?._id); setAdminDisable(user._id) }} className="btn btn-outline btn-success">Make Admin</button>
                                        {/* <button onClick={() => handleMakeAdmin(user?._id)} className="btn btn-outline btn-success">Make Admin</button> */}
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                <Toaster></Toaster>
            </div>
        </div>
    );
};

export default AllUsers;