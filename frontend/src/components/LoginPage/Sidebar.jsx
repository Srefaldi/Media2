import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../../features/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/login");
  };

  return (
    <div className="sidebar bg-gray-200 w-64 p-4">
      <h2 className="text-lg font-bold mb-4">Menu</h2>
      <nav>
        <NavLink
          to={"/dashboard"}
          className="block p-2 rounded hover:bg-gray-300"
        >
          <IoHome /> Dashboard
        </NavLink>
        {user && user.role === "admin" && (
          <NavLink
            to={"/products"}
            className="block p-2 rounded hover:bg-gray-300"
          >
            <IoPricetag /> Data Evaluasi
          </NavLink>
        )}
        {user && user.role === "admin" && (
          <NavLink
            to={"/users"}
            className="block p-2 rounded hover:bg-gray-300"
          >
            <IoPerson /> Data User
          </NavLink>
        )}
        <button
          onClick={logout}
          className="block p-2 rounded hover:bg-gray-300 w-full text-left"
        >
          <IoLogOut /> Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
