import { Button, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/Shared/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {

    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const data = {
            name,
            email,
            password
        };

        console.log(data);

        if (password.length < 6) {
            toast.error('Password should be at least 6 characters or longer!');
            return;
        }
        else if (!(/[A-Z]/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password))) {
            toast.error('Your password should have at least one uppercase letter and a special character.');
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                .then(() => {
                    console.log('user profile updated successfully');
                    const userInfo = {
                        name: data.name,
                        email: data.email
                    }
                    console.log(userInfo);
                    navigate('/')
                })
                navigate('/');
            })
    }

    return (
        <div className="flex my-10 w-[1200px] mx-auto bg-white">
            <div className="flex-1">
                <img src="https://i.ibb.co/DzjwVLx/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-peopl.jpg" alt="" />
            </div>
            <div className="mt-10 flex-1">
                <h2 className="text-5xl text-center font-bold">Register Now</h2>
                <form onSubmit={handleRegister} className="flex max-w-md mx-auto mt-6 flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your name" />
                        </div>
                        <TextInput id="email1" name="name" type="text" placeholder="Name" required />
                    </div>
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
                <p className="text-center">Already have an account? Please <Link to={'/login'}><span className="text-blue-600 font-bold">Login</span></Link></p>
            </div>
        </div>
    );
};

export default Register;