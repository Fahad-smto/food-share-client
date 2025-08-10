import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { IoMdLogOut } from "react-icons/io";
import toast from "react-hot-toast";

const NavBar = () => {
  const { logOut, user } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => toast.success("Logged out successfully"))
      .catch(() => toast.error("Something went wrong"));
  };

  return (
    <nav className="bg-white border-b border-gray-300 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-3">
        {/* Logo & Brand */}
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-800 font-semibold text-xl select-none"
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="w-8 h-8 rounded-full"
          />
          <span className="italic tracking-wide">
            Food<span className="text-orange-500">Together</span>
          </span>
        </Link>


        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 text-gray-700 text-sm font-medium">
          {/* Public routes */}
          {[{ name: "Home", path: "/" },
              
          ].map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-orange-500 pb-1 text-orange-600"
                    : "hover:text-orange-500 transition"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}

       
          {user &&
            [
           
              { name: "Add Food", path: "/add_food" },
              { name: "Manage My Foods", path: "/manage_my_food" },
              { name: "My Food Request", path: "/my_food_request" },
            ].map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-orange-500 pb-1 text-orange-600"
                      : "hover:text-orange-500 transition"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
        </ul>


        {/* User & Hamburger */}
        <div className="flex items-center gap-3">

          <div>
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path
                  d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input type="checkbox" value="synthwave" className="toggle theme-controller" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>


          {/* User Dropdown or Login Button */}
          {user ? (
            <div className="dropdown dropdown-end relative">
              <button
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar ring-1 ring-gray-300 hover:ring-orange-400 transition"
              >
                <div className="w-9 rounded-full overflow-hidden">
                  <img
                    src={user.photoURL || "/user.jpg"}
                    alt={user.displayName || "User Avatar"}
                  />
                </div>
              </button>

              <ul
                tabIndex={0}
                className="dropdown-content mt-2 p-3 bg-white shadow rounded w-48 text-gray-700 text-sm font-normal"
              >
                <li className="mb-2 text-center font-semibold border-b pb-2">
                  {user.displayName || "Anonymous User"}
                </li>
                <li>
                  <Link
                    to="/login"
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-red-500 hover:bg-red-100 p-2 rounded transition"
                  >
                    <IoMdLogOut size={18} /> Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-sm bg-orange-500 text-white hover:bg-orange-400 transition"
            >
              Log in
            </Link>
          )}

          {/* Hamburger for Mobile */}
          <div className="lg:hidden dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-square btn-ghost text-gray-700"
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-white rounded w-48 text-gray-700 text-sm font-normal"
            >
              {[
                { name: "Home", path: "/" },
                { name: "Available Foods", path: "/available_food" },
                { name: "Add Food", path: "/add_food" },
                { name: "Manage My Foods", path: "/manage_my_food" },
                { name: "My Food Request", path: "/my_food_request" },
              ].map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-orange-600 font-semibold"
                        : "hover:text-orange-500 transition"
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
              {user ? (
                <li>
                  <Link
                    to="/login"
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-red-600 hover:bg-red-100 p-2 rounded transition"
                  >
                    <IoMdLogOut size={18} /> Logout
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    to="/login"
                    className="btn btn-block btn-sm bg-orange-500 text-white hover:bg-orange-400 transition"
                  >
                    Log in
                  </Link>
                </li>
              )}
            </ul>
          </div>

        </div>

      </div>
    </nav>
  );
};

export default NavBar;
