import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import EmployeeList from "../Pages/Dashboard/HrPages/EmployeeList";
import EmployeeDetails from "../Pages/Dashboard/HrPages/EmployeeDetails";
import Progress from "../Pages/Dashboard/HrPages/Progress";
import AllEmployeeList from "../Pages/Dashboard/AdminPages/AllEmployeeList";
import PaymentHistory from "../Pages/Dashboard/EmployeePages/PaymentHistory";
import WorkSheet from "../Pages/Dashboard/EmployeePages/WorkSheet";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <PrivateRoute><ContactUs /></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            // hr specific routes
            {
                path: 'employee-list',
                element: <EmployeeList />,
                loader: () => fetch('http://localhost:5000/users')
            },
            {
                path: 'employee-details',
                element: <EmployeeDetails />,
            },
            {
                path: 'progress',
                element: <Progress />,
            },

            // admin specific routes
            {
                path: 'all-employee-list',
                element: <AdminRoute><AllEmployeeList /></AdminRoute>,
            },

            // employee specific routes
            {
                path: 'payment-history',
                element: <PaymentHistory />,
            },
            {
                path: 'work-sheet',
                element: <WorkSheet />,
            }

        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }
]);

export default router;