import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Membersidebar(props) {
    return (
        <div>
            <div className="relative flex flex-col bg-clip-border  bg-white text-gray-700 h-[calc(100vh-2rem)] w-full  p-4 shadow-xl shadow-blue-gray-900/5">
                <div className="mb-2 p-4">
                    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">Dashboard</h5>
                </div>
                <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
                    <NavLink to={"/dashboard"} role="button" className={({ isActive }) =>
                        `flex items-center w-full p-3 rounded-lg  text-start leading-tight transition-all outline-none ${isActive ? "bg-red-500 text-white" : ""
                        } `
                    }>
                        
                        <div className="grid place-items-center mr-4">
                            <FaHome />
                        </div>
                        Admin Home
                    </NavLink>

                    <NavLink to="allitems" className={({ isActive }) => `${isActive ? "bg-red-500 text-white" : ""} flex items-center w-full p-3  rounded-lg text-start leading-tight transition-all `}>
                        <div className="grid place-items-center mr-4">
                            <FaHome />
                        </div>Add Items
                    </NavLink>
                    

                    

                </nav>
            </div>
        </div>
    );
}

export default Membersidebar;