import { Navigate } from "react-router-dom";
import useUserrole from "../Hooks/useUserrole";

const AdminRoute = ({children}) => { 
    const  [addmin, instrucor, isStudent, isLoading] = useUserrole()
    if(isLoading){
        return <div className="flex justify-center h-96 items-center"><span className="loading loading-spinner text-secondary"></span></div>
    }
    else if(addmin){
        return children
    }
    else if(instrucor || isStudent){
        return <Navigate to="/"></Navigate>
    }
};

export default AdminRoute;