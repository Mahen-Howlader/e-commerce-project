import axios from "axios";
import useAuth from "../Provider/useAuth";
import { useNavigate } from "react-router-dom";

const axiosSequre = axios.create({
    baseURL: `${import.meta.env.VITE_API}`
})

const useAxiosSequre = () => {
    const { logOut } = useAuth();
    const navigator = useNavigate();
    axiosSequre.interceptors.request.use(function (config) {
        const token = localStorage.getItem("access-token");
        // console.log("stop by interceptor", token)
        config.headers.authorization = `Bearer ${token}`
        // Do something before request is sent
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });


    axiosSequre.interceptors.response.use(
        function (response) {
            return response;
        },
        async function (error) {
            const status = error.response.status;
            if (status === 401 || status === 403) {
                await logOut();
                navigator("/login");
            }
            return Promise.reject(error);
        }
    );
    return axiosSequre;
}


export default useAxiosSequre;