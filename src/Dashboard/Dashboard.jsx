import { Link, Outlet } from 'react-router-dom';
import useUserrole from '../Hooks/useUserrole';
import { FaHome, FaUserPlus, FaFileContract, FaRegPlusSquare } from 'react-icons/fa';
import useAuth from '../Hooks/useAuth';


const Dashboard = () => {
    const { user } = useAuth()
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
                        addmin && <ul className="menu p-4 w-80 h-full bg-purple-600 text-base-content">
                            <Link to="/dashboard/adminHome" className='flex items-center bg-green-400 p-3 rounded-md mb-3'>
                                <FaHome className='text-xl mr-2' />
                                <p className='text-white text-xl font-medium'>Home</p>
                            </Link>
                            <Link to="/dashboard/allUsers" className='flex items-center bg-green-400 p-3 rounded-md mb-3'>
                                <FaUserPlus className='text-xl mr-2' />
                                <p className='text-white text-xl font-medium'>All Users</p>
                            </Link>
                            <Link to="/dashboard/manageClass" className='flex items-center bg-green-400 p-3 rounded-md mb-3'>
                                <FaFileContract className='text-xl mr-2' />
                                <p className='text-white text-xl font-medium'>Manage Class</p>
                            </Link>
                        </ul>
                    }
                    {
                        instrucor && <ul className="menu p-4 w-80 h-full bg-orange-400 text-base-content">
                            <img className='h-24 w-24 rounded-full mx-auto my-3' src={user.photoURL} alt="" />
                            <button className='btn btn-success text-white'>Update Profile</button>
                            <div className="divider"></div>
                            <Link to="/dashboard/instructorHome" className='flex items-center bg-purple-400 p-3 rounded-md mb-3'>
                                <FaHome className='text-xl mr-2' />
                                <p className='text-white text-xl font-medium'>Home</p>
                            </Link>
                            <Link to="/dashboard/addClass" className='flex items-center bg-purple-400 p-3 rounded-md mb-3'>
                                <FaRegPlusSquare className='text-xl mr-2' />
                                <p className='text-white text-xl font-medium'>Add Class</p>
                            </Link>
                            <Link to="/dashboard/myClasses" className='flex items-center bg-purple-400 p-3 rounded-md mb-3'>
                                <FaFileContract className='text-xl mr-2' />
                                <p className='text-white text-xl font-medium'>My Classes</p>
                            </Link>
                        </ul>
                    }
                    {
                        isStudent &&
                        <ul className="menu p-4 w-80 h-full bg-orange-400 text-base-content">
                            <img className='h-24 w-24 rounded-full mx-auto my-3' src={user.photoURL} alt="" />
                            <button className='btn btn-success text-white'>Update Profile</button>
                            <div className="divider"></div>
                            <Link to="/dashboard/studentHome" className='flex items-center bg-purple-400 p-3 rounded-md mb-3'>
                                <FaHome className='text-xl mr-2' />
                                <p className='text-white text-xl font-medium'>Home</p>
                            </Link>
                            <Link to="/dashboard/selected" className='flex items-center bg-purple-400 p-3 rounded-md mb-3'>
                                <FaRegPlusSquare className='text-xl mr-2' />
                                <p className='text-white text-xl font-medium'>Selected Classes</p>
                            </Link>
                            <Link to="/dashboard/enrolled" className='flex items-center bg-purple-400 p-3 rounded-md mb-3'>
                                <FaFileContract className='text-xl mr-2' />
                                <p className='text-white text-xl font-medium'>Enrolled Classes</p>
                            </Link>
                        </ul>
                    }
                </div>
            </div>
        </div >
    );
};

export default Dashboard;