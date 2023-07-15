import { Navigate } from "react-router-dom";
import useUserrole from "../Hooks/useUserrole";

const StudentRoute = ({ children }) => {
    const [addmin, instrucor, isStudent, isLoading] = useUserrole()
    if (isLoading) {
        return <div className="flex justify-center h-96 items-center"><span className="loading loading-spinner text-secondary"></span></div>
    }
    if (isStudent) {
        return children
    }
    return <Navigate to="/"></Navigate>
};

export default StudentRoute;