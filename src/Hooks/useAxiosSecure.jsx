import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'https://team-tracker-server.vercel.app'
})

const useAxiosSecure = () => {

    const navigate = useNavigate();
    const {logOut} = useAuth();

    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token');
        // console.log('interceptors stopped request', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    },function(err) {
        return Promise.reject(err);
    });

    axiosSecure.interceptors.request.use(function(response){
        return response;
    }, async (err) => {
        const status = err.response.status;
        // console.log('status error', status);
        if(status === 401 || status === 403){
            await logOut();
            navigate('/login');
        }
        return Promise.reject(err);
    })

    return axiosSecure;
};

export default useAxiosSecure;