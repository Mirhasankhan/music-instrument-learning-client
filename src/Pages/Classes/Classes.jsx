import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../Hooks/useAuth';
import toast,{ Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import useUsers from '../../Hooks/useUsers';

const Classes = () => {    
    const {user} = useAuth()
    const [users] = useUsers()
    const addmin = users?.find(check => check.role === 'admin' && check.email === user?.email)
    const instrucor = users?.find(check => check.role === 'instructor' && check.email === user?.email)

  
    const { data: approvedClasses = [] } = useQuery({
        queryKey: ['approved'],
        queryFn: async () => {
            const res = await fetch('https://music-instrument-learning-server-seven.vercel.app/classes?status=approved')
            return res.json()
        }
    })

    const handleSelectClass = (service)=>{
        if(!addmin && !instrucor && user?.email){
            const selectedClass = {sellerEmail: service.email, email: user?.email, class: service.class, price: service.price, sellerName: service.instructorName}
        //    todo 
            fetch(`https://music-instrument-learning-server-seven.vercel.app/selected`,{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
            .then(res => res.json())
            .then(data =>{
                toast.success('Class Selected successfully', {
                    position: 'top-right',
                    style: { backgroundColor: 'blue', color: 'white' }
                })
            })
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You need to login as Student'                
              })
        }
       
    }

    return (
        <div>
            <Helmet>
                <title>TuneTutor | Classes</title>
            </Helmet>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-3 gap-3'>                
                {
                    approvedClasses.map(approved => <div 
                        key={approved._id}
                    className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img className='h-32 w-32' src={approved.photo} alt="Album" /></figure>
                        <div className={`card-body ${approved.seats == 0 ? 'bg-red-500' :'bg-green-400'} `}>
                            <h2 className="card-title">{approved.class}</h2>
                            <p>{approved.instructorName}</p>
                            <p>{approved.seats}</p>
                            <p>{approved.price}</p>
                            <div className="card-actions justify-end">
                                <button disabled={addmin || instrucor || approved.seats == 0 ? true : false} onClick={()=>handleSelectClass(approved)} className="btn btn-primary">Select Class</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Classes;