import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  IoPerson,
  IoPricetag,
  IoHome,
  IoLogOut,
  IoSettings,
  IoSchool,
  IoPeople, // Import ikon IoPeople
} from "react-icons/io5"; // Import ikon tambahan
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../../features/authSlice";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 256px; /* Set width sesuai dengan yang diinginkan */
  padding: 16px;
  background-color: white;
  color: #1f2937; /* Warna teks */
`;

const SidebarLink = styled(NavLink)`
  display: flex; /* Mengubah display menjadi flex */
  align-items: center; /* Menyelaraskan item di tengah secara vertikal */
  padding: 12px;
  border-radius: 8px;
  transition: background-color 0.2s;
  color: inherit; /* Warna teks mengikuti warna default */

  &:hover {
    background-color: #e5e7eb; /* Warna latar belakang saat hover */
  }
`;

const LogoutButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  background-color: transparent;
  color: inherit; /* Warna teks mengikuti warna default */
  text-align: left;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e5e7eb; /* Warna latar belakang saat hover */
  }
`;

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <SidebarContainer>
      <h2 className="mb-4 text-lg font-bold text-center">DAFTAR MENU</h2>
      <nav>
        <SidebarLink to={"/dashboard-guru"}>
          <IoHome className="mr-2" /> Dashboard
        </SidebarLink>
        {user && user.role === "admin" && (
          <SidebarLink to={"/users"}>
            <IoPeople className="mr-2" /> Data Siswa
          </SidebarLink>
        )}
        {user && user.role === "admin" && (
          <SidebarLink to={"/progres-belajar"}>
            <IoSchool className="mr-2" /> Progres Belajar
          </SidebarLink>
        )}
        {user && user.role === "admin" && (
          <SidebarLink to={"/data-nilai"}>
            <IoPerson className="mr-2" /> Data Nilai
          </SidebarLink>
        )}
        {user && user.role === "admin" && (
          <SidebarLink to={"/products"}>
            <IoPricetag className="mr-2" /> Data Evaluasi
          </SidebarLink>
        )}

        {user && user.role === "admin" && (
          <SidebarLink to={"/pengaturan"}>
            <IoSettings className="mr-2" /> Pengaturan
          </SidebarLink>
        )}
        <LogoutButton onClick={logout}>
          <IoLogOut className="mr-2" /> Logout
        </LogoutButton>
      </nav>
    </SidebarContainer>
  );
};

export default Sidebar;
