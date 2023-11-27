import { Button } from "flowbite-react";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <>
        <div className="flex justify-center items-center">
            <img src="https://i.ibb.co/y4rbXVd/page-found-concept-illustration-114360-1869.jpg" alt="" />
        </div>
        <Link className="flex justify-center" to={'/'}><Button className="bg-blue-500">Go Home</Button></Link>
        </>
    );
};

export default ErrorPage;