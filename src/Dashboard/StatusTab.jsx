import React from 'react';

const StatusTab = ({status}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            {
                status.map(approved => <div
                    key={approved._id}
                    className="card w-96 bg-orange-200 shadow-xl">
                    <figure><img className='w-full h-64' src={approved.photo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{approved.class}</h2>
                        <p>{approved.seats}</p>
                        <p>todo feedback will come here</p>

                    </div>
                </div>)
            }
        </div>
    );
};

export default StatusTab;