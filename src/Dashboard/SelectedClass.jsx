import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../Hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

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
    const totalPrice = selectedClass.reduce((sum, price)=> price.price + sum,0)  
    return (
        <div className='px-6'>
            <Helmet>
                <title>Dashboard | Selected Class</title>
            </Helmet>
             <h1 className='animate__animated animate__backInRight text-center font-medium text-2xl md:text-3xl text-purple-600 my-8 border-b-2 pb-3'>My Selected Classes</h1>
            <div className='w-full'>  
            <h1 className='my-2 text-2xl font-medium'>Total Price: ${totalPrice}</h1>              
                <div className=' border-b-2'>
                    {
                        selectedClass.length < 1 ? <h1 className='text-red-500 text-2xl'>No class selected yet</h1> : <div className='w-full px-5'>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    <thead>
                                        <tr className='bg-purple-600 text-white font-medium'>
                                            <th>Class Name</th>
                                            <th>Instructor Name</th>
                                            <th>Price</th>
                                            <th>Delete Class</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            selectedClass.map(select => <tr key={select._id}>
                                                <td>{select.class}</td>
                                                <td>{select.sellerName}</td>
                                                <td>${select.price}</td>
                                                <td>
                                                    <div onClick={() => handleDeleteClass(select._id)} className="btn btn-error">Delete</div>
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
                <button  className={`btn btn-warning mt-3 px-12 text-white ${selectedClass.length < 1 ? 'hidden': 'block'}`}>Pay</button>
            </div>
        </div>
    );
};

export default SelectedClass;