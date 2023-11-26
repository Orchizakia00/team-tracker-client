import { useQuery } from "@tanstack/react-query";
import { Button, Table } from "flowbite-react";
import toast from "react-hot-toast";
import { FcCheckmark, FcViewDetails } from "react-icons/fc";
import SectionTitle from "../../../Components/Shared/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";

const EmployeeList = () => {

    const axiosSecure = useAxiosSecure();

    const { data: employees = [], refetch } = useQuery({
        queryKey: ['employees'],
        queryFn: async () => {
            const res = await axiosSecure.get('users/hr');
            const employees = res.data;
            return employees;
        }
    });

    const handleToggleVerify = (employee) => {
        axiosSecure.patch(`/users/hr/${employee._id}`)
            .then((res) => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    const action = employee.isVerified ? 'unverified' : 'verified';
                    toast.success(`${employee.name} is ${action} now!`);
                }
            });
    };

    return (
        <div>
            <SectionTitle heading={'Employee List'} />
            <div className="mb-16">
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
                                        <div onClick={() => handleToggleVerify(employee)} className="cursor-pointer">
                                            {employee.isVerified === true ? <FcCheckmark size={30} /> : <CgClose className="text-red-700" size={30} />}
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell>{employee?.bank}</Table.Cell>
                                    <Table.Cell>${employee?.salary}</Table.Cell>
                                    <Table.Cell><Button>Pay</Button></Table.Cell>
                                    <Table.Cell><Link to={`/dashboard/employee-details/${employee._id}`}><FcViewDetails size={30} /></Link></Table.Cell>

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