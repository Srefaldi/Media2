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
    </div>
  );
};

export default MateriLayout;
