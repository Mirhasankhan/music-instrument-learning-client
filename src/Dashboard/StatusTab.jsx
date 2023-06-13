import React, { useRef, useState } from 'react';
import  toast,{ Toaster } from 'react-hot-toast';

const StatusTab = ({ status }) => {
    const classref = useRef()
    const seatsRef = useRef()
    const [selectedClassId, setSelectedClassId] = useState('');

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
                        <input ref={classref} type="text" placeholder="class" className="input input-bordered w-full max-w-xs" />                        
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Available Seats</span>                            
                        </label>
                        <input ref={seatsRef} type="number" placeholder="seats" className="input input-bordered w-full max-w-xs" />                        
                    </div>
                    <button onClick={() => handleClassUpdate(selectedClassId)} className='btn btn-success w-1/2 mt-2 text-white'>Confirm Update</button>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                {
                    status.map(approved => <div
                        key={approved._id}
                        className="card w-96 bg-orange-200 shadow-xl">
                        <figure><img className='w-full h-64' src={approved.photo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{approved.class}</h2>
                            <p>{approved.seats}</p>
                            <p>{approved?.feedback || ''}</p>
                            <p>Total enrolled students todo</p>
                            <button className="btn" onClick={() => { setSelectedClassId(approved._id); window.my_modal_2.showModal() }}>Update Class</button>
                        </div>
                    </div>)
                }
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default StatusTab;