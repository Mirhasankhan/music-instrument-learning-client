import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"

const useAdmin = () => {
    const { user } = useAuth() 
   
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({  
            
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            if (user?.email) {               
                const res = await fetch(`https://music-instrument-learning-server-seven.vercel.app/users/admin/${user?.email}`)
                return res.data.admin
            }
        }
        
    })  
    console.log(isAdmin);
    return [ isAdmin, isAdminLoading ]
}

export default useAdmin