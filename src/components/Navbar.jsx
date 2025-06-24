
import { use } from "react";

import toast from "react-hot-toast";
import { IoMdLogOut } from "react-icons/io";
import { Link, NavLink } from "react-router";


const NavBar = () => {
    // // const { logOut, user } = use( );

    // const handleLogout = () => {
    //     logOut()
    //         .then(() => {
    //             toast.success('Logged out successfully');
    //         })
    //         .catch(() => {
    //             toast.error('Something went wrong');
    //         });
    // };

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">

                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-orange-400' : '')}>Home</NavLink></li>
                        <li><NavLink to='/available_food' className={({ isActive }) => (isActive ? 'text-orange-400' : '')}>Available Foods
                        </NavLink></li>
                        <li><NavLink to='/add_food' className={({ isActive }) => (isActive ? 'text-orange-400' : '')}>Add Food</NavLink></li>
                        <li><NavLink to='/manage_my_food' className={({ isActive }) => (isActive ? 'text-orange-400' : '')}>Manage My Foods</NavLink></li>
                        <li><NavLink to='/my_food_request' className={({ isActive }) => (isActive ? 'text-orange-400' : '')}>My Food Request</NavLink></li>
                    </ul>
                </div>

                <img className="w-[60px] rounded-full ml-2" src="/logo.png" alt="Logo" />
                <a className="btn btn-ghost text-xl italic">Food<span className="text-orange-600 -ml-2 mb-1">Together</span></a>
            </div>


            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-orange-400' : '')}>Home</NavLink></li>
                    <li><NavLink to='/available_food' className={({ isActive }) => (isActive ? 'text-orange-400' : '')}>Available Foods
                    </NavLink></li>
                    <li><NavLink to='/add_food' className={({ isActive }) => (isActive ? 'text-orange-400' : '')}>Add Food</NavLink></li>
                    <li><NavLink to='/manage_my_food' className={({ isActive }) => (isActive ? 'text-orange-400' : '')}>Manage My Foods</NavLink></li>
                    <li><NavLink to='/my_food_request' className={({ isActive }) => (isActive ? 'text-orange-400' : '')}>My Food Request</NavLink></li>
                </ul>
            </div>

            {/* <div className="navbar-end">
                {user ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-8 rounded-full">
                                <img src={user.photoURL || "/user.jpg"} alt="User Avatar" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li className="text-center text-sm font-semibold">{user.displayName || 'Anonymous user'}</li>
                            <li>
                                <Link to='/login' onClick={handleLogout} className="flex items-center gap-2 text-red-500">
                                    <IoMdLogOut /> Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <Link to='/login' className="btn btn-success text-white text-sm">Log in</Link>
                )}
            </div> */}
            <div className="navbar-end">
                <button className=" btn-success">login</button>
            </div>
        </div>
    );
};

export default NavBar;
