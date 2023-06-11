import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../Hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';

const SelectedClass = () => {
    const { user } = useAuth()
    const { data: selectedClass = [], refetch } = useQuery({
        queryKey: ['selected', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/selected?email=${user?.email}`)
            return res.json()
        }
    })

    const handleDeleteClass = (id) => {
        fetch(`http://localhost:5000/selected/${id}`, {
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
    return (
        <div  className='w-full px-5'>
            <button className='btn btn-warning'>Pay</button>
            <div>
                {
                    selectedClass.length < 1 ? <h1>No class selected yet</h1> : <div className='w-full px-5'>
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
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
        </div>
    );
};

export default SelectedClass;