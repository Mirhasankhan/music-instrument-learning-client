import React, { useRef, useState } from 'react';
import  toast,{ Toaster } from 'react-hot-toast';
import img from '../assets/guitar2.avif'

const StatusTab = ({ status }) => {
    const classref = useRef()
    const seatsRef = useRef()
    const [selectedClassId, setSelectedClassId] = useState('');

    if(status.length <1){
        return <h1 className='text-red-500 text-2xl font-medium'>No Class Added Here!!</h1>
    }

    const handleClassUpdate = (id) => {
        const classValue = classref.current.value;
        const seatsValue = seatsRef.current.value
        const results = { class: classValue, seats: seatsValue }       
        fetch(`https://music-instrument-learning-server-seven.vercel.app/myClasses/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(results)
        })
            .then(data => {
                if (data.status === 200) {
                    toast.success('Class Updated!!', {
                        position: 'bottom-left',
                        style: { backgroundColor: 'red', color: 'white' }
                    })                   
                }
            })
    }
    return (
        <div>
            <dialog id="my_modal_2" className="modal">
                <div method="dialog" className="modal-box">
                    <h1 className='text-xl font-medium py-2 text-purple-700'>Update Your Class</h1>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Class name</span>                            
                        </label>
                        <input required ref={classref} type="text" placeholder="class" className="input input-bordered w-full max-w-xs" />                        
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Available Seats</span>                            
                        </label>
                        <input required ref={seatsRef} type="number" placeholder="seats" className="input input-bordered w-full max-w-xs" />                        
                    </div>
                    <button onClick={() => handleClassUpdate(selectedClassId)} className='btn btn-success w-1/2 mt-2 text-white'>Confirm Update</button>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 mx-16'>
                {
                    status.map(approved => <div
                        key={approved._id}
                        className="card w-96 bg-white p-3 border flex flex-col">
                        <figure><img className='w-full h-80 rounded-md' src={approved.photo} alt="Class Image" /></figure>
                        <div className="flex flex-col mt-auto">
                            <h2 className="card-title  font-2xl py-2">Classname: {approved.class}</h2>
                            <p className=' pb-2'>Available Seats: <span className='text-orange-600 text-xl'>{approved.seats}</span></p>
                            {approved.feedback && <p className=' font-xl text-xl'>Admin Feedback: {approved.feedback}</p>}
                            {/* <p>Total enrolled students </p> */}
                            <button className="common-button mt-2" onClick={() => { setSelectedClassId(approved._id); window.my_modal_2.showModal() }}>Update Class</button>
                        </div>
                    </div>)
                }
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default StatusTab;