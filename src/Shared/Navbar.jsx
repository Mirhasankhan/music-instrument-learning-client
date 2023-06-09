import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AuthContext } from '../Providers/AuthProvider';


const Navbar = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className="navbar bg-red-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-2xl">TuneTutor</a>
                </div>
                <div className="hidden md:block flex-none">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        <Link className='hover:text-green-400 text-xl' to="/">Home</Link>
                        <Link className='hover:text-green-400 text-xl' to="/">Instructors</Link>
                        <Link className='hover:text-green-400 text-xl' to="/classes">Classes</Link>
                        <Link className='hover:text-green-400 text-xl' to="/dashboard">Dashboard</Link>
                        <Link className='hover:text-green-400 text-xl' to="/login">Login</Link>
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