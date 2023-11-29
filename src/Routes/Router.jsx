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
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import Services from "../Pages/Home/Services/Services";
import Faq from "../Pages/Faq/Faq";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/contact',
                element: <ContactUs />
            },
            {
                path: '/faq',
                element: <Faq />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: "/dashboard",
                element: <DashboardHome></DashboardHome>
            },
            // hr specific routes
            {
                path: 'employee-list',
                element: <EmployeeList />,
            },
            {
                path: 'employee-details/:id',
                element: <EmployeeDetails />,
                loader: ({params}) => fetch(`https://team-tracker-server.vercel.app/users/hr/${params.id}`)
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