import { Button } from 'flowbite-react';
import { FcGoogle } from "react-icons/fc";
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const {googleSignIn} = useAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                }
                console.log(userInfo);
                navigate('/');

    })
}

    return (
        <Button onClick={handleGoogleSignIn} type="submit" className="bg-transparent text-black hover:text-white"><FcGoogle className="flex items-center mr-2"></FcGoogle> Login with Google</Button>
    );
};

export default SocialLogin;