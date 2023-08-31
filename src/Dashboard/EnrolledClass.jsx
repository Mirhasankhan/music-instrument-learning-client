import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";

const EnrolledClass = () => {
    const { user } = useAuth()
    const { data: enrolled = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://music-instrument-learning-server-seven.vercel.app/payments?email=${user?.email}`)
            return res.json()
        }
    })
    
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">                    
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Payment Amount</th>
                            <th>Transaction ID</th>
                        </tr>
                    </thead>
                    <tbody>                        
                        {
                            enrolled.map(en => <tr key={en._id}>
                                <td>{new Date(en.date).toLocaleDateString('en-US')}</td>
                                <td>{en.className}</td>
                                <td>{en.sellerName}</td>
                                <td>${en.price}</td>
                                <td>${en.transactionId}</td>
                            </tr>   )
                        }                     
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClass;