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
import DeklarasiVariabel from "./pages/Materi/Bab-2/DeklarasidanInisialisasi";
import DeklarasiInisialisasi from "./pages/Materi/Bab-2/BanyakVariabel";
import VariabelKonstanta from "./pages/Materi/Bab-2/VariabelKonstanta";
import SintaksInput from "./pages/Materi/Bab-2/SintaksInput";
import LatihanBab2 from "./pages/Materi/Bab-2/Latihan";
import KuisBab2 from "./pages/Materi/Bab-2/Kuis";
import RangkumanBab2 from "./pages/Materi/Bab-2/Rangkuman";

// BAB 3
import PengertianTipeData from "./pages/Materi/Bab-3/tipeData";
import KlasifikasiTipeData from "./pages/Materi/Bab-3/klasifikasiTipeData";
import TipeDataDasar from "./pages/Materi/Bab-3/tipeDataDasar";
import Integer from "./pages/Materi/Bab-3/Integer";
import Float from "./pages/Materi/Bab-3/FlotingPoint";
import Boolean from "./pages/Materi/Bab-3/Boolean";
import Char from "./pages/Materi/Bab-3/Char";
import String from "./pages/Materi/Bab-3/String";
import LatihanBab3 from "./pages/Materi/Bab-3/Latihan";
import KuisBab3 from "./pages/Materi/Bab-3/Kuis";
import RangkumanBab3 from "./pages/Materi/Bab-3/Rangkuman";

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
          element={<DeklarasiVariabel />}
        />
        <Route
          path="bab2/deklarasi-banyak"
          element={<DeklarasiInisialisasi />}
        />
        <Route path="bab2/variabel-konstanta" element={<VariabelKonstanta />} />
        <Route path="bab2/sintaks-input" element={<SintaksInput />} />
        <Route path="bab2/latihan-bab2" element={<LatihanBab2 />} />
        <Route path="bab2/kuis-bab2" element={<KuisBab2 />} />
        <Route path="bab2/rangkuman-bab2" element={<RangkumanBab2 />} />

        {/* Tipe Data */}
        <Route
          path="bab3/pengertian-tipedata"
          element={<PengertianTipeData />}
        />
        <Route
          path="bab3/klasifikasi-tipedata"
          element={<KlasifikasiTipeData />}
        />
        <Route path="bab3/tipe-data-dasar" element={<TipeDataDasar />} />
        <Route path="bab3/integer" element={<Integer />} />
        <Route path="bab3/floating-point" element={<Float />} />
        <Route path="bab3/boolean" element={<Boolean />} />
        <Route path="bab3/char" element={<Char />} />
        <Route path="bab3/string" element={<String />} />
        <Route path="bab3/latihan-bab3" element={<LatihanBab3 />} />
        <Route path="bab3/kuis-bab3" element={<KuisBab3 />} />
        <Route path="bab3/rangkuman-bab3" element={<RangkumanBab3 />} />
      </Route>
    </Routes>
  );
};

export default MateriRoutes;
