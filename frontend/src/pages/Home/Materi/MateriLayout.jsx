import React from "react";
import { Outlet, Link } from "react-router-dom";
import MateriSidebar from "./MateriSidebar";

const MateriLayout = () => {
  return (
    <div className="flex relative">
      {/* Sidebar */}
      <MateriSidebar />

      {/* Konten Materi */}
      <div className="ml-64 p-6 flex-1">
        <Outlet />
      </div>

      {/* Tombol Kembali ke Dashboard */}
      <Link
        to="/dashboard"
        className="fixed bottom-6 right-6 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition"
      >
        Kembali ke Dashboard
      </Link>
    </div>
  );
};

export default MateriLayout;
