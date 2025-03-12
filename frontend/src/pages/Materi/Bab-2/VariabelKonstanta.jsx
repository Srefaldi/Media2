import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2
import nextIcon from "../../../assets/img/selanjutnya.png";
import backIcon from "../../../assets/img/kembali.png";
import Quiz6 from "./Quiz-bab2/Quiz6";

const VariabelKonstanta = () => {
  const navigate = useNavigate();
  const { handleLessonComplete } = useOutletContext();
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false);

  const handleQuizComplete = (isPassed) => {
    setQuizCompleted(true);
    setQuizPassed(isPassed);
  };

  const handleNext = () => {
    if (!quizPassed) {
      Swal.fire({
        title: "Oops!",
        text: "Anda harus menjawab kuis dengan benar sebelum melanjutkan.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return; // Hentikan eksekusi jika kuis belum benar
    }
    handleLessonComplete("/materi/bab2/variabel-konstanta");
    window.scrollTo(0, 0);
    navigate("/materi/bab2/sintaks-input");
  };

  const handleBack = () => {
    window.scrollTo(0, 0);
    navigate("/materi/bab2/deklarasi-banyak");
  };

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold text-center">BAB 2 - VARIABEL</h1>
      <h2 className="mt-2 text-2xl font-bold">2.6 Variabel Konstanta</h2>

      <div className="p-4 mt-1 mb-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <p className="mb-4">
          Variabel konstanta adalah variabel yang nilainya tidak dapat diubah
          setelah dideklarasikan. Dalam bahasa pemrograman C#, kita dapat
          mendeklarasikan variabel konstanta dengan menggunakan keyword{" "}
          <code>const</code>. Variabel konstanta biasanya digunakan untuk
          menyimpan nilai-nilai tetap yang akan digunakan dalam program, seperti
          nilai konversi atau nilai yang dipakai sebagai batas atas atau batas
          bawah.
        </p>
        <h3 className="mt-4 text-xl font-bold">Pembuatan Konstanta dalam C#</h3>
        <p className="mt-2 ml-5">
          Untuk membuat konstanta dalam bahasa C#, kita menggunakan format
          berikut:
        </p>
        <p className="mt-2 mb-3 ml-5">
          <code>
            access_modifier const tipe_data NAMA_KONSTANTA = nilai_konstanta;
          </code>
        </p>
        <blockquote className="mb-4 ml-6">
          <p>
            • <code>access_modifier</code>: Adalah salah satu dari keyword
            public, protected, atau private.
            <br />• <code>const</code>: Merupakan keyword untuk mendeklarasikan
            variabel sebagai konstanta.
            <br />• <code>tipe_data</code>: Tipe data dari konstanta.
            <br />• <code>NAMA_KONSTANTA</code>: Adalah tempat menulis nama
            konstanta. Aturan nama konstanta ini sama seperti aturan identifier.
            Yakni bisa terdiri dari huruf, angka, dan underscore. Angka tidak
            bisa menjadi karakter pertama. Selain itu, nama konstanta ini
            ditulis dalam huruf besar semua (SNAKE_CASE).
            <br />• <code>nilai_konstanta</code>: Nilai yang akan diisi ke dalam
            konstanta.
          </p>
        </blockquote>
        <h3 className="mt-4 mb-4 font-bold">
          Cobalah Kode Program Pada Compiler:
        </h3>

        <iframe
          width="100%"
          height="475"
          src="https://dotnetfiddle.net/Widget/9rDToN"
          frameBorder="0"
        ></iframe>
        <p className="mt-4 mb-2 italic">
          Pada kode di atas ini terdapat tiga buah konstanta, yakni{" "}
          <code>KURS_DOLLAR</code>, <code>PI</code>, dan <code>WEBSITE</code>.
          Setiap konstanta harus dideklarasikan dengan tipe data yang sesuai,
          yaitu <code>int</code>, <code>double</code>, dan <code>string</code>.
          Ketiga konstanta tadi akan ditampilkan dengan perintah{" "}
          <code>Console.WriteLine()</code>.
        </p>
      </div>

      {/* Kuis Variabel Konstanta */}
      {!quizCompleted && <Quiz6 onComplete={handleQuizComplete} />}

      {/* Tombol Navigasi */}
      {quizCompleted && (
        <div className="flex justify-between mt-6">
          <button
            onClick={handleBack}
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
            <img src={nextIcon} alt="Selanjutnya" className="w-5 h-5 ml-2" />
          </button>
        </div>
      )}
    </div>
  );
};

export default VariabelKonstanta;
