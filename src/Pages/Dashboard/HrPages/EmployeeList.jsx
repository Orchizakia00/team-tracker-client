import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/Shared/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Button, Table } from "flowbite-react";
import { FcCheckmark } from "react-icons/fc";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";


const EmployeeList = () => {

    const axiosSecure = useAxiosSecure();

    const { data: employees = [], refetch } = useQuery({
        queryKey: ['employees'],
        queryFn: async () => {
            const res = await axiosSecure.get('users/hr');
            const employees = res.data;
            const filteredEmployees = employees.filter(employee => employee.role === 'employee');
            return filteredEmployees;
        }
    });


    const handleVerify = employee => {
        axiosSecure.patch(`/users/hr/${employee._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    toast.success(`${employee.name} is verified now!`)
                }
            })
    }

    return (
        <div>
            <SectionTitle heading={'Employee List'} />
            <div>
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Index</Table.HeadCell>
                        <Table.HeadCell>Employee Name</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Status</Table.HeadCell>
                        <Table.HeadCell>Bank Account</Table.HeadCell>
                        <Table.HeadCell>Salary</Table.HeadCell>
                        <Table.HeadCell>Pay</Table.HeadCell>
                        <Table.HeadCell>Details</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            employees.map((employee, index) =>
                                <Table.Row key={employee._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell>{index + 1}</Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {employee.name}
                                    </Table.Cell>
                                    <Table.Cell>{employee?.email}</Table.Cell>
                                    <Table.Cell>
                                        {employee.status === 'verified' ? 'Verified' : <Button onClick={() => handleVerify(employee)} className="bg-transparent"> <FcCheckmark size={30} /> </Button>}
                                    </Table.Cell>
                                    <Table.Cell>{employee?.bank}</Table.Cell>
                                    <Table.Cell>${employee?.salary}</Table.Cell>
                                </Table.Row>
                            )
                        }
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default EmployeeList;