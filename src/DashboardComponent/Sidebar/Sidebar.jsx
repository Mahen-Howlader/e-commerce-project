import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAdmin from './../../Hooks/useAdmin';
import Loading from "../../Component/Loading/Loading";
import useRole from "../../Hooks/useRole";
import Adminsidebar from "./Adminsidebar";
import Membersidebar from "./Membersidebar";
import Usersidebar from "./Usersidebar";

function Sidebar() {
    const [admin, setAdmin] = useState(true)
    const { isAdmin } = useRole();
    

    const role = isAdmin?.role;
    return (
        <div>
            {role === "admin" && <Adminsidebar></Adminsidebar>}
            {role === "member" && <Membersidebar></Membersidebar>}
            {role === "user" && <Usersidebar></Usersidebar>}
        </div>
    );
}

export default Sidebar;