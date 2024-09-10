import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Component/Loading/Loading";
import useRole from "../../Hooks/useRole";
import useAuth from "../../Provider/useAuth";
function Adminprivateroute({ children }) {
    const { isAdmin, loading } = useRole();
    const { user } = useAuth();
    const location = useLocation()

    if (loading) return <Loading></Loading>

    if (isAdmin && user) {
        return children
    }

    return <Navigate to={"/login"} state={{from : location}} replace></Navigate>
}

export default Adminprivateroute;