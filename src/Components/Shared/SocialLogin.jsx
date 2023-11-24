import { Button } from 'flowbite-react';
import { FcGoogle } from "react-icons/fc";
import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SocialLogin = () => {

    const { googleSignIn, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    photo: result.user?.photoURL,
                }
                console.log(userInfo);
                updateUserProfile(userInfo.name, userInfo.photo)
                    .then(() => {
                        console.log('user profile updated successfully');
                        navigate('/')
                    })
                toast.success('User logged in successfully!')
                navigate(from, { replace: true });

            })
    }

    return (
        <Button onClick={handleGoogleSignIn} type="submit" className="bg-transparent text-black hover:text-white"><FcGoogle className="flex items-center mr-2"></FcGoogle> Login with Google</Button>
    );
};

export default SocialLogin;