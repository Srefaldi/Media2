import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Quiz from "./Quiz-bab1/Quiz3";
import nextIcon from "../../../assets/img/selanjutnya.png";
import backIcon from "../../../assets/img/kembali.png";

const StrukturKode = () => {
  const navigate = useNavigate();
  const [quizCompleted, setQuizCompleted] = useState(false);
  const { handleLessonComplete } = useOutletContext();
  const handleBack = () => {
    window.scrollTo(0, 0);
    navigate("/materi/bab1/instalasi");
  };

  const handleNext = () => {
    handleLessonComplete("/materi/bab1/struktur-kode");
    window.scrollTo(0, 0);
    navigate("/materi/bab1/struktur-eksekusi");
  };

  const handleQuizComplete = () => {
    setQuizCompleted(true);
  };

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold text-center">
        BAB 1 - PENDAHULUAN
      </h1>

      <div>
        <h2 className="text-2xl font-bold">
          1.3 Struktur Kode Bahasa Pemrograman C#
        </h2>

        <p className="p-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
          Sebelum memulai pembelajaran pemrograman kita perlu mengetahui
          struktur dasar dari kode bahasa pemrograman C#. Kita dapat melihat
          struktur kode bahasa pemrograman C# yang paling dasar dengan contoh
          kode di bawah ini.
          <br />
          Cobalah kode pada compiler:
        </p>

        <pre className="p-4 bg-gray-100 rounded-lg overflow-x -auto">
          <iframe
            width="100%"
            height="475"
            src="https://dotnetfiddle.net/Widget/DuCLpB"
            frameBorder="0"
          ></iframe>
        </pre>

        <p className="p-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
          Penjelasan Kode:
        </p>

        <ul className="p-4 pl-6 list-disc bg-white rounded-lg shadow-md">
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
            <strong>static void Main(string[] args)</strong> - Titik awal
            eksekusi program. Parameter <em>args</em> digunakan untuk menerima
            argumen dari command line.
          </li>
          <li>
            <strong>Console.WriteLine</strong> - Pernyataan untuk menampilkan
            teks ke layar.
          </li>
        </ul>
      </div>

      {/* Kuis */}
      {!quizCompleted && <Quiz onComplete={handleQuizComplete} />}

      {/* Tombol Navigasi */}
      {quizCompleted && (
        <div className="flex justify-between mt-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
          >
            <img src={backIcon} alt="Kembali" className="w-5 h-5 mr-2" />
            Kembali
          </button>
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
            <img
              src={nextIcon}
              alt="Selanjutnya"
              className="w-5 h-5 ml-2"
            />{" "}
            {/* Ikon di pojok kanan */}
          </button>
        </div>
      )}
    </div>
  );
};

export default StrukturKode;
