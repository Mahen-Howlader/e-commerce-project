import { FaHome } from "react-icons/fa";
import { GrDashboard, GrRestroomWomen } from "react-icons/gr";
import { LiaBabySolid } from "react-icons/lia";
import { MdDashboard, MdMenu, MdPeople } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Navbar(props) {
    return (
        <div className="bg-white border-b-2 fixed w-full z-50 top-0 left-0">
            <div className="navbar  container mx-auto  flex items-center mb-1">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="lg:hidden mr-4  hover:text-indigo-400">
                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg> */}
                            <MdMenu size={30} />
                        </div>
                        <ul
                            tabIndex={0}
                            className="  dropdown-content bg-base-100 z-40 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li className="md:px-4 md:py-2 font-bold">

                                <NavLink
                                    to="/"
                                    className={({ isActive }) => isActive ? "border-b-2 pb-1 text-indigo-600 border-indigo-500  flex items-center gap-x-2" : " flex items-center gap-x-2"}
                                >
                                    <FaHome size={20} />

                                    <span>Home</span>
                                </NavLink>
                            </li>
                            <li className="md:px-4 md:py-2 font-bold">
                                <NavLink
                                    to="/mens"
                                    className={({ isActive }) => isActive ? "border-b-2 pb-1 text-indigo-600 border-indigo-500  flex items-center gap-x-2" : " flex items-center gap-x-2"}
                                >
                                    <MdPeople size={20} />

                                    <span>Men's</span>
                                </NavLink>
                            </li>
                            <li className="md:px-4 md:py-2 font-bold">
                                <NavLink
                                    to="/womens"
                                    className={({ isActive }) => isActive ? "border-b-2 pb-1 text-indigo-600 border-indigo-500  flex items-center gap-x-2" : " flex items-center gap-x-2"}
                                >
                                    <GrRestroomWomen size={20} />

                                    <span>Women's</span>
                                </NavLink>
                            </li>
                            <li className="md:px-4 md:py-2 font-bold">
                                <NavLink
                                    to="/kids"
                                    className={({ isActive }) => isActive ? "border-b-2 pb-1 text-indigo-600 border-indigo-500  flex items-center gap-x-2" : " flex items-center gap-x-2"}
                                >
                                    <LiaBabySolid size={20} />

                                    <span>Kid's</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <a className="text-3xl font-extrabold uppercase text-xl">Mahin</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal items-center px-1">
                        <li className="md:px-4 md:py-2 font-bold">

                            <NavLink
                                to="/"
                                className={({ isActive }) => isActive ? "border-b-2 pb-1 text-indigo-600 border-indigo-500  flex items-center gap-x-2" : " flex items-center gap-x-2"}
                            >
                                <FaHome size={20} />

                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li className="md:px-4 md:py-2 font-bold">
                            <NavLink
                                to="/mens"
                                className={({ isActive }) => isActive ? "border-b-2 pb-1 text-indigo-600 border-indigo-500  flex items-center gap-x-2" : " flex items-center gap-x-2"}
                            >
                                <MdPeople size={20} />

                                <span>Men's</span>
                            </NavLink>
                        </li>
                        <li className="md:px-4 md:py-2 font-bold">
                            <NavLink
                                to="/womens"
                                className={({ isActive }) => isActive ? "border-b-2 pb-1 text-indigo-600 border-indigo-500  flex items-center gap-x-2" : " flex items-center gap-x-2"}
                            >
                                <GrRestroomWomen size={20} />

                                <span>Women's</span>
                            </NavLink>
                        </li>
                        <li className="md:px-4 md:py-2 font-bold">
                            <NavLink
                                to="/kids"
                                className={({ isActive }) => isActive ? "border-b-2 pb-1 text-indigo-600 border-indigo-500  flex items-center gap-x-2" : " flex items-center gap-x-2"}
                            >
                                <LiaBabySolid size={20} />

                                <span>Kid's</span>
                            </NavLink>
                        </li>
                        <li className="md:px-4 md:py-2 font-bold">
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) => isActive ? "border-b-2 pb-1 text-indigo-600 border-indigo-500  flex items-center gap-x-2" : " flex items-center gap-x-2"}
                            >
                                <MdDashboard size={20} />

                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/cart"} className="flex  items-center justify-center bg-white">
                                <div className="relative scale-75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="h-8 w-8 text-gray-600"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                        />
                                    </svg>
                                    <span className="absolute -top-2 left-4 rounded-full bg-red-500 p-0.5 px-2 text-sm text-red-50">
                                        4
                                    </span>
                                </div>
                            </NavLink>
                        </li>


                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="order-2 md:order-3">
                        <NavLink to={"/login"} className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                            {/* Heroicons - Login Solid */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <p>Login</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;