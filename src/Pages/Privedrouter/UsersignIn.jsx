import { Navigate } from "react-router-dom";
import useAuth from "../../Provider/useAuth";

function UsersignIn({ children }) {
    const { user } = useAuth()

    if (!user) {
        return  children
       
    }
    return <Navigate to="/"></Navigate>
}

export default UsersignIn;