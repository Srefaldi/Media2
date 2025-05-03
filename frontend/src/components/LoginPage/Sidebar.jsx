import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  IoPerson,
  IoPricetag,
  IoHome,
  IoLogOut,
  IoSettings,
  IoSchool,
  IoPeople,
  IoMenu,
  IoClose,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../../features/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Dynamically set sidebar height to match document height
  useEffect(() => {
    const setSidebarHeight = () => {
      const sidebar = document.querySelector(".sidebar");
      if (sidebar) {
        sidebar.style.height = `${document.documentElement.scrollHeight}px`;
      }
    };

    setSidebarHeight();
    window.addEventListener("resize", setSidebarHeight);
    return () => window.removeEventListener("resize", setSidebarHeight);
  }, []);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="fixed z-50 p-2 text-white transition-shadow duration-200 rounded-lg shadow-md md:hidden top-4 left-4 bg-gradient-to-r from-purple-600 to-blue-500 hover:shadow-lg"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <IoClose className="text-2xl" />
        ) : (
          <IoMenu className="text-2xl" />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`sidebar fixed md:static top-0 left-0 w-64 bg-white shadow-lg pt-8 pb-12 px-4 transform ${
          isOpen ? "translate-x-0 h-screen" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 z-40 flex flex-col`}
      >
        <h2 className="mb-4 text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
          DAFTAR MENU
        </h2>
        <nav className="flex flex-col flex-1 gap-4 mt-6">
          <NavLink
            to="/dashboard-guru"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-xl font-medium text-gray-800 rounded-lg hover:bg-gray-100 transition-colors duration-200 ${
                isActive ? "bg-gradient-to-r from-purple-100 to-blue-100" : ""
              }`
            }
          >
            <IoHome className="mr-2 text-2xl text-gray-600" />
            Dashboard
          </NavLink>
          {user && user.role === "admin" && (
            <NavLink
              to="/users"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-xl font-medium text-gray-800 rounded-lg hover:bg-gray-100 transition-colors duration-200 ${
                  isActive ? "bg-gradient-to-r from-purple-100 to-blue-100" : ""
                }`
              }
            >
              <IoPeople className="mr-2 text-2xl text-gray-600" />
              Data Siswa
            </NavLink>
          )}
          {user && user.role === "admin" && (
            <NavLink
              to="/progres-belajar"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-xl font-medium text-gray-800 rounded-lg hover:bg-gray-100 transition-colors duration-200 ${
                  isActive ? "bg-gradient-to-r from-purple-100 to-blue-100" : ""
                }`
              }
            >
              <IoSchool className="mr-2 text-2xl text-gray-600" />
              Progres Belajar
            </NavLink>
          )}
          {user && user.role === "admin" && (
            <NavLink
              to="/data-nilai"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-xl font-medium text-gray-800 rounded-lg hover:bg-gray-100 transition-colors duration-200 ${
                  isActive ? "bg-gradient-to-r from-purple-100 to-blue-100" : ""
                }`
              }
            >
              <IoPerson className="mr-2 text-2xl text-gray-600" />
              Data Nilai
            </NavLink>
          )}
          {user && user.role === "admin" && (
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-xl font-medium text-gray-800 rounded-lg hover:bg-gray-100 transition-colors duration-200 ${
                  isActive ? "bg-gradient-to-r from-purple-100 to-blue-100" : ""
                }`
              }
            >
              <IoPricetag className="mr-2 text-2xl text-gray-600" />
              Data Evaluasi
            </NavLink>
          )}
          {user && user.role === "admin" && (
            <NavLink
              to="/pengaturan"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-xl font-medium text-gray-800 rounded-lg hover:bg-gray-100 transition-colors duration-200 ${
                  isActive ? "bg-gradient-to-r from-purple-100 to-blue-100" : ""
                }`
              }
            >
              <IoSettings className="mr-2 text-2xl text-gray-600" />
              Pengaturan
            </NavLink>
          )}
          <button
            onClick={logout}
            className="flex items-center px-4 py-2 text-xl font-medium text-gray-800 transition-colors duration-200 rounded-lg hover:bg-gray-100"
          >
            <IoLogOut className="mr-2 text-2xl text-gray-600" />
            Logout
          </button>
        </nav>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
