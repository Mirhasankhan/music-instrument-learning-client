import { Link, NavLink, Outlet } from 'react-router-dom';
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
                        addmin && <ul className="menu p-4 w-64 h-full bg-black text-white">
                            <img className='h-24 w-24 rounded-full mx-auto my-3' src={user?.photoURL} alt="" />
                            <h1 className='py-3 text-center'>{user?.email}</h1>
                            <Link to="/dashboard/adminHome" className='flex items-center p-3  mb-3'>
                                <FaHome className='text-[16px] mr-2' />
                                <p className='text-[16px] font-semibold'>Home</p>
                            </Link>
                            <Link to="/dashboard/allUsers" className='flex items-center p-3 mb-3'>
                                <FaUserPlus className='text-[16px] mr-2' />
                                <p className='text-[16px] font-semibold'>All Users</p>
                            </Link>
                            <Link to="/dashboard/manageClass" className='flex items-center p-3 mb-3'>
                                <FaFileContract className='text-[16px] mr-2' />
                                <p className='text-[16px] font-semibold'>Manage Class</p>
                            </Link>
                           <Link to="/"> <button className='formal-button ml-3'>Back Home</button></Link>
                        </ul>
                    }
                    {
                        instrucor && <ul className="menu p-4 w-64 h-full bg-black text-white">
                            <img className='h-24 w-24 rounded-full mx-auto my-3' src={user?.photoURL} alt="" />
                            <h1 className='py-3 text-center'>{user?.email}</h1>
                            <button className='common-button text-white'>Update Profile</button>
                            <div className="divider"></div>                       
                            <Link to="/dashboard/instructorHome" className='flex items-center p-3'>
                                <FaHome className='text-[16px] mr-2' />
                                <p className='text-white text-[16px] font-semibold'>Home</p>
                            </Link>
                            <Link to="/dashboard/addClass" className='flex items-center p-3'>
                                <FaRegPlusSquare className='text-[16px] mr-2' />
                                <p className='text-white text-[16px] font-semibold'>Add Class</p>
                            </Link>
                            <Link to="/dashboard/myClasses" className='flex items-center p-3 mb-3'>
                                <FaFileContract className='text-[16px] mr-2' />
                                <p className='text-white text-[16px] font-semibold'>My Classes</p>
                            </Link>
                            <Link to="/"> <button className='formal-button ml-3'>Back Home</button></Link>
                        </ul>
                    }
                    {
                        isStudent &&
                        <ul className="menu p-4 w-64 h-full bg-slate-200 font-semibold">
                            <img className='h-24 w-24 rounded-full mx-auto my-3' src={user?.photoURL} alt="" />
                            <h1 className='text-[16px] my-2 text-center'>{user?.email}</h1>
                            <button className='common-button text-white'>Update Profile</button>
                            <div className="divider"></div>
                            {/* <Link to="/dashboard/studentHome" className='flex items-center p-3 mb-3'>
                                <FaHome className='text-[16px] mr-2' />
                                <p className='text-[16px] font-semibold'>Student Home</p>
                            </Link> */}
                            <NavLink to="/dashboard/studentHome" className={({ isActive }) => `${isActive ? "text-sky-400" : ""} flex items-center p-3 mb-3`}>
                                <FaHome className='text-[16px] mr-2' />
                                <p className='text-[16px] font-semibold'>Student Home</p>
                            </NavLink>
                            <NavLink to="/dashboard/selected" className={({ isActive }) => `${isActive ? "text-sky-400" : ""} flex items-center p-3 mb-3`}>
                                <FaRegPlusSquare className='text-[16px] mr-2' />
                                <p className='text-[16px] font-semibold'>Selected Classes</p>
                            </NavLink>
                            <NavLink to="/dashboard/enrolled" className={({ isActive }) => `${isActive ? "text-sky-400" : ""} flex items-center p-3 mb-3`}>
                                <FaFileContract className='text-[16px] mr-2' />
                                <p className='text-[16px] font-semibold'>Enrolled Classes</p>
                            </NavLink>
                            <NavLink to="/classes" className={({ isActive }) => `${isActive ? "text-sky-400" : ""} flex items-center p-3 mb-3`}>
                                <FaFileContract className='text-[16px] mr-2' />
                                <p className='text-[16px] font-semibold'>Classes</p>
                            </NavLink>
                            <Link to="/"> <button className='formal-button ml-3'>Back Home</button></Link>
                        </ul>
                    }
                </div>
            </div>
        </div >
    );
};

export default Dashboard;