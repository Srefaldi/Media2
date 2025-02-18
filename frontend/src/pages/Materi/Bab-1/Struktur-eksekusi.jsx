import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import gambar118 from "./img-bab1/Gambar-118.png";
import Quiz from "./Quiz-bab1/Quiz4";

const StrukturEksekusi = () => {
  const navigate = useNavigate();
  const [quizCompleted, setQuizCompleted] = useState(false);
  const { handleLessonComplete } = useOutletContext(); // Ambil fungsi dari konteks
  const handleBack = () => {
    navigate("/materi/bab1/struktur-kode");
  };

  const handleNext = () => {
    handleLessonComplete("/materi/bab1/struktur-eksekusi");
    navigate("/materi/bab1/sintaks-print");
  };

  const handleQuizComplete = () => {
    setQuizCompleted(true); // Set quiz as completed
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">1.4 Struktur Eksekusi Kode</h2>
      <p className="text-gray-700 bg-white p-4 rounded-lg shadow-md text-justify">
        Bahasa pemrograman C# memiliki struktur eksekusi kode yang sekuensial,
        yang berarti kode yang ditulis terlebih dahulu akan dieksekusi terlebih
        dahulu. Struktur eksekusi sekuensial adalah struktur umum yang digunakan
        sebagian besar bahasa pemrograman termasuk C#.
      </p>
      <h3 className="text-xl font-semibold mt-4">
        Contoh Struktur Eksekusi Kode
      </h3>
      <p className="text-gray-700 bg-white p-4 rounded-lg shadow-md text-justify">
        Dapat diketahui lebih lanjut mengenai struktur eksekusi sekuensial
        menggunakan sampel kode di bawah ini. <br />
        Cobalah kode program pada compiler:
      </p>
      <p className="text-gray-700 bg-white p-4 rounded-lg shadow-md italic text-justify">
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

      <h3 className="text-xl font-semibold mt-4">Control Structures</h3>
      <p className="text-gray-700 bg-white p-4 rounded-lg shadow-md text-justify">
        Di dalam struktur eksekusi kode terdapat control structures yang berguna
        untuk mengatur proses eksekusi sebuah kode program. Terdapat 3 tipe
        control structures dalam bahasa pemrograman:
        <ul className="list-disc list-inside bg-white p-4 rounded-lg shadow-md">
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

      <p className="text-gray-700 bg-white p-4 rounded-lg shadow-md italic text-justify">
        <div className="flex justify-center">
          <img
            src={gambar118}
            alt="Gambar 1.2 Alur eksekusi Common Language Runtime"
            className="w-170 h-auto"
          />
        </div>

        <p className="font-bold text-center">
          Gambar 1.18 Tipe control structures
        </p>
      </p>

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
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default StrukturEksekusi;
