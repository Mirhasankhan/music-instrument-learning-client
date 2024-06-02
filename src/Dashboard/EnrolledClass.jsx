import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import { Helmet } from "react-helmet-async";

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
        <div className="px-6">
            <Helmet>
                <title>Dashboard | Enrolled Class</title>
            </Helmet>
            <h1 className='selected-class animate__animated animate__backInRight'>My Enrolled Classes</h1>
            {
                enrolled.length > 0 ? <div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            <thead>
                                <tr className='bg-purple-600 text-white font-medium'>
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
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div> : <h1 className='text-red-500 text-center mt-24 text-4xl'>No class Enrolled yet</h1>
            }
        </div>
    );
};

export default EnrolledClass;