import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Dashboard = () => {
    const [checkUser, setCheckUser] = useState()
    const { user, loading } = useAuth()

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setCheckUser(data))
    }, [])
    const addmin = checkUser?.find(check => check.role === 'admin' && check.email === user?.email)
    const instrucor = checkUser?.find(check => check.role === 'instructor' && check.email === user?.email)
    const isStudent = checkUser?.find(check => check.role !== 'admin' && check.email === user?.email) 

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    {
                        addmin && <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                            <Link to="/dashboard/allUsers">All Users</Link>
                            <Link to="/dashboard/manageClass">Manage Classes</Link>
                            <li><a>Sidebar Item 2</a></li>
                        </ul>
                    }
                    {
                        instrucor && <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                            <Link to="/dashboard/addClass">Add Class</Link>
                            <Link to="/dashboard/myClasses">My Classes</Link>
                            <li><a>Sidebar Item 2</a></li>
                        </ul>
                    }
                    {
                        isStudent && <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                            <Link to="/dashboard/selected">Selected Classes</Link>
                            <Link to="/dashboard/enrolled">Enrolled Classes</Link>
                            <li><a>Sidebar Item 2</a></li>
                        </ul>
                    }
                </div>
            </div>
        </div >
    );
};

export default Dashboard;