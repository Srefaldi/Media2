import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import alur from "./img-bab1/alur.png";
import logoc from "./img-bab1/logo.png";
import { useOutletContext } from "react-router-dom";
import Quiz from "./Quiz-bab1/Quiz1";
import nextIcon from "../../../assets/img/selanjutnya.png";
import backIcon from "../../../assets/img/kembali.png";
import iconBook from "../../../assets/img/book.png";
import iconTujuan from "../../../assets/img/tujuan.png";
import iconKonten from "../../../assets/img/konten.png";

const PengenalanCSharp = () => {
  const [openSections, setOpenSections] = useState({
    pendahuluan: false,
    tujuan: false,
    konten: false,
  });
  const navigate = useNavigate();
  const { handleLessonComplete } = useOutletContext();
  const [quizCompleted, setQuizCompleted] = useState(false);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleQuizComplete = () => {
    console.log("Quiz completed, calling handleLessonComplete");
    setQuizCompleted(true);
    handleLessonComplete("/materi/bab1/pengenalan");
  };

  const handleNext = () => {
    console.log("Navigating to next lesson");
    handleLessonComplete("/materi/bab1/instalasi");
    window.scrollTo(0, 0);
    navigate("/materi/bab1/struktur-kode");
  };

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold text-center">
        BAB 1 - PENDAHULUAN
      </h1>

      {/* Pendahuluan Materi */}
      <div className="w-full mb-4 border border-gray-300 rounded-lg">
        <h3
          className="flex items-center p-4 font-bold text-white cursor-pointer"
          onClick={() => toggleSection("pendahuluan")}
          style={{ backgroundColor: "#68217A" }}
        >
          <img src={iconBook} alt="Icon" className="w-8 h-8 mr-2" />
          PENDAHULUAN MATERI
          <span className="ml-2">▼</span>
        </h3>
        <div className="p-4 text-justify text-gray-700 bg-white rounded-b-lg">
          <p>
            Pada bab ini, kita akan mempelajari pendahuluan bahasa pemrograman
            C#. Bahasa ini memiliki kesamaan dan perbedaan dengan bahasa
            pemrograman lain, yang memberikan ciri khas tersendiri. Setelah
            mempelajari materi ini, diharapkan pembaca dapat menulis kode
            program sesuai ketentuan dan menghindari kesalahan umum dalam
            pemrograman.
          </p>
        </div>
      </div>

      {/* Tujuan Pembelajaran */}
      <div
        className="w-full mb-4 border border-gray-300 rounded-lg"
        style={{ backgroundColor: "#68217A" }}
      >
        <h3
          className="flex items-center p-4 font-bold text-white cursor-pointer"
          onClick={() => toggleSection("tujuan")}
        >
          <img src={iconTujuan} alt="Icon" className="w-8 h-8 mr-2" />
          TUJUAN PEMBELAJARAN
          <span className="ml-2"> ▼</span>
        </h3>

        <ul className="p-4 pl-6 text-justify text-gray-700 list-disc bg-white rounded-b-lg">
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
            Mampu mengetahui jenis-jenis error yang ada pada bahasa pemrograman
            C#
          </li>
        </ul>
      </div>

      {/* Konten Materi */}
      <div
        className="w-full mb-4 border border-gray-300 rounded-lg"
        style={{ backgroundColor: "#68217A" }}
      >
        <h3
          className="flex items-center p-4 font-bold text-white cursor-pointer"
          onClick={() => toggleSection("konten")}
        >
          <img src={iconKonten} alt="Icon" className="w-8 h-8 mr-2" />
          KONTEN MATERI
          <span className="ml-2">▼</span>
        </h3>

        <ul className="p-4 pl-6 text-justify text-gray-700 list-none bg-white rounded-b-lg">
          <li>
            <strong>1.1 Pengenalan C#</strong>
          </li>
          <li>
            <strong>1.2 Instalasi</strong> Setup .NET dan Visual Studio Code
          </li>
          <li>
            <strong>1.3 Struktur Kode</strong> Bahasa Pemrograman C#
          </li>
          <li>
            <strong>1.4 Struktur Eksekusi Kode</strong>
          </li>
          <li>
            <strong>1.5 Sintaks Print</strong>
          </li>
          <li>
            <strong>1.6 Sintaks Komentar</strong>
          </li>
          <li>
            <strong>1.7 Error</strong> pada C#
          </li>
          <li>
            <strong>1.8 Rangkuman</strong>
          </li>
        </ul>
      </div>

      {/* Pengertian C# */}
      <div>
        <h2 className="text-2xl font-bold">1.1 Pengenalan C#</h2>

        <div className="p-4 mb-6 text-justify text-gray-700 bg-white rounded-lg shadow-md">
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

        <div className="flex justify-center p-4 mb-6">
          <img src={logoc} alt="Gambar 1.1 Logo C#" className="h-auto w-60" />
        </div>
        <p className="mb-6 font-bold text-center">Gambar 1.1 Logo C#</p>

        <div className="p-4 mb-6 text-justify text-gray-700 bg-white rounded-lg shadow-md">
          <p>
            Seperti halnya bahasa pemrograman yang lain, C# bisa digunakan untuk
            membangun berbagai macam jenis aplikasi, seperti aplikasi berbasis
            windows (desktop) dan aplikasi berbasis web serta aplikasi berbasis
            web services. <br />
          </p>
        </div>
        <div className="p-4 mb-6 text-justify text-gray-700 bg-white rounded-lg shadow-md">
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
        <div className="p-4 mb-6 text-justify text-gray-700 bg-white rounded-lg shadow-md">
          <p>
            Pada tahun 2003, C# diakui sebagai standar oleh ECMA (European
            Computer Manufacturers Association) dan ISO (International
            Organization for Standardization), yang membantu dalam penyebaran
            bahasa ini secara global.
          </p>
        </div>
        <div className="p-4 mb-6 text-justify text-gray-700 bg-white rounded-lg shadow-md">
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

        <div className="flex justify-center p-4 mb-6">
          <img
            src={alur}
            alt="Gambar 1.2 Alur eksekusi Common Language Runtime"
            className="h-auto w-100"
          />
        </div>
        <p className="mb-6 font-bold text-center">
          Gambar 1.2 Alur eksekusi Common Language Runtime
        </p>
      </div>

      {/* Kuis */}
      {!quizCompleted && <Quiz onComplete={handleQuizComplete} />}

      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
        >
          <img src={backIcon} alt="Kembali" className="w-5 h-5 mr-2" />
          Kembali
        </button>
        {quizCompleted && (
          <button
            onClick={handleNext}
            className="flex items-center justify-between"
            style={{
              backgroundColor: "#6E2A7F",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#5B1F6A")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#6E2A7F")
            }
          >
            <span>Selanjutnya</span>
            <img src={nextIcon} alt="Selanjutnya" className="w-5 h-5 ml-2" />
          </button>
        )}
      </div>
    </div>
  );
};

export default PengenalanCSharp;
