import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Quiz from "./Quiz-bab1/Quiz3";

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
          Cobalah kode pada compiler:
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x -auto">
          <iframe
            width="100%"
            height="475"
            src="https://dotnetfiddle.net/Widget/DuCLpB"
            frameBorder="0"
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
            onClick={handleBack}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Kembali
          </button>
          <button
            onClick={handleNext}
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
            Selanjutnya
          </button>
        </div>
      )}
    </div>
  );
};

export default StrukturKode;
