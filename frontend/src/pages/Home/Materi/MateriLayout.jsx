import React from "react";
import { Outlet } from "react-router-dom";
import MateriSidebar from "./MateriSidebar";
import Navbar from "./Navbar";
import Footer from "../../../components/Landing/Footer";
const MateriLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <MateriSidebar />
        <div className="flex-1 p-6">
          {/* Konten Materi */}
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MateriLayout;
