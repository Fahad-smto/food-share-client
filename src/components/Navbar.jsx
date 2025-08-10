import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { IoMdLogOut } from "react-icons/io";
import toast from "react-hot-toast";
 

export default function NavBar() {
  const { logOut, user } = useContext(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleLogout = () => {
    logOut()
      .then(() => toast.success("Logged out successfully"))
      .catch(() => toast.error("Something went wrong"));
  };

  // Routes
  const publicRoutes = [{ name: "Home", path: "/" },
  { name: "Available Foods", path: "/available_food" },
  { name: "About us", path: "/about" }
  ];
  const privateRoutes = [

    { name: "Add Food", path: "/add_food" },
    { name: "Manage My Foods", path: "/manage_my_food" },
    { name: "My Food Request", path: "/my_food_request" },
  ];

  return (
    <nav className="bg-base-100 border-b border-base-300 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2  font-bold text-xl">
          <img className="w-[30px]" src="/logo.png" alt="" />
          Food<span className="text-orange-500 -ml-2">Together</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {[...publicRoutes, ...(user ? privateRoutes : [])].map((item) => (
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

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <label className="flex items-center cursor-pointer gap-2">
            {/* Light Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              className="toggle toggle-sm"
              checked={theme === "dark"}
              onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            />
            {/* Dark Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z" />
            </svg>
          </label>

          {/* User Menu */}
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-9 rounded-full">
                  <img src={user.photoURL || "/user.jpg"} alt={user.displayName || "User"} />
                </div>
              </label>
              <ul tabIndex={0} className="dropdown-content mt-3 p-3 shadow bg-base-100 rounded w-48">
                <li className="text-center font-semibold border-b pb-2">
                  {user.displayName || "Anonymous"}
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-red-500 hover:bg-red-100 p-2 rounded"
                  >
                    <IoMdLogOut /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn btn-sm bg-orange-500 text-white hover:bg-orange-400">
              Log in
            </Link>
          )}

          {/* Mobile Menu */}
          <div className="lg:hidden dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="dropdown-content mt-2 p-2 shadow bg-base-100 rounded w-48">
              {[...publicRoutes, ...(user ? privateRoutes : [])].map((item) => (
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
              {user && (
                <li>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-red-500 hover:bg-red-100 p-2 rounded"
                  >
                    <IoMdLogOut /> Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
