import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../Hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const SelectedClass = () => {
    const { user } = useAuth()
    const { data: selectedClass = [], refetch } = useQuery({
        queryKey: ['selected', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://music-instrument-learning-server-seven.vercel.app/selected?email=${user?.email}`)
            return res.json()
        }

    })

    const handleDeleteClass = (id) => {
        fetch(`https://music-instrument-learning-server-seven.vercel.app/selected/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                toast.success('Class deleted successfully', {
                    position: 'top-right',
                    style: { backgroundColor: 'red', color: 'white' }
                })
            })
    }

    const totalPrice = selectedClass.reduce((sum, price) => price.price + sum, 0)
    return (
        <div className='px-6'>
            <Helmet>
                <title>Dashboard | Selected Class</title>
            </Helmet>
            <h1 className='selected-class animate__animated animate__backInRight'>My Selected Classes</h1>
            <div className='w-full'>
                <div>
                    {
                        selectedClass.length < 1 ? <h1 className='text-red-500 text-center mt-24 text-4xl'>No class selected yet</h1> : <div className='w-full px-5'>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    <thead>
                                        <tr className='bg-purple-600 text-white font-medium'>
                                            <th>Class Name</th>
                                            <th>Instructor Email</th>
                                            <th>Instructor Name</th>
                                            <th>Price</th>
                                            <th>Pay</th>
                                            <th>Delete Class</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            selectedClass.map(select => <tr key={select._id}>
                                                <td>{select.class}</td>
                                                <td>{select.email}</td>
                                                <td>{select.sellerName}</td>
                                                <td>${select.price}</td>
                                                <td><Link to={`/dashboard/payment/${select._id}`} state={{ select: select }}> <button className={`danger-button text-white `}>Pay</button></Link></td>
                                                <td>
                                                    <div onClick={() => handleDeleteClass(select._id)} className="common-button cursor-pointer text-center">Delete</div>
                                                </td>
                                            </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <Toaster></Toaster>
                        </div>
                    }
                </div>
                {/* ${selectedClass.length < 1 ? 'hidden': 'block'}` */}
                {/* <Link to="/dashboard/payment"> <button  className={`btn btn-warning mt-3 px-12 text-white `}>Pay</button></Link> */}
            </div>
        </div>
    );
};

export default SelectedClass;