import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import SectionTitle from "../../../Components/Shared/SectionTitle";
import { Table } from "flowbite-react";


const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user.email}`);
            const payments = res.data;
            return payments;
        }
    });

    const sortedPayments = payments.slice().sort((a, b) => {
        // Extract month and year from the date string (assuming date.month and date.year are present)
        const [monthA, yearA] = a.date.month.split(' ');
        const [monthB, yearB] = b.date.month.split(' ');

        // Convert month names to numeric values for comparison
        const monthOrder = {
            'jan': 1,
            'feb': 2,
            'mar': 3,
            'april': 4,
            'may': 5,
            'june': 6,
            'july': 7,
            'aug': 8,
            'sept': 9,
            'oct': 10,
            'nov': 11,
            'dec': 12,
        };

        // Compare years first
        if (yearA !== yearB) {
            return parseInt(yearA, 10) - parseInt(yearB, 10);
        }

        // If the years are the same, compare months
        return monthOrder[monthB] - monthOrder[monthA];
    });


    return (
        <div>
            <SectionTitle heading={'Payment History'}></SectionTitle>

            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Index</Table.HeadCell>
                        <Table.HeadCell>Employee Name</Table.HeadCell>
                        <Table.HeadCell>Salary</Table.HeadCell>
                        <Table.HeadCell>Month</Table.HeadCell>
                        <Table.HeadCell>Transaction Id</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            sortedPayments.map((payment, index) =>
                                <Table.Row key={payment._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell>{index + 1}</Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {user.displayName}
                                    </Table.Cell>
                                    <Table.Cell>{payment.amount}</Table.Cell>
                                    <Table.Cell>
                                        {payment.date.month}, {payment.date.year}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {payment.transactionId}
                                    </Table.Cell>
                                </Table.Row>
                            )
                        }
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default PaymentHistory;