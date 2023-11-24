'use client';

import { Sidebar } from 'flowbite-react';
import { FaFile, FaMoneyBill, FaTruckLoading, FaUser, FaUsers } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {

    // TODO: get admin value from db
    const isAdmin = true;
    return (
        <div className='flex flex-col  lg:flex-row  gap-6 min-h-screen lg:w-[1400px] mx-auto'>
            <div className='w-64'>
                <Sidebar aria-label="Default sidebar example">
                    <Sidebar.Items className='min-h-[calc(100vh-40px)] bg-blue-200'>
                        <Sidebar.ItemGroup>

                            {/* admin menu */}
                            {
                                isAdmin ?
                                    <>
                                        <Link to={'/dashboard/all-employee-list'}>
                                            <Sidebar.Item icon={FaUsers}>
                                                All Employee List
                                            </Sidebar.Item>
                                        </Link>
                                    </> :
                                    <>

                                    </>
                            }


                            {/* hr menu */}
                            <Link to={'/dashboard/employee-list'}>
                                <Sidebar.Item icon={FaUsers}>
                                    Employee List
                                </Sidebar.Item>
                            </Link>
                            <Link to={'/dashboard/employee-details'}>
                                <Sidebar.Item icon={FaUser}>
                                    Employee Details
                                </Sidebar.Item>
                            </Link>
                            <Link to={'/dashboard/progress'}>
                                <Sidebar.Item icon={FaTruckLoading}>
                                    Progress
                                </Sidebar.Item>
                            </Link>

                            {/* employee menu */}
                            <Link to={'/dashboard/payment-history'}>
                                <Sidebar.Item icon={FaMoneyBill}>
                                    Payment History
                                </Sidebar.Item>
                            </Link><Link to={'/dashboard/work-sheet'}>
                                <Sidebar.Item icon={FaFile}>
                                    Work Sheet
                                </Sidebar.Item>
                            </Link>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;

