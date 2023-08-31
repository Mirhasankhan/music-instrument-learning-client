import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Lottie from "lottie-react";
import spinner from '../assets/animation_llxinh3q.json'

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()
    if(loading){
        return <div className='flex justify-center items-center'><Lottie style={{ height: '400px', width: '600px' }} animationData={spinner} loop={true} /> </div>
    }

    if(user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}}></Navigate>
};

export default PrivateRoute;