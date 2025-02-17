import React from 'react';
import Navbar from "../../components/Landing/Navbar";
import Footer from "../../components/Landing/Footer";

const Informasi = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-center text-white bg-[#001F3F] py-4 rounded-lg">Informasi Aplikasi</h2>
        
        {/* Informasi Aplikasi */}
        <div className="bg-white shadow-md rounded-lg p-6 mt-6">
          <h3 className="text-2xl font-semibold text-[#001F3F]">Judul Aplikasi</h3>
          <p className="text-gray-700 mt-2">Aplikasi Media Pembelajaran Interaktif</p>
          <h3 className="text-2xl font-semibold text-[#001F3F] mt-4">Informasi Pengembang</h3>
          <p className="text-gray-700 mt-2">Dikembangkan oleh: Tim Pengembang Aplikasi</p>
        </div>

        {/* Pedoman dan Sumber Acuan */}
        <div className="bg-white shadow-md rounded-lg p-6 mt-6">
          <h3 className="text-2xl font-semibold text-[#001F3F]">Pedoman dan Sumber Acuan</h3>
          <ul className="text-gray-700 mt-2 list-disc list-inside">
            <li>Dokumentasi Microsoft C#</li>
          </ul>
        </div>

        {/* Petunjuk Aplikasi */}
        <div className="bg-white shadow-md rounded-lg p-6 mt-6">
          <h3 className="text-2xl font-semibold text-[#001F3F]">Petunjuk Penggunaan</h3>
          <p className="text-gray-700 mt-2">Panduan untuk menggunakan aplikasi ini:</p>
          <ul className="text-gray-700 mt-2 list-disc list-inside">
            
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Informasi;
