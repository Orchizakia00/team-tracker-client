import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useWork = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { refetch, data: work = [] } = useQuery({
        queryKey: ['work', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/works?email=${user.email}`);
            return res.data;
        }

    })
    return [work, refetch]
};

export default useWork;