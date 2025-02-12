import React from "react";
import { useNavigate } from "react-router-dom";

const StrukturKode = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/materi/bab1/instalasi");
  };

  const handleNext = () => {
    navigate("/materi/bab1/struktur-eksekusi");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">
        BAB 1 - PENDAHULUAN
      </h1>

      <div>
        <h2 className="font-bold text-2xl">
          1.3 Struktur Kode Bahasa Pemrograman C#
        </h2>

        <p className="text-gray-700 bg-white p-4 rounded-lg shadow-md text-justify">
          Sebelum memulai pembelajaran pemrograman kita perlu mengetahui
          struktur dasar dari kode bahasa pemrograman C#. Kita dapat melihat
          struktur kode bahasa pemrograman C# yang paling dasar dengan contoh
          kode di bawah ini.
          <br />
          Cobalah code pada complier :
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <iframe
            width="100%"
            height="475"
            src="https://dotnetfiddle.net/Widget/DuCLpB"
          ></iframe>
        </pre>

        <p className="text-gray-700 bg-white p-4 rounded-lg shadow-md text-justify">
          Penjelasan Kode:
        </p>

        <ul className="list-disc pl-6 bg-white p-4 rounded-lg shadow-md">
          <li>
            <strong>using System;</strong> - Digunakan untuk mengimpor namespace
            System, sehingga kita dapat menggunakan kelas seperti Console tanpa
            menuliskan System.Console.
          </li>
          <li>
            <strong>namespace CsharpLearn</strong> - Namespace berfungsi untuk
            mengelompokkan kode agar terorganisir dan menghindari konflik nama.
          </li>
          <li>
            <strong>class Program</strong> - Adalah kerangka utama yang berisi
            data dan metode program.
          </li>
          <li>
            <strong>static void Main(string[ ] args)</strong> - Titik awal
            eksekusi program. Parameter <em>args</em> digunakan untuk menerima
            argumen dari command line.
          </li>
          <li>
            <strong>Console.WriteLine</strong> - Pernyataan untuk menampilkan
            teks ke layar.
          </li>
        </ul>
      </div>

      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handleBack}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
        >
          Kembali
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StrukturKode;
