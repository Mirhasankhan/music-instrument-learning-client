import { Link, Outlet } from 'react-router-dom';
import useUserrole from '../Hooks/useUserrole';

const Dashboard = () => {  
    const [addmin, instrucor, isStudent] = useUserrole()

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    {
                        addmin && <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                            <Link to="/dashboard/adminHome">Home</Link>
                            <Link to="/dashboard/allUsers">All Users</Link>
                            <Link to="/dashboard/manageClass">Manage Classes</Link>                            
                        </ul>
                    }
                    {
                        instrucor && <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                            <Link to="/dashboard/instructorHome">Home</Link>
                            <Link to="/dashboard/addClass">Add Class</Link>
                            <Link to="/dashboard/myClasses">My Classes</Link>                          
                        </ul>
                    }
                    {
                        isStudent && <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                            <Link to="/dashboard/studentHome">Home</Link>
                            <Link to="/dashboard/selected">Selected Classes</Link>
                            <Link to="/dashboard/enrolled">Enrolled Classes</Link>                           
                        </ul>
                    }
                </div>
            </div>
        </div >
    );
};

export default Dashboard;