import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { Spinner } from "flowbite-react";


const PrivateRoute = ({ children }) => {

    const location = useLocation();
    const { user, loading } = useAuth();

    if (loading) {
        return <Spinner aria-label="Default status example" />
    }

    if (user) {
        return children;
    }

    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};

export default PrivateRoute;