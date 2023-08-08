import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"

const useUsers = ()=>{
    const {user} = useAuth()
    const { data: users = [] } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch('https://music-instrument-learning-server-seven.vercel.app/users')
            return res.json()
        }        
    })
    return [users]
}
export default useUsers;