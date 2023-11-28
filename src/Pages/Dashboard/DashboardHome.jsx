import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaUserAlt, FaUserFriends, FaUserSlash, FaUsers } from "react-icons/fa";


const DashboardHome = () => {

    const axiosSecure = useAxiosSecure();

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users/employee');
            return res.data;
        }
    })

    const admins = users.filter(user => user.role === 'admin');
    const hr = users.filter(user => user.role === 'HR');
    const employees = users.filter(user => user.role === 'employee');
    const firedEmployees = users.filter(user => user.action === 'fired');

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="shadow-lg border p-10 mt-4 rounded-lg">
                <div className="flex justify-between items-center gap-9">
                    <div className="text-left">
                        <h2 className="text-xl text-slate-400">Total Admins</h2>
                        <p className="text-4xl font-bold text-blue-600">{admins.length}</p>
                    </div>
                    <FaUserAlt color="blue" size={40}></FaUserAlt>
                </div>
            </div>

            <div className="shadow-lg border p-10 mt-4 rounded-lg">
                <div className="flex justify-between items-center gap-8">
                    <div className="text-left">
                        <h2 className="text-xl text-slate-400">Total HRs</h2>
                        <p className="text-4xl font-bold text-blue-600">{hr.length}</p>
                    </div>
                    <FaUserFriends color="blue" size={40}></FaUserFriends>
                </div>
            </div>

            <div className="shadow-lg border p-10 mt-4 rounded-lg">
                <div className="flex justify-between items-center gap-8">
                    <div className="text-left">
                        <h2 className="text-xl text-slate-400">Total Employees</h2>
                        <p className="text-4xl font-bold text-blue-600">{employees.length}</p>
                    </div>
                    <FaUsers color="blue" size={40}></FaUsers>
                </div>
            </div>

            <div className="shadow-lg border p-10 mt-4 rounded-lg">
                <div className="flex justify-between items-center gap-8">
                    <div className="text-left">
                        <h2 className="text-xl text-slate-400">Fired Employees</h2>
                        <p className="text-4xl font-bold text-red-600">{firedEmployees.length}</p>
                    </div>
                    <FaUserSlash color="red" size={40}></FaUserSlash>
                </div>
            </div>

        </div>

    );
};

export default DashboardHome;