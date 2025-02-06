import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import alur from "./img-bab1/alur.png";
import logoc from "./img-bab1/logo.png";

const PengenalanCSharp = () => {
  const [isPendahuluanOpen, setPendahuluanOpen] = useState(false);
  const [isTujuanOpen, setTujuanOpen] = useState(false);
  const [isKontenOpen, setKontenOpen] = useState(false);

  const togglePendahuluan = () => setPendahuluanOpen(!isPendahuluanOpen);
  const toggleTujuan = () => setTujuanOpen(!isTujuanOpen);
  const toggleKonten = () => setKontenOpen(!isKontenOpen);

  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">
        BAB 1 - PENDAHULUAN
      </h1>

      <div>
        <h3
          className="font-bold cursor-pointer flex items-center"
          onClick={togglePendahuluan}
        >
          PENDAHULUAN MATERI
          <span className="ml-2">{isPendahuluanOpen ? "▲" : "▼"}</span>
        </h3>
        {isPendahuluanOpen && (
          <div className="text-gray-700 bg-white p-4 rounded-lg shadow-md text-justify">
            <p>
              Pada bab ini, kita akan mempelajari pendahuluan bahasa pemrograman
              C#. Bahasa ini memiliki kesamaan dan perbedaan dengan bahasa
              pemrograman lain, yang memberikan ciri khas tersendiri. Setelah
              mempelajari materi ini, diharapkan pembaca dapat menulis kode
              program sesuai ketentuan dan menghindari kesalahan umum dalam
              pemrograman.
            </p>
          </div>
        )}
      </div>

      <div>
        <h3
          className="font-bold cursor-pointer flex items-center"
          onClick={toggleTujuan}
        >
          TUJUAN PEMBELAJARAN
          <span className="ml-2">{isTujuanOpen ? "▲" : "▼"}</span>
        </h3>
        {isTujuanOpen && (
          <ul className="text-gray-700 bg-white p-4 rounded-lg shadow-md list-disc pl-6 text-justify">
            <li>Mampu memahami struktur kode bahasa pemrograman C#</li>
            <li>
              Mampu memahami struktur eksekusi kode (sequence, selection, dan
              iteration)
            </li>
            <li>
              Mampu menggunakan sintaks print untuk fungsi output dan sintaks
              komentar
            </li>
            <li>
              Mampu mengetahui jenis-jenis error yang ada pada bahasa
              pemrograman C#
            </li>
          </ul>
        )}
      </div>

      <div>
        <h3
          className="font-bold cursor-pointer flex items-center"
          onClick={toggleKonten}
        >
          KONTEN MATERI
          <span className="ml-2">{isKontenOpen ? "▲" : "▼"}</span>
        </h3>
        {isKontenOpen && (
          <ul className="text-gray-700 bg-white p-4 rounded-lg shadow-md list-decimal pl-6 text-justify">
            <li>Pengenalan C#</li>
            <li>Instalasi Setup .NET dan Visual Studio Code</li>
            <li>Struktur Kode Bahasa Pemrograman C#</li>
            <li>Struktur Eksekusi Kode</li>
            <li>Sintaks Print</li>
            <li>Sintaks Komentar</li>
            <li>Error pada C#</li>
          </ul>
        )}
      </div>

      <div>
        <h2 className="font-bold text-2xl">1.1 Pengenalan C#</h2>

        <div className="text-gray-700 bg-white p-4 rounded-lg shadow-md text-justify">
          <p>
            C# (“See-Sharp”) adalah bahasa pemrograman modern yang dikembangkan
            oleh Microsoft sebagai bagian dari inisiatif .NET mereka. Bahasa ini
            pertama kali dirilis pada tahun 2000 dan dirancang di bawah
            kepemimpinan Anders Hejlsberg, seorang tokoh terkemuka dalam
            pengembangan bahasa pemrograman, yang juga dikenal sebagai
            pengembang Borland Turbo C++ dan Borland Delphi. C# merupakan bahasa
            yang dikompilasi dan sangat kuat, fleksibel, serta mendukung
            pemrograman berorientasi objek.
          </p>
        </div>

        <div className="flex justify-center p-4">
          <img src={logoc} alt="Gambar 1.1 Logo C#" className="w-60 h-auto" />
        </div>
        <p className="font-bold text-center">Gambar 1.1 Logo C#</p>

        <div className="text-gray-700 bg-white p-4 rounded-lg shadow-md text-justify">
          <p>
            Seperti halnya bahasa pemrograman yang lain, C# bisa digunakan untuk
            membangun berbagai macam jenis aplikasi, seperti aplikasi berbasis
            windows (desktop) dan aplikasi berbasis web serta aplikasi berbasis
            web services. <br />
          </p>
        </div>
        <div className="text-gray-700 bg-white p-4 rounded-lg shadow-md text-justify">
          <p>
            C# dikembangkan sebagai respons terhadap kebutuhan akan bahasa
            pemrograman yang kuat namun sederhana untuk mengembangkan aplikasi
            pada platform Microsoft. Bahasa ini dipengaruhi oleh beberapa bahasa
            pemrograman lain seperti C++, Java, dan Delphi, mengambil elemen
            terbaik dari masing-masing bahasa untuk menciptakan bahasa yang
            efisien dan mudah digunakan. Pada tahun 2002, versi pertama C#
            diperkenalkan sebagai bagian dari .NET Framework 1.0. Sejak saat
            itu, C# telah mengalami beberapa pembaruan dan perbaikan yang
            signifikan.
          </p>
        </div>
        <div className="text-gray-700 bg-white p-4 rounded-lg shadow-md text-justify">
          <p>
            Pada tahun 2003, C# diakui sebagai standar oleh ECMA (European
            Computer Manufacturers Association) dan ISO (International
            Organization for Standardization), yang membantu dalam penyebaran
            bahasa ini secara global.
          </p>
        </div>
        <div className="text-gray-700 bg-white p-4 rounded-lg shadow-md text-justify">
          <p>
            Program C# tidak seperti program C dan C++ yang di-compile menjadi
            binary yang bisa dieksekusi langsung oleh prosesor. Program C#
            di-compile menjadi CIL (Common Intermediate Language). Komunitas
            Visual Studio hanya mengubah program Bahasa C# menjadi MIL, yang
            merupakan singkatan dari Microsoft Intermediate Language. Kode MIL
            ini kemudian diubah menjadi bahasa mesin oleh sistem eksekusi
            virtual yang dikenal sebagai Common Language Runtime. Seperti Gambar
            dibawah ini.
          </p>
        </div>

        <div className="flex justify-center p-4">
          <img
            src={alur}
            alt="Gambar 1.2 Alur eksekusi Common Language Runtime"
            className="w-100 h-auto"
          />
        </div>
        <p className="font-bold text-center">
          Gambar 1.2 Alur eksekusi Common Language Runtime
        </p>
      </div>

      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
        >
          Kembali
        </button>
        <button
          onClick={() => navigate("/materi/bab1/instalasi")}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PengenalanCSharp;
