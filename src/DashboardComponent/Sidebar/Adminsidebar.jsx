import { FaHome } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function Adminsidebar(props) {
    return (
        <div>
            <div className=" flex flex-col bg-clip-border min-h-screen bg-white text-gray-700 h-[calc(100vh)] w-full  p-4 shadow-xl shadow-blue-gray-900/5">
                <div className="mb-2 p-4 flex justify-between items-center">
                    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">Dashboard</h5>
                    <Link to={"/"}>Home</Link>
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
                    <NavLink to="manageitems" className={({ isActive }) => `${isActive ? "bg-red-500 text-white" : ""} flex items-center w-full p-3  rounded-lg text-start leading-tight transition-all `}>
                        <div className="grid place-items-center mr-4">
                            <FaHome />
                        </div>Manage Items <div className="grid place-items-center ml-auto justify-self-end">
                        </div>
                    </NavLink>
                    <NavLink to="managebooking" className={({ isActive }) => `${isActive ? "bg-red-500 text-white" : ""} flex items-center w-full p-3  rounded-lg text-start leading-tight transition-all `}>
                        <div className="grid place-items-center mr-4">
                            <FaHome />
                        </div>Manage Booking
                    </NavLink>
                    <NavLink to="alluser" className={({ isActive }) => `${isActive ? "bg-red-500 text-white" : ""} flex items-center w-full p-3  rounded-lg text-start leading-tight transition-all `}>
                        <div className="grid place-items-center mr-4">
                            <FaHome />
                        </div>All User
                    </NavLink>
                    <NavLink to="viewPayment" className={({ isActive }) => `${isActive ? "bg-red-500 text-white" : ""} flex items-center w-full p-3  rounded-lg text-start leading-tight transition-all `}>
                        <div className="grid place-items-center mr-4">
                            <FaHome />
                        </div>View Payment
                    </NavLink>
                    <NavLink to="viewalluser" className={({ isActive }) => `${isActive ? "bg-red-500 text-white" : ""} flex items-center w-full p-3  rounded-lg text-start leading-tight transition-all `}>
                        <div className="grid place-items-center mr-4">
                            <FaHome />
                        </div>View Alluser
                    </NavLink>

                </nav>
            </div>
        </div>
    );
}

export default Adminsidebar;