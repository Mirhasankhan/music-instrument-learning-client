import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    const isStudent = false
    const isInstructor = false
    const isAdmin =true

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
                        isAdmin && <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                            <Link to="/dashboard/allUsers">All Users</Link>
                            <Link to="/dashboard/manageClass">Manage Classes</Link>
                            <li><a>Sidebar Item 2</a></li>
                        </ul>
                    }
                    {
                        isInstructor && <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                            <Link to="/dashboard/addClass">Add Class</Link>
                            <Link to="/dashboard/myClasses">My Classes</Link>
                            <li><a>Sidebar Item 2</a></li>
                        </ul>
                    }
                </div>
            </div>
        </div >
    );
};

export default Dashboard;