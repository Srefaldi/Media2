import React from "react";  // Tambahkan ini!
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/LoginPage/Dashboard";
import Login from "./components/LoginPage/Login";
import Users from "./pages/LoginPage/Users";
import Products from "./pages/LoginPage/Products";

import AddUser from "./pages/LoginPage/AddUser";
import EditUser from "./pages/LoginPage/EditUser";

import AddProduct from "./pages/LoginPage/AddProduct";
import EditProduct from "./pages/LoginPage/EditProduct";

import LandingPage from "./Landing";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
