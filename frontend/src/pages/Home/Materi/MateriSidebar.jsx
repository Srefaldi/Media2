import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import styled from "styled-components";

const ScrollableList = styled.ul`
  overflow-y: auto; /* Pastikan overflow-y diatur ke auto */
  
  /* Sembunyikan scrollbar di WebKit (Chrome, Safari) */
  &::-webkit-scrollbar {
    display: none; /* Sembunyikan scrollbar */
  }

  /* Untuk Firefox, Anda bisa menggunakan ini */
  scrollbar-width: none; /* Sembunyikan scrollbar di Firefox */
`;

const daftarBab = [
  {
  id: "bab1",
  judul: "PENDAHULUAN",
  subBab: [
    { path: "/materi/bab1/pengenalan", label: "1.1 Pengenalan C#" },
    { path: "/materi/bab1/instalasi", label: "1.2 Instalasi Setup .NET dan Visual Studio Code" },
    { path: "/materi/bab1/struktur-kode", label: "1.3 Struktur Kode Bahasa Pemrograman C#" },
    { path: "/materi/bab1/struktur-eksekusi", label: "1.4 Struktur Eksekusi Kode" },
    { path: "/materi/bab1/sintaks-print", label: "1.5 Sintaks Print" },
    { path: "/materi/bab1/sintaks-komentar", label: "1.6 Sintaks Komentar" },
    { path: "/materi/bab1/error", label: "1.7 Error Pada C#" },
    { path: "/materi/bab1/latihan", label: "Latihan" },
    { path: "/materi/bab1/kuis", label: "KUIS" },
    { path: "/materi/bab1/rangkuman", label: "RANGKUMAN" },
  ],
},
{
  id: "bab2",
  judul: "VARIABEL",
  subBab: [
    { path: "/materi/bab2/pengertian-variabel", label: "2.1 Pengertian Variabel" },
    { path: "/materi/bab2/penamaan-variabel", label: "2.2 Penamaan Variabel" },
    { path: "/materi/bab2/kategori-variabel", label: "2.3 Kategori Variabel" },
    { path: "/materi/bab2/deklarasi-inialisasi", label: "2.4 Deklarasi dan Inisialisasi Variabel" },
    { path: "/materi/bab2/deklarasi-banyak", label: "2.5 Deklarasi Banyak Variabel" },
    { path: "/materi/bab2/variabel-konstanta", label: "2.6 Variabel Konstanta" },
    { path: "/materi/bab2/sintaks-input", label: "2.7 Sintaks Input" },
    { path: "/materi/bab2/latihan", label: "Latihan" },
    { path: "/materi/bab2/kuis", label: "KUIS" },
    { path: "/materi/bab2/rangkuman", label: "Rangkuman" },
  ],
},
];

const MateriSidebar = () => {
  const [openBab, setOpenBab] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleDropdown = (babId) => {
    setOpenBab(openBab === babId ? null : babId);
  };

  return (
    <>
      {/* Tombol Toggle Sidebar */}
      {/* <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded shadow-lg hover:bg-gray-700"
      >
        ☰
      </button> */}

      {/* Sidebar */}
      <div
        className={classNames(
          "fixed left-0 top-0 h-screen bg-gray-800 text-white p-4 w-64 overflow-y-auto transition-transform duration-300 ease-in-out",
          { "-translate-x-full": !sidebarOpen }
        )}
      >
        <h2 className="text-xl font-bold mb-4">📚 Materi C#</h2>
        <ul className="space-y-2">
          {daftarBab.map((bab) => (
            <li key={bab.id}>
              <button
                onClick={() => toggleDropdown(bab.id)}
                className="w-full text-left p-2 flex justify-between items-center rounded bg-gray-700 hover:bg-gray-600"
              >
                <span>🗂 {bab.judul}</span>
                <span>{openBab === bab.id ? "▲" : "▼"}</span>
              </button>
              {/* Submenu dengan Scroll */}
              <ScrollableList
                className={classNames(
                  "pl-4 transition-all duration-300",
                  { "max-h-[300px]": openBab === bab.id, "max-h-0": openBab !== bab.id }
                )}
              >
                {bab.subBab.map((sub, index) => (
                  <li key={index}>
                    <Link to={sub.path} className="block p-2 hover:bg-gray-600 rounded">
                      {sub.label}
                    </Link>
                  </li>
                ))}
              </ScrollableList>
            </li>
          ))}
        </ul>

        {/* Tombol Kembali ke Dashboard */}
        <div className="mt-6">
          <Link
            to="/dashboard"
            className="block text-center bg-blue-500 text-white py-2 px-4 rounded-full hover:bg -blue-600 transition"
          >
            Kembali ke Dashboard
          </Link>
        </div>
      </div>
    </>
  );
};

export default MateriSidebar;