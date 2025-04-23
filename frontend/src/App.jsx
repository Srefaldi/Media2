import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/LoginPage/Dashboard";
import Login from "./components/LoginPage/Login";
import Users from "./pages/LoginPage/Users";
import Products from "./pages/LoginPage/Products";
import AddUser from "./pages/LoginPage/AddUser";
import EditUser from "./pages/LoginPage/EditUser";
import AddProduct from "./pages/LoginPage/AddProduct";
import EditProduct from "./pages/LoginPage/EditProduct";
import LandingPage from "./components/Landing/Landing";
import CompilerPage from "./pages/Home/Complier/ComplierPage";
import Informasi from "./pages/LoginPage/Informasi";
import Petunjuk from "./pages/LoginPage/PetunjukPenggunaan";
import ProgresBelajar from "./pages/LoginPage/ProgresBelajar";
import DataNilai from "./pages/LoginPage/DataNilai";
import Pengaturan from "./pages/LoginPage/Pengaturan";

// Import Route Materi
import MateriRoutes from "./MateriRoute";

// Login Guru
import LoginGuru from "./components/LoginPage/Login Guru/FormLoginGuru";
import DashboardGuru from "./components/LoginPage/Login Guru/HalamanDashboardGuru";
import DaftarGuru from "./components/LoginPage/Login Guru/DaftarGuru";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Siswa */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/informasi" element={<Informasi />} />
        <Route path="/petunjuk-penggunaan" element={<Petunjuk />} />
        <Route path="/progres-belajar" element={<ProgresBelajar />} />
        <Route path="/complier" element={<CompilerPage />} />
        {/* Guru */}
        <Route path="/login-guru" element={<LoginGuru />} />
        <Route path="/daftar-guru" element={<DaftarGuru />} />
        <Route path="/dashboard-guru" element={<DashboardGuru />} />
        <Route path="/pengaturan" element={<Pengaturan />} />
        <Route path="/data-nilai" element={<DataNilai />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/add" element={<AddUser />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />

        {/* ROUTE MATERI */}
        <Route path="/materi/*" element={<MateriRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
