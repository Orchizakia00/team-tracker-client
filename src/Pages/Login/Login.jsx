import { Link, useNavigate } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";
import SocialLogin from "../../Components/Shared/SocialLogin";
import useAuth from "../../Hooks/useAuth";


const Login = () => {

    const { signIn } = useAuth();
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
    }

    return (
        <div className="flex my-10 w-[1200px] mx-auto bg-white">
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
                    <SocialLogin />
                </form>
                <p className="text-center mt-6">Do not have an account? Please <Link to={'/register'}><span className="text-blue-600 font-bold">Register</span></Link></p>
            </div>
        </div>
    );
};

export default Login;