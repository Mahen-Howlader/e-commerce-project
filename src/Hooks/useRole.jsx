import Loading from "../Component/Loading/Loading";
import useAdmin from "./useAdmin";

function useRole() {
    const [isAdmin,isPending] = useAdmin();
    if (isPending) return <Loading></Loading>;

    return {isAdmin}
}

export default useRole;