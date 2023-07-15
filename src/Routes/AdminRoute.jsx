import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth"
import useUserrole from "../Hooks/useUserrole";

const AdminRoute = ({children}) => {
    const {user} = useAuth()
    const  [addmin, instrucor, isStudent, isLoading] = useUserrole()
    if(isLoading){
        return <span className="loading loading-spinner text-secondary"></span>
    }
    if(addmin){
        return children
    }
    return <Navigate to="/"></Navigate>
};

export default AdminRoute;