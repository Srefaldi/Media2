import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MateriLayout from "../src/pages/Home/Materi/MateriLayout";

// BAB 1
import PengenalanCSharp from "../src/pages/Materi/Bab-1/Pengenalan";
import InstalasiSetup from "../src/pages/Materi/Bab-1/Instalasi";
import StrukturKode from "../src/pages/Materi/Bab-1/Struktur-kode";
import StrukturEksekusi from "../src/pages/Materi/Bab-1/Struktur-eksekusi";
import SintaksPrint from "../src/pages/Materi/Bab-1/Sintaks-print";
import SintaksKomentar from "../src/pages/Materi/Bab-1/SintaksKomentar";
import ErrorCSharp from "../src/pages/Materi/Bab-1/ErrorCSharp";
import Latihan from "../src/pages/Materi/Bab-1/Latihan";
import Kuis from "../src/pages/Materi/Bab-1/Kuis";
import Rangkuman from "../src/pages/Materi/Bab-1/Rangkuman";

// BAB 2
import Variabel from "../src/pages/Materi/Bab-2/variabel";
import PenamaanVariabel from "../src/pages/Materi/Bab-2/PenamaanVariabel";
import KategoriVariabel from "./pages/Materi/Bab-2/KategoriVariabel";
import DeklarasiInisialisasi from "./pages/Materi/Bab-2/DeklarasiInisialisasi";

const MateriRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MateriLayout />}>
        {/* DEFAULT */}
        <Route index element={<Navigate to="/materi/bab1/pengenalan" />} />

        {/* BAB 1*/}
        <Route path="bab1/pengenalan" element={<PengenalanCSharp />} />
        <Route path="bab1/instalasi" element={<InstalasiSetup />} />
        <Route path="bab1/struktur-kode" element={<StrukturKode />} />
        <Route path="bab1/struktur-eksekusi" element={<StrukturEksekusi />} />
        <Route path="bab1/sintaks-print" element={<SintaksPrint />} />
        <Route path="bab1/sintaks-komentar" element={<SintaksKomentar />} />
        <Route path="bab1/error-csharp" element={<ErrorCSharp />} />
        <Route path="bab1/latihan-bab1" element={<Latihan />} />
        <Route path="bab1/kuis-bab1" element={<Kuis />} />
        <Route path="bab1/rangkuman-bab1" element={<Rangkuman />} />

        {/* BAB 2 */}

        <Route path="bab2/variabel" element={<Variabel />} />
        <Route path="bab2/penamaan-variabel" element={<PenamaanVariabel />} />
        <Route path="bab2/kategori-variabel" element={<KategoriVariabel />} />
        <Route
          path="bab2/deklarasi-inialisasi"
          element={<DeklarasiInisialisasi />}
        />
      </Route>
    </Routes>
  );
};

export default MateriRoutes;
