import { Button, Label, TextInput } from "flowbite-react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {

    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        const form = event.target;

        const photoInput = form.photo.files[0];

        const formData = new FormData();
        formData.append('image', photoInput);
        fetch(image_hosting_api, {
            method: 'POST', body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log('imgData', imgData);

                    const name = form.name.value;
                    const bank = form.bank.value;
                    const role = form.role.value;
                    const salary = form.salary.value;
                    const email = form.email.value;
                    const password = form.password.value;

                    const data = {
                        name,
                        photo: imgData.data.display_url,
                        bank,
                        role,
                        salary,
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
                                        role: data.role,
                                        bank: data.bank,
                                        salary: data.salary,
                                        photo: data.photo,
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
            });
    }

    return (
        <div className="flex flex-col lg:flex-row my-10 lg:w-[1200px] mx-auto bg-white">
            <div className="flex-1 items-center justify-center flex">
                <img src="https://i.ibb.co/DzjwVLx/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-peopl.jpg" className="" alt="" />
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
                            <Label htmlFor="name" value="Photo" />
                        </div>
                        <TextInput id="photo" name="photo" type="file" placeholder="PhotoURL" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="bank" value="Bank Account No" />
                        </div>
                        <TextInput id="bank" name="bank" type="number" placeholder="Bank Account No" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="photo" value="Your Role" />
                        </div>
                        <select name="role" defaultValue="default"
                            className="w-full">
                            <option disabled value="default">Select Role</option>
                            <option value="hr">HR</option>
                            <option value="employee">Employee</option>
                        </select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="bank" value="Salary" />
                        </div>
                        <TextInput id="salary" name="salary" type="number" placeholder="Salary" required />
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
                </form>
                <p className="text-center mt-2">Already have an account? Please <Link to={'/login'}><span className="text-blue-600 font-bold">Login</span></Link></p>
            </div>
        </div>
    );
};

export default Register;