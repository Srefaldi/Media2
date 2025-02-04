import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MateriLayout from "../src/pages/Home/Materi/MateriLayout";

// Import halaman materi
import PengenalanCSharp from "../src/pages/Materi/Bab-1/Pengenalan";
import InstalasiSetup from "../src/pages/Materi/Bab-1/Instalasi";
import TipeData from "../src/pages/Materi/Bab-2/tipedata";
import Variabel from "../src/pages/Materi/Bab-2/variabel";

const MateriRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MateriLayout />}>
        {/* Redirect ke bab 1 pengenalan secara default */}
        <Route index element={<Navigate to="/materi/bab1/pengenalan" />} />

        {/* Semua subroutes untuk materi */}
        <Route path="bab1/pengenalan" element={<PengenalanCSharp />} />
        <Route path="bab1/instalasi" element={<InstalasiSetup />} />
        <Route path="bab2/tipedata" element={<TipeData />} />
        <Route path="bab2/variabel" element={<Variabel />} />
      </Route>
    </Routes>
  );
};

export default MateriRoutes;
