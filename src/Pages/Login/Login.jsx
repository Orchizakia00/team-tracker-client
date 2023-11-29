import { useQuery } from "@tanstack/react-query";
import { Button, Label, TextInput } from "flowbite-react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const Login = () => {

    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();

    const { data: employees = [] } = useQuery({
        queryKey: ['employees'],
        queryFn: async () => {
            const res = await axiosPublic.get('users/employee');
            return res.data;
        }
    });

    const from = location.state?.from.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email, password)
            .then(result => {
                const user = result.user;

                const firedEmployee = employees.find((employee) => employee.email === email && employee.action === 'fired');

                if (firedEmployee) {
                    toast.error("You are Fired! Log in not allowed.");
                    return;
                }

                console.log(user);
                toast.success("User Logged In Successfully!")
                navigate(from, { replace: true });
            })
    }

    return (
        <div className="flex flex-col lg:flex-row my-10 lg:w-[1200px] mx-auto bg-white">
            <div className="flex-1">
                <img src="https://i.ibb.co/7GdMRPn/sign-page-abstract-concept-illustration-335657-2242.jpg" alt="" />
            </div>
            <div className="mt-10 flex-1">
                <h2 className="text-5xl text-center font-bold">Login Now</h2>
                <form onSubmit={handleLogin} className="flex max-w-md mx-auto mt-6 flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput id="email1" name="email" type="email" placeholder="Email" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput id="password1" name="password" type="password" placeholder="Password" required />
                    </div>
                    <Button type="submit">Login</Button>
                </form>
                <p className="text-center mt-6">Do not have an account? Please <Link to={'/register'}><span className="text-blue-600 font-bold">Register</span></Link></p>
            </div>
        </div>
    );
};

export default Login;