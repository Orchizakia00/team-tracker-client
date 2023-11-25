'use client';

import { Sidebar } from 'flowbite-react';
import { FaFile, FaMoneyBill, FaTruckLoading, FaUser, FaUsers } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import useHR from '../../Hooks/useHR';
import useEmployee from '../../Hooks/useEmployee';

const Dashboard = () => {

    const [isAdmin] = useAdmin();
    const [isHr] = useHR();
    const [isEmployee] = useEmployee();
    return (
        <div className='flex flex-col  lg:flex-row  gap-6 min-h-screen lg:w-[1400px] mx-auto'>
            <div className='w-64'>
                <Sidebar aria-label="Default sidebar example">
                    <Sidebar.Items className='min-h-full bg-blue-200'>
                        <Sidebar.ItemGroup>

                            {/* admin menu */}
                            {
                                isAdmin &&
                                <>
                                    <Link to={'/dashboard/all-employee-list'}>
                                        <Sidebar.Item icon={FaUsers}>
                                            All Employee List
                                        </Sidebar.Item>
                                    </Link>
                                </>
                            }

                            {
                                isHr &&
                                <>
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
                                </>
                            }

                            {
                                isEmployee &&
                                <>
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
                                </>
                            }


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

