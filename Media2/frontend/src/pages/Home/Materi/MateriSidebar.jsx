import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import styled from "styled-components";

const ScrollableList = styled.ul`
  overflow-y: auto; /* Pastikan overflow-y diatur ke auto */
  &::-webkit-scrollbar {
    display: none; /* Sembunyikan scrollbar */
  }
  scrollbar-width: none; /* Sembunyikan scrollbar di Firefox */
`;

const daftarBab = [
  {
    id: "bab1",
    judul: "PENDAHULUAN",
    subBab: [
      { path: "/materi/bab1/pengenalan", label: "1.1 Pengenalan C#" },
      {
        path: "/materi/bab1/instalasi",
        label: "1.2 Instalasi Setup .NET dan Visual Studio Code",
      },
      {
        path: "/materi/bab1/Struktur-kode",
        label: "1.3 Struktur Kode Bahasa Pemrograman C#",
      },
      {
        path: "/Materi/bab1/Struktur-eksekusi",
        label: "1.4 Struktur Eksekusi Kode",
      },
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
      {
        path: "/materi/bab2/pengertian-variabel",
        label: "2.1 Pengertian Variabel",
      },
      {
        path: "/materi/bab2/penamaan-variabel",
        label: "2.2 Penamaan Variabel",
      },
      {
        path: "/materi/bab2/kategori-variabel",
        label: "2.3 Kategori Variabel",
      },
      {
        path: "/materi/bab2/deklarasi-inialisasi",
        label: "2.4 Deklarasi dan Inisialisasi Variabel",
      },
      {
        path: "/materi/bab2/deklarasi-banyak",
        label: "2.5 Deklarasi Banyak Variabel",
      },
      {
        path: "/materi/bab2/variabel-konstanta",
        label: "2.6 Variabel Konstanta",
      },
      { path: "/materi/bab2/sintaks-input", label: "2.7 Sintaks Input" },
      { path: "/materi/bab2/latihan", label: "Latihan" },
      { path: "/materi/bab2/kuis", label: "KUIS" },
      { path: "/materi/bab2/rangkuman", label: "Rangkuman" },
    ],
  },
  {
    id: "bab3",
    judul: "TIPE DATA",
    subBab: [
      {
        path: "/materi/bab3/pengertian-tipe-data",
        label: "3.1 Pengertian Tipe Data",
      },
      {
        path: "/materi/bab3/klasifikasi-tipe-data",
        label: "3.2 Klasifikasi Tipe Data",
      },
      { path: "/materi/bab3/tipe-data-dasar", label: "3.3 Tipe Data Dasar" },
      { path: "/materi/bab3/integer", label: "1. Integer" },
      { path: "/materi/bab3/floating-point", label: "2. Floating-point" },
      { path: "/materi/bab3/boolean", label: "3. Boolean" },
      { path: "/materi/bab3/char", label: "4. Char" },
      { path: "/materi/bab3/string", label: "5. String" },
      { path: "/materi/bab3/latihan", label: "Latihan" },
      { path: "/materi/bab3/kuis", label: "KUIS" },
      { path: "/materi/bab3/rangkuman", label: "Rangkuman" },
    ],
  },
  {
    id: "bab4",
    judul: "OPERATOR",
    subBab: [
      {
        path: "/materi/bab4/pengertian-operator",
        label: "4.1 Pengertian Operator",
      },
      {
        path: "/materi/bab4/operator-arithmetic",
        label: "Operator Arithmetic (Aritmatika)",
      },
      {
        path: "/materi/bab4/operator-increment-decrement",
        label: "Operator Increment dan Decrement",
      },
      {
        path: "/materi/bab4/operator-assignment",
        label: "Operator Assignment (Penugasan)",
      },
      {
        path: "/materi/bab4/operator-comparison",
        label: "Operator Comparison (Perbandingan)",
      },
      { path: "/materi/bab4/operator-logika", label: "Operator Logika" },
      {
        path: "/materi/bab4/operator-conditional",
        label: "Operator Conditional (Bersyarat)",
      },
      {
        path: "/materi/bab4/operator-equality",
        label: "Operator Equality (Kesetaraan)",
      },
      { path: "/materi/bab4/latihan", label: "Latihan" },
      { path: "/materi/bab4/kuis", label: "KUIS" },
      { path: "/materi/bab4/rangkuman", label: "Rangkuman" },
    ],
  },
  {
    id: "bab5",
    judul: "KONTROL ALUR",
    subBab: [
      {
        path: "/materi/bab5/pengertian-kontrol-alur",
        label: "5.1 Pengertian Kontrol Alur",
      },
      {
        path: "/materi/bab5/pernyataan-if-else",
        label: "5.2 Pernyataan If-Else",
      },
      {
        path: "/materi/bab5/pernyataan-switch",
        label: "5.3 Pernyataan Switch",
      },
      {
        path: "/materi/bab5/pernyataan-perulangan",
        label: "5.4 Pernyataan Perulangan (for, while, do-while)",
      },
      {
        path: "/materi/bab5/pernyataan-break-continue",
        label: "5.5 Pernyataan Break dan Continue",
      },
      {
        path: "/materi/bab5/perulangan-bersarang",
        label: "5.6 Perulangan Bersarang",
      },
      { path: "/materi/bab5/latihan", label: "Latihan" },
      { path: "/materi/bab5/kuis", label: "KUIS" },
      { path: "/materi/bab5/rangkuman", label: "Rangkuman" },
    ],
  },
  {
    id: "bab6",
    judul: "METHOD",
    subBab: [
      {
        path: "/materi/bab6/pengenalan-method",
        label: "6.1 Pengenalan Method",
      },
      { path: "/materi/bab6/method-void", label: "6.2 Method Void" },
      {
        path: "/materi/bab6/method-dengan-tipe-data",
        label: "6.3 Method Dengan Tipe Data",
      },
      { path: "/materi/bab6/parameter-method", label: "6.4 Parameter Method" },
      { path: "/materi/bab6/latihan", label: "Latihan" },
      { path: "/materi/bab6/kuis", label: "KUIS" },
      { path: "/materi/bab6/rangkuman", label: "Rangkuman" },
    ],
  },
];

const MateriSidebar = ({ completedLessons }) => {
  const [openBab, setOpenBab] = useState(null);

  const toggleDropdown = (babId) => {
    setOpenBab(openBab === babId ? null : babId);
  };

  return (
    <div className="bg-[#001F3F] text-white p-4 w-64 overflow-y-auto">
      <h2 className="text-center text-xl font-bold mb-4">DAFTAR MATERI</h2>
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
            <ScrollableList
              className={classNames("pl-4 transition-all duration-300", {
                "max-h-[300px]": openBab === bab.id,
                "max-h-0": openBab !== bab.id,
              })}
            >
              {bab.subBab.map((sub, index) => (
                <li key={index}>
                  <Link
                    to={sub.path}
                    className={`text-white block p-2 hover:bg-gray-600 rounded ${
                      completedLessons.includes(sub.path)
                        ? ""
                        : "opacity-50 cursor-not-allowed"
                    }`}
                    onClick={(e) => {
                      if (!completedLessons.includes(sub.path)) {
                        e.preventDefault();
                      }
                    }}
                  >
                    {sub.label}
                  </Link>
                </li>
              ))}
            </ScrollableList>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Link
          to="/dashboard"
          className="block text-center bg-[#526D82] text-white py-2 px-4 rounded-full hover:bg-blue-600 transition"
        >
          Kembali ke Dashboard
        </Link>
      </div>
    </div>
  );
};

export default MateriSidebar;
