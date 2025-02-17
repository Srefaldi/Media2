import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import gambar19 from "./img-bab1/Gambar-19.png"; // Gambar contoh Console.WriteLine
// import gambar20 from "./img-bab1/Gambar-20.png"; // Gambar contoh Console.WriteLine nilai numerik
// import gambar21 from "./img-bab1/Gambar-21.png"; // Gambar contoh menggabungkan string
// import gambar22 from "./img-bab1/Gambar-22.png"; // Gambar contoh string dan angka
// import gambar23 from "./img-bab1/Gambar-23.png"; // Gambar contoh angka dan angka

const SintaksPrint = () => {
  const navigate = useNavigate();
  const [showCompiler, setShowCompiler] = useState(false); // State for compiler visibility

  const handleBack = () => {
    navigate("/materi/bab1/struktur-eksekusi");
  };

  const toggleCompiler = () => {
    setShowCompiler(!showCompiler); // Toggle compiler visibility
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">1.5 Sintaks Print</h2>
      <h3 className="text-xl font-semibold mt-4">
        {" "}
        Menampilkan hasil dalam program menggunakan fungsi
      </h3>
      <h4 className="text-xl font-semibold mt-4"> Console.WriteLine()</h4>

      <p className="text-gray-700 bg-white p-4 rounded-lg shadow-md text-justify">
        <code>Console.WriteLine()</code> dalam bahasa pemrograman C# adalah
        sebuah command untuk menampilkan hasil di dalam (). Untuk menampilkan
        sebuah karakter atau kalimat menggunakan fungsi{" "}
        <code>Console.WriteLine()</code> maka karakter atau kalimat tersebut
        harus dilingkupi dengan tanda kutip ("").
      </p>
      <button
        onClick={toggleCompiler}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 mb-4"
      >
        {showCompiler ? "Sembunyikan Compiler" : "Coba Kode"}
      </button>
      {showCompiler && (
        <iframe
          width="100%"
          height="475"
          src="https://dotnetfiddle.net/Widget/dIqdao" // Ganti dengan link compiler yang sesuai
          frameBorder="0"
          className="mt-4"
        ></iframe>
      )}
      {/* <img
        src={gambar19}
        alt="Contoh Console.WriteLine"
        className="w-full mt-4"
      /> */}
      <p className="text-gray-700 bg-white p-4 rounded-lg shadow-md text-justify">
        Cobalah kode program pada compiler:
      </p>
      <h3 className="text-xl font-semibold mt-4">
        Contoh Console.WriteLine Nilai Numerik
      </h3>
      <p className="text-gray-700 bg-white p-4 rounded-lg shadow-md text-justify">
        Untuk mencetak nilai numerik, masukkan angka tanpa tanda kutip.
      </p>
      <button
        onClick={toggleCompiler}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 mb-4"
      >
        {showCompiler ? "Sembunyikan Compiler" : "Coba Kode"}
      </button>
      {showCompiler && (
        <iframe
          width="100%"
          height="475"
          src="https://dotnetfiddle.net/Widget/dIqdao" // Ganti dengan link compiler yang sesuai
          frameBorder="0"
          className="mt-4"
        ></iframe>
      )}
      {/* <img
        src={gambar20}
        alt="Contoh Console.WriteLine nilai numerik"
        className="w-full mt-4"
      /> */}
      <h3 className="text-xl font-semibold mt-4">
        Contoh Menggabungkan String
      </h3>
      <p className="text-gray-700 bg-white p-4 rounded-lg shadow-md text-justify">
        Anda dapat menggabungkan string dan string lainnya.
      </p>
      <button
        onClick={toggleCompiler}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 mb-4"
      >
        {showCompiler ? "Sembunyikan Compiler" : "Coba Kode"}
      </button>
      {showCompiler && (
        <iframe
          width="100%"
          height="475"
          src="https://dotnetfiddle.net/Widget/dIqdao" // Ganti dengan link compiler yang sesuai
          frameBorder="0"
          className="mt-4"
        ></iframe>
      )}
      {/* <img
        src={gambar21}
        alt="Contoh Console.WriteLine menggabungkan string"
        className="w-full mt-4"
      /> */}
      <h3 className="text-xl font-semibold mt-4">Contoh String dan Angka</h3>
      <p className="text-gray-700 bg-white p-4 rounded-lg shadow-md text-justify">
        Anda juga dapat menggabungkan string dan angka.
      </p>
      <button
        onClick={toggleCompiler}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 mb-4"
      >
        {showCompiler ? "Sembunyikan Compiler" : "Coba Kode"}
      </button>
      {showCompiler && (
        <iframe
          width="100%"
          height="475"
          src="https://dotnetfiddle.net/Widget/dIqdao" // Ganti dengan link compiler yang sesuai
          frameBorder="0"
          className="mt-4"
        ></iframe>
      )}
      {/* <img
        src={gambar22}
        alt="Contoh Console.WriteLine string dan angka"
        className="w-full mt-4"
      /> */}
      <h3 className="text-xl font-semibold mt-4">Contoh Angka dan Angka</h3>
      <p className="text-gray-700 bg-white p-4 rounded-lg shadow-md text-justify">
        Anda juga dapat menggabungkan angka dan angka lainnya.
      </p>
      <button
        onClick={toggleCompiler}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 mb-4"
      >
        {showCompiler ? "Sembunyikan Compiler" : "Coba Kode"}
      </button>
      {showCompiler && (
        <iframe
          width="100%"
          height="475"
          src="https://dotnetfiddle.net/Widget/dIqdao" // Ganti dengan link compiler yang sesuai
          frameBorder="0"
          className="mt-4"
        ></iframe>
      )}
      {/* <img
        src={gambar23}
        alt="Contoh Console.WriteLine angka dan angka"
        className="w-full mt-4"
      /> */}
    </div>
  );
};

export default SintaksPrint;
