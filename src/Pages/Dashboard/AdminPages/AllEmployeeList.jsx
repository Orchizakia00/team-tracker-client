import { useQuery } from "@tanstack/react-query";
import { Button, Table } from "flowbite-react";
import { FaFire, FaUser } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";


const AllEmployeeList = () => {

    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('users', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            });
            return res.data;
        }
    });

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    toast.success(`${user.name} is an Admin now!`)
                }
            })
    }

    const handleDelete = user => {
        toast.custom((t) => (
            <div
                className={`${t.visible ? 'animate-enter' : 'animate-leave'
                    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
                <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                        <div className="ml-3 flex-1">
                            <p className="mt-1 text-sm text-gray-500">
                                Are you sure you want to delete?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex border-l border-gray-200">
                    <button
                        onClick={() => {
                            toast.dismiss(t.id);
                            // Handle deletion logic here
                            axiosSecure.delete(`/users/${user._id}`)
                                .then(res => {
                                    if (res.data.deletedCount > 0) {
                                        refetch();
                                        toast.success('User has been deleted successfully');
                                    }
                                })
                        }}
                        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Yes
                    </button>
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-full border border-transparent rounded-none p-4 flex items-center justify-center text-sm font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        ));
    }

    return (
        <div>
            <div className="flex justify-evenly my-5">
                <h2 className="text-4xl font-bold flex-1">All Users</h2>
                <h2 className="text-4xl font-bold flex-1">Total Users: {users.length}</h2>
            </div>

            <div>
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Index</Table.HeadCell>
                        <Table.HeadCell>Employee Name</Table.HeadCell>
                        <Table.HeadCell>Designation</Table.HeadCell>
                        <Table.HeadCell>Role</Table.HeadCell>
                        <Table.HeadCell>Action</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            users.map((user, index) =>
                                <Table.Row key={user._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell>{index + 1}</Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {user.name}
                                    </Table.Cell>
                                    <Table.Cell>Sliver</Table.Cell>
                                    <Table.Cell>
                                        {user.role === 'admin' ? "Admin" : <Button onClick={() => handleMakeAdmin(user)} className="text-blue-600 bg-white hover:text-white">
                                            <FaUser size={20} />
                                        </Button>}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Button onClick={() => handleDelete(user)} className="text-red-600 bg-white hover:text-white">
                                            <FaFire size={20}></FaFire>
                                        </Button>
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

export default AllEmployeeList;