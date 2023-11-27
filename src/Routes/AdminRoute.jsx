import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import { Spinner } from "flowbite-react";


const AdminRoute = ({ children }) => {

    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Spinner className="text-center" aria-label="Default status example" />;
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to={'/'} state={{ from: location }} replace></Navigate>
};

export default AdminRoute;