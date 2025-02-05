import React from 'react';
import Navbar from "../../components/Landing/Navbar";
import Footer from "../../components/Landing/Footer";

const daftarMateri = [
  {
    bab: "BAB 1", judul: "PENDAHULUAN", subMateri: [
      "Pengenalan C#",
      "Instalasi C#",
      "Struktur Kode Pemrograman C#",
      "Struktur Eksekusi Kode",
      "Sintaks Print",
      "Sintaks Komentar",
      "Error Pada C#"
    ]
  },
  {
    bab: "BAB 2", judul: "VARIABEL", subMateri: [
      "Pengertian Variabel",
      "Penamaan Variabel",
      "Kategori Variabel",
      "Deklarasi dan Inialisasi Variabel",
      "Deklarasi Banyak Variabel",
      "Variabel Konstanta",
      "Sintaks Input"
    ]
  },
  {
    bab: "BAB 3", judul: "TIPE DATA", subMateri: [
      "Pengertian Tipe Data",
      "Klasifikasi Tipe Data",
      "Tipe Data Dasar"
    ]
  },
  {
    bab: "BAB 4", judul: "OPERATOR", subMateri: [
      "Pengertian Operator",
      "Operator Arithmetic",
      "Operator Increment Decrement",
      "Operator Assignment",
      "Operator Comparison",
      "Operator Logika",
      "Operator Conditional",
      "Operator Equality"
    ]
  },
  {
    bab: "BAB 5", judul: "KONTROL ALUR", subMateri: [
      "Pengertian Kontrol Alur",
      "Pernyataan If-Else",
      "Pernyataan Switch",
      "Pernyataan Perulangan",
      "Pernyataan Break dan Continue",
      "Perulangan Bersarang"
    ]
  },
  {
    bab: "BAB 6", judul: "METHOD", subMateri: [
      "Pengenalan Method",
      "Method Void",
      "Method Dengan Tipe Data",
      "Parameter Method"
    ]
  }
];

const Informasi = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-center mb-6">MATERI PEMBELAJARAN</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {daftarMateri.map((materi, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition relative"
            >
              <div className="absolute top-0 left-0 w-full bg-[#001F3F] text-white text-center rounded-t-lg p-4">
                <h3 className="text-xl font-semibold">{materi.bab}</h3>
                <p className="text-lg font-bold">{materi.judul}</p>
              </div>
              <div className="pt-20">
                <ul className="text-gray-600 text-sm mt-2 list-disc list-inside">
                  {materi.subMateri.map((sub, i) => (
                    <li key={i}>{sub}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Informasi;
