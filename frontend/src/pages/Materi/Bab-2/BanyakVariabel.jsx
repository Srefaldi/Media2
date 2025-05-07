import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import nextIcon from "../../../assets/img/selanjutnya.png"; // Pastikan path ini sesuai
import backIcon from "../../../assets/img/kembali.png"; // Pastikan path ini sesuai
import QuizDeklarasiBanyakVariabel from "./Quiz-bab2/Quiz5"; // Pastikan path ini sesuai

const DeklarasiBanyakVariabel = () => {
  const navigate = useNavigate();
  const { handleLessonComplete } = useOutletContext();
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false); // Menyimpan status apakah kuis sudah benar

  const handleQuizComplete = (isPassed) => {
    handleLessonComplete("/materi/bab2/variabel-konstanta");

    setQuizCompleted(true);
    setQuizPassed(isPassed); // Set status kuis
  };

  const handleNext = () => {
    if (!quizPassed) {
      // Jika kuis belum dijawab dengan benar, tampilkan peringatan
      Swal.fire({
        title: "Oops!",
        text: "Anda harus menjawab kuis dengan benar sebelum melanjutkan.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return; // Hentikan eksekusi jika kuis belum benar
    }
    handleLessonComplete("/materi/bab2/deklarasi-banyak");
    window.scrollTo(0, 0);
    navigate("/materi/bab2/variabel-konstanta");
  };

  const handleBack = () => {
    window.scrollTo(0, 0);
    navigate("/materi/bab2/deklarasi-inialisasi");
  };

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold text-center">BAB 2 - VARIABEL</h1>
      <h2 className="mt-2 text-2xl font-bold">2.5 Deklarasi Banyak Variabel</h2>

      <div className="p-4 mt-1 mb-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <p className="mb-4">
          Deklarasi banyak variabel dalam bahasa pemrograman C# adalah proses
          mendeklarasikan beberapa variabel dengan tipe data yang sama dalam
          satu baris kode. Ini memungkinkan kita untuk menghemat baris kode
          ketika kita ingin mendeklarasikan lebih dari satu variabel yang
          memiliki tipe data yang sama. Pada deklarasi banyak variabel, setiap
          variabel dipisahkan dengan tanda koma ( , ).
        </p>
        <p className="mb-4 font-bold">Cobalah Kode Program Pada Compiler:</p>
        <iframe
          width="100%"
          height="475"
          src="https://dotnetfiddle.net/Widget/Wdy3Z5"
          frameBorder="0"
        ></iframe>
        <p className="mb-4 italic">
          Pada kode di atas, kita mendeklarasikan tiga variabel bertipe int A,
          B, dan C dalam satu baris kode. Variabel-variabel ini diinisialisasi
          dengan nilai 10, 40, dan 13, masing-masing. Kemudian, kita menggunakan
          Console.WriteLine() untuk menampilkan hasil penjumlahan ketiga
          variabel tersebut. Hasil yang ditampilkan adalah 63, yang merupakan
          hasil dari operasi penjumlahan A + B + C.
        </p>
      </div>

      {/* Kuis Deklarasi Banyak Variabel */}
      {!quizCompleted && (
        <QuizDeklarasiBanyakVariabel onComplete={handleQuizComplete} />
      )}

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

export default DeklarasiBanyakVariabel;
