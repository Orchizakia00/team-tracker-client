import { Button, Label, TextInput } from "flowbite-react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/Shared/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const Register = () => {

    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();

    const handleRegister = async  (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const role = form.role.value;
        const email = form.email.value;
        const password = form.password.value;
        const data = {
            name,
            photo,
            role,
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
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        console.log('user profile updated successfully');
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            role: data.role
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    toast.success('User Created Successfully!')
                                    navigate('/')
                                }
                            })

                    })
            })
    }

    return (
        <div className="flex my-10 lg:w-[1200px] mx-auto bg-white">
            <div className="flex-1">
                <img src="https://i.ibb.co/DzjwVLx/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-peopl.jpg" alt="" />
            </div>
            <div className="mt-10 flex-1">
                <h2 className="text-5xl text-center font-bold">Register Now</h2>
                <form onSubmit={handleRegister} className="flex max-w-md mx-auto mt-6 flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Your name" />
                        </div>
                        <TextInput id="name" name="name" type="text" placeholder="Name" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="PhotoURL" />
                        </div>
                        <TextInput id="photo" name="photo" type="text" placeholder="PhotoURL" required />
                    </div>
                    {/* <div>
                        <div className="mb-2 block">
                            <Label htmlFor="file-upload" value="Upload Photo" />
                        </div>
                        <FileInput id="file-upload" name="photo" />
                    </div> */}
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="photo" value="Your Role" />
                        </div>
                        <select name="role" defaultValue="default"
                            className="w-full">
                            <option disabled value="default">Select Role</option>
                            <option value="admin">Admin</option>
                            <option value="hr">HR</option>
                            <option value="employee">Employee</option>
                        </select>
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
                    <Button type="submit">Register</Button>
                    <SocialLogin />
                </form>
                <p className="text-center">Already have an account? Please <Link to={'/login'}><span className="text-blue-600 font-bold">Login</span></Link></p>
            </div>
        </div>
    );
};

export default Register;