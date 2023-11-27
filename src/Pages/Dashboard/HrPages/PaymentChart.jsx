import { useQuery } from "@tanstack/react-query";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const PaymentChart = ({ email }) => {

    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${email}`);
            const payments = res.data;
            return payments;
        }
    });

    const chartData = payments.map(payment => ({
        name: payment.date.month, 
        amount: payment.amount, 
    }));    

    return (
        <div className="max-w-lg mx-auto">
            {/* <ResponsiveContainer width="100%" height="100%"> */}
                <BarChart
                    width={500}
                    height={300}
                    data={chartData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={40}
                >
                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="amount" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
            {/* </ResponsiveContainer> */}
        </div>
    );
};

export default PaymentChart;