import axios from "axios";

const axiosSequre = axios.create({
    baseURL : `${import.meta.env.VITE_API}`
})

const useAxiosSequre = () => {
    return axiosSequre;
}


export default useAxiosSequre;