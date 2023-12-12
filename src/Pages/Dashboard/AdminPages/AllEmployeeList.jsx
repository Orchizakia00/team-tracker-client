import { useQuery } from "@tanstack/react-query";
import { Button, Card, Table } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaFire, FaUser } from "react-icons/fa";
import SectionTitle from "../../../Components/Shared/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const AllEmployeeList = () => {

    const axiosSecure = useAxiosSecure();
    const [viewMode, setViewMode] = useState('table');

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('users');
            return res.data;
        }
    });

    const handleMakeHR = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    toast.success(`${user.name} is a HR now!`)
                }
            })
    }

    const handleFire = user => {
        toast.custom((t) => (
            <div
                className={`${t.visible ? 'animate-enter' : 'animate-leave'
                    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
                <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                        <div className="ml-3 flex-1">
                            <p className="mt-1 text-sm text-gray-500">
                                Are you sure you want to fire?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex border-l border-gray-200">
                    <button
                        onClick={() => {
                            toast.dismiss(t.id);
                            axiosSecure.patch(`/users/${user._id}`)
                                .then(res => {
                                    console.log(res.data);
                                    if (res.data.modifiedCount > 0) {
                                        refetch();
                                        toast.success(`${user.name} is Fired!`)
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

    const renderCardView = () => {
        return (
            <div className="flex flex-wrap">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {
                        users.map((user) =>
                            <Card key={user._id} className="w-80 h-56">
                                <div className="flex justify-between">
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {user.name}
                                    </h5>
                                    <span className="text-lg text-gray-500">Role: {user?.role}</span>
                                </div>

                                <div className="flex justify-between mt-16">
                                    <p>Make HR: <span> {user.role === 'HR' ? "HR" : <Button onClick={() => handleMakeHR(user)} className="text-blue-600 bg-white hover:text-white">
                                        <FaUser size={20} />
                                    </Button>}</span></p>

                                    <p>Action: <span>{user.action === 'fired' ? "Fired" : <Button onClick={() => handleFire(user)} className="text-red-600 bg-white hover:text-white">
                                        <FaFire size={20}></FaFire>
                                    </Button>}</span></p>
                                </div>

                            </Card>
                        )
                    }

                </div>

            </div>

        );
    };

    return (
        <div>
            <SectionTitle heading={'All Employees'} subHeading={`Total Employees: ${users.length}`}></SectionTitle>

            <Button className="mb-6" onClick={() => setViewMode(prevMode => (prevMode === 'table' ? 'card' : 'table'))}>
                {viewMode === 'table' ? 'Card View' : 'Table View'}
            </Button>


            <div className="mb-20 overflow-x-auto">
                {
                    viewMode === 'table' ? (
                        <Table hoverable>
                            <Table.Head>
                                <Table.HeadCell>Index</Table.HeadCell>
                                <Table.HeadCell>Employee Name</Table.HeadCell>
                                <Table.HeadCell>Designation</Table.HeadCell>
                                <Table.HeadCell>Make HR</Table.HeadCell>
                                <Table.HeadCell>Action</Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {
                                    users.map((user, index) =>
                                        <Table.Row key={user._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell>{index + 1}</Table.Cell>
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {user.name}
                                            </Table.Cell>
                                            <Table.Cell>{user?.role}</Table.Cell>
                                            <Table.Cell>
                                                {/* {user.role === 'HR' ? "HR" : <Button onClick={() => handleMakeHR(user)} className="text-blue-600 bg-white hover:text-white">
                                                    <FaUser size={20} />
                                                </Button>} */}
                                                {user.role === 'admin' ? (
                                                    <>Admin</>
                                                ) : user.role === 'HR' ? (
                                                    <>HR</>
                                                ) : (
                                                    <>
                                                        {user.role !== 'HR' && (
                                                            <Button
                                                                onClick={() => handleMakeHR(user)}
                                                                className="text-blue-600 bg-white hover:text-white"
                                                            >
                                                                <FaUser size={20} />
                                                            </Button>
                                                        )}
                                                    </>
                                                )}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {user.action === 'fired' ? "Fired" : <Button onClick={() => handleFire(user)} className="text-red-600 bg-white hover:text-white">
                                                    <FaFire size={20}></FaFire>
                                                </Button>}
                                            </Table.Cell>
                                        </Table.Row>
                                    )
                                }
                            </Table.Body>
                        </Table>
                    ) : (
                        // <CardView></CardView>
                        renderCardView()
                    )
                }
            </div>
        </div>
    );
};

export default AllEmployeeList;