import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ManageClasses = () => {
    const textref = useRef()
    const [selectedClassId, setSelectedClassId] = useState('');   
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('https://music-instrument-learning-server-seven.vercel.app/classes')
            return res.json()
        }
    })

    const handleApprove = (id) => {
        fetch(`https://music-instrument-learning-server-seven.vercel.app/classes/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success('Class Approved!!', {
                        position: 'top-right',
                        style: { backgroundColor: 'blue', color: 'white' }
                    })
                    refetch()
                }
            })
    }

    const handleDeny = (id) => {
        fetch(`https://music-instrument-learning-server-seven.vercel.app/class/denied/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {                
                if (data.modifiedCount) {
                    toast.success('Class Denied!!', {
                        position: 'top-right',
                        style: { backgroundColor: 'red', color: 'white' }
                    })
                    refetch()
                }
            })
    }
    const handleFeedback = (id) => {
        const text = textref.current.value;
        const results = { feedback: text }
        fetch(`https://music-instrument-learning-server-seven.vercel.app/class/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(results)
        })
            .then(data => {
                if (data.status === 200) {
                    toast.success('Feedback given!!', {
                        position: 'bottom-left',
                        style: { backgroundColor: 'red', color: 'white' }
                    })
                    refetch()
                }
            })
    }

    return (
        <div className='w-full px-6'>
            <dialog id="my_modal_2" className="modal">
                <div method="dialog" className="modal-box">
                    <h1 className='text-xl font-medium py-2 text-purple-700'>Give Your Feedback</h1>
                    <textarea ref={textref} placeholder='write feedback' className='border-2 p-2 w-full rounded-md' name="" id="" cols="30" rows="5"></textarea>
                    <button onClick={() => handleFeedback(selectedClassId)} className='btn btn-success w-1/2 mt-2 text-white'>Send</button>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor Detail</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((sClass, index) => <tr
                                className='hover'
                                key={sClass._id}
                            >
                                <td>{index + 1}</td>
                                <td><img className='h-12 w-12 rounded-full' src={sClass.photo} alt="" /> </td>
                                <td>{sClass.class}</td>
                                <td>
                                    <p className='font-medium text-xl'>{sClass.instructorName}</p>
                                    <p> {sClass.email}</p>
                                </td>

                                <td>{sClass.seats}</td>
                                <td>{sClass.price}</td>
                                <td className='text-red-400 font-medium'>{sClass.status}</td>
                                <td className='flex items-center gap-3'>
                                    <button onClick={() => handleApprove(sClass._id)} className="btn btn-success">Approve</button>
                                    <button onClick={() => handleDeny(sClass._id)} className="btn btn-warning">Deny</button>
                                    <button className="btn" onClick={() => { setSelectedClassId(sClass._id); window.my_modal_2.showModal() }}>Feedback</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
                <Toaster></Toaster>
            </div>
        </div>
    );
};

export default ManageClasses;