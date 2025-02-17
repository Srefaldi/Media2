import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { useNavigate } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import logo from "../../../assets/img/logo-nav.png";
import md5 from "crypto-js/md5";
import { LogOut, reset } from "../../../features/authSlice";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch(); 
  const navigate = useNavigate();

  const userEmail = user?.email ? user.email.trim().toLowerCase() : "";
  const avatarUrl = userEmail
    ? `https://www.gravatar.com/avatar/${md5(userEmail)}`
    : "default-user-logo.png";

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/login");
  };

  return (
    <nav className="bg-[#001F3F] border-gray-200 dark:bg-gray-900 dark:border-gray-700 h-20">
      <div className="max-screen-xl flex flex-wrap items-center justify-between mx-auto p-1 bg-[#001F3F]">
        <a href="/" className="w-20">
          <img src={logo} alt="Logo" className="h-6 w-auto" />
        </a>

        <button
          type="button"
          className="inline-flex items-center p-1 w-8 h-8 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={toggleDropdown}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col font-medium p-2 md:p-0 mt-2 border border-gray-100 rounded-lg bg-gray-50 md:space-x-6 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-1 px-2 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                <img
                  src={avatarUrl}
                  alt="User "
                  className="w-6 h-6 rounded-full mr-2"
                />
                {user ? user.name : "User "}
                <svg
                  className="w-3 h-3 ml-1"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-36 dark:bg-gray-700 dark:divide-gray-600">
                  <ul className="py-1 text-xs text-gray-700 dark:text-gray-400">
                    <li>
                      <a
                        href="/dashboard"
                        className="block px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <button
                      onClick={logout}
                      className="block px-3 py-1 text-xs text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white flex items-center"
                    >
                      <IoLogOut className="mr-1" /> Log out
                    </button>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
