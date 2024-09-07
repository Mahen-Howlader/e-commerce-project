import axios from "axios";

const axiosPublic = axios.create({
    baseURL: `${import.meta.env.VITE_API}`
})
function useAxiosPublic() {

    return axiosPublic
};

export default useAxiosPublic;