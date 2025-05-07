import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import gambar118 from "./img-bab1/Gambar-118.png";
import Quiz from "./Quiz-bab1/Quiz4";
import nextIcon from "../../../assets/img/selanjutnya.png";
import backIcon from "../../../assets/img/kembali.png";

const StrukturEksekusi = () => {
  const navigate = useNavigate();
  const [quizCompleted, setQuizCompleted] = useState(false);
  const { handleLessonComplete } = useOutletContext(); // Ambil fungsi dari konteks

  const handleBack = () => {
    window.scrollTo(0, 0);
    navigate("/materi/bab1/struktur-kode");
  };

  const handleNext = () => {
    handleLessonComplete("/materi/bab1/struktur-eksekusi");
    window.scrollTo(0, 0);
    navigate("/materi/bab1/sintaks-print");
  };

  const handleQuizComplete = () => {
    handleLessonComplete("/materi/bab1/sintaks-print");
    setQuizCompleted(true);
  };

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold text-center">
        BAB 1 - PENDAHULUAN
      </h1>
      <h2 className="mb-4 text-2xl font-bold">1.4 Struktur Eksekusi Kode</h2>
      <p className="p-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        Bahasa pemrograman C# memiliki struktur eksekusi kode yang sekuensial,
        yang berarti kode yang ditulis terlebih dahulu akan dieksekusi terlebih
        dahulu. Struktur eksekusi sekuensial adalah struktur umum yang digunakan
        sebagian besar bahasa pemrograman termasuk C#.
      </p>
      <h3 className="mt-4 text-xl font-semibold">
        Contoh Struktur Eksekusi Kode
      </h3>
      <p className="p-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        Dapat diketahui lebih lanjut mengenai struktur eksekusi sekuensial
        menggunakan sampel kode di bawah ini. <br />
        Cobalah kode program pada compiler:
      </p>
      <p className="p-4 italic text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <iframe
          width="100%"
          height="475"
          src="https://dotnetfiddle.net/Widget/DuCLpB"
        ></iframe>
        Pada kode di atas, program yang mencetak tiga baris string yang berisi
        nama jenis Pakaian yang akan dicetak pada sampel kode di atas akan
        ditampilkan dimulai dari "Ini Baju", "Ini Celana", hingga "Ini Topi"
        yang akan dicetak terakhir.
      </p>

      <h3 className="mt-4 text-xl font-semibold">Control Structures</h3>
      <p className="p-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        Di dalam struktur eksekusi kode terdapat control structures yang berguna
        untuk mengatur proses eksekusi sebuah kode program. Terdapat 3 tipe
        control structures dalam bahasa pemrograman:
        <ul className="p-4 list-disc list-inside bg-white rounded-lg shadow-md">
          <li>
            <strong>Sequence</strong> - struktur dimana perintah dieksekusi
            secara berurutan.
          </li>
          <li>
            <strong>Selection</strong> - struktur dimana salah satu dari
            beberapa instruksi dipilih dan dieksekusi.
          </li>
          <li>
            <strong>Iteration</strong> - struktur dimana perintah yang sama
            dieksekusi berulang kali.
          </li>
        </ul>
      </p>

      <p className="p-4 italic text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <div className="flex justify-center">
          <img
            src={gambar118}
            alt="Gambar 1.2 Alur eksekusi Common Language Runtime"
            className="h-auto w-170"
          />
        </div>

        <p className="font-bold text-center">
          Gambar 1.18 Tipe control structures
        </p>
      </p>

      {/* Kuis */}
      {!quizCompleted && <Quiz onComplete={handleQuizComplete} />}

      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handleBack}
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

export default StrukturEksekusi;
