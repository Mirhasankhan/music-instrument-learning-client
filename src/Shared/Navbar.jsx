import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import useAuth from '../Hooks/useAuth';


const Navbar = () => {
    const {user, logOut} = useAuth()   
    const [open, setOpen] = useState(false)

    const handleLogout = ()=>{
        logOut()
        .then(()=>{})
        .catch(()=>{})
    }

    return (
        <div>
            <div className="navbar bg-blue-500">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-2xl">TuneTutor</a>
                </div>
                <div className="hidden md:block flex-none">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        <Link className='hover:text-green-400 text-xl' to="/">Home</Link>
                        <Link className='hover:text-green-400 text-xl' to="/">Instructors</Link>
                        <Link className='hover:text-green-400 text-xl' to="/classes">Classes</Link>
                        <Link className='hover:text-green-400 text-xl' to="/dashboard">Dashboard</Link>
                        {
                            user?.email ? <><img className='h-12 rounded-full' src={user.photoURL} alt="" /> 
                            <button onClick={handleLogout} className="btn btn-sm">Logout</button></> 
                            : <Link to="/login"><button className='btn btn-sm'>Login</button></Link>
                        }
                    </ul>
                </div>
                <div className='md:hidden relative'>
                    <FaBars onClick={()=>setOpen(!open)}></FaBars>
                    {
                        open &&
                        <div className="flex-none">
                            <ul className="flex flex-col p-3 absolute top-10 right-0 bg-yellow-400">
                                <Link className='hover:text-green-400 text-xl' to="/">Home</Link>
                                <Link className='hover:text-green-400 text-xl' to="/">Instructors</Link>
                                <Link className='hover:text-green-400 text-xl' to="/classes">Classes</Link>
                                <Link className='hover:text-green-400 text-xl' to="/dashboard">Dashboard</Link>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;