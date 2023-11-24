'use client';

import { Sidebar } from 'flowbite-react';
import { FaMoneyBill, FaTruckLoading, FaUser, FaUsers } from 'react-icons/fa';
import { FcDataSheet } from 'react-icons/fc';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex gap-6'>
            <Sidebar aria-label="Default sidebar example">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        {/* admin menu */}
                        <Link to={'/dashboard/all-employee-list'}>
                            <Sidebar.Item icon={FaUsers}>
                                All Employee List
                            </Sidebar.Item>
                        </Link>

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
                            <Sidebar.Item icon={FcDataSheet}>
                                Work Sheet
                            </Sidebar.Item>
                        </Link>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;

