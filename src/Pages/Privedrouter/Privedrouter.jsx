
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Component/Loading/Loading";
import useAuth from "../../Provider/useAuth";

function Privedrouter({ children }) {
    const { user, loading } = useAuth();
    const location = useLocation()
    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return children
    }

    return (
        <div>
            <Navigate state={{ from: location }} to="/login" replace></Navigate>
        </div>
    );
}

export default Privedrouter;