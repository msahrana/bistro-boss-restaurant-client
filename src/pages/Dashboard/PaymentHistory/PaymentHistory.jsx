import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const PaymentHistory = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })

    return (
        <section>
            <SectionTitle subHeading="---At a Glance!---" heading="PAYMENT HISTORY"></SectionTitle>
            <div>
                <h2 className="text3-xl">Total Payments: {payments.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead className=" bg-[#D1A054]">
                            <tr>
                                <th>#</th>
                                <th>PRICE</th>
                                <th>TRANSACTION ID</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((payment, index) => <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>${payment.price}</td>
                                <td>{payment.transactionId}</td>
                                <td>{payment.status}</td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default PaymentHistory;