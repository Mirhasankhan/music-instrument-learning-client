import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import useAuth from '../Hooks/useAuth';
import useUserrole from '../Hooks/useUserrole';
import logo from '../assets/tutorlogo.jpg'


const Navbar = () => {
    const { user, logOut } = useAuth()
    const [open, setOpen] = useState(false)
    const [addmin, instrucor, isStudent] = useUserrole()

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }

    return (
        <div>
            <div className="navbar bg-purple-500 items-center text-white">
                <div className="flex-1">
                    <img className='rounded-full h-12 md:h-16' src={logo} alt="" />
                    <h1 className="btn btn-ghost normal-case text-2xl text-white italic">TuneTutor</h1>
                </div>
                <div className="hidden md:block flex-none items-center">
                    <ul className="menu menu-horizontal px-1 gap-6 items-center">
                        <Link className='hover:text-red-400 text-xl' to="/">Home</Link>
                        <Link className='hover:text-red-400 text-xl' to="/instructors">Instructors</Link>
                        <Link className='hover:text-red-400 text-xl' to="/classes">Classes</Link>
                        {
                            user?.email && <Link className='hover:text-green-400 text-xl' to={addmin ? '/dashboard/adminHome' : instrucor ? '/dashboard/instructorHome' : '/dashboard/studentHome'}>Dashboard</Link>
                        }
                        {
                            user?.email ? <><img className='h-12 rounded-full' src={user.photoURL} alt="" />
                                <button onClick={handleLogout} className="btn btn-error text-white">Logout</button></>
                                : <Link to="/login"><button className='btn btn-success text-white'>Login</button></Link>
                        }
                    </ul>
                </div>
                <div className='md:hidden relative'>
                    <FaBars onClick={() => setOpen(!open)}></FaBars>
                    {
                        open &&
                        <div className="flex-none z-10">
                            <ul className="flex flex-col p-3 absolute top-10 right-0 bg-yellow-400">
                                <Link className='hover:text-green-400 text-xl' to="/">Home</Link>
                                <Link className='hover:text-green-400 text-xl' to="/instructors">Instructors</Link>
                                <Link className='hover:text-green-400 text-xl' to="/classes">Classes</Link>
                                {
                                    user?.email && <Link className='hover:text-green-400 text-xl' to={addmin ? '/dashboard/adminHome' : instrucor ? '/dashboard/instructorHome' : '/dashboard/studentHome'}>Dashboard</Link>
                                }
                                {
                                    user?.email ? <><img className='h-12 rounded-full' src={user.photoURL} alt="" />
                                        <button onClick={handleLogout} className="btn btn-error text-white">Logout</button></>
                                        : <Link to="/login"><button className='btn btn-success text-white'>Login</button></Link>
                                }
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;