import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://team-tracker-server.vercel.app'
})

const useAxiosPublic = () => {
    
    return axiosPublic;
};

export default useAxiosPublic;