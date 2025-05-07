import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Quiz from "./Quiz-bab3/Quiz1"; // Import komponen kuis
import nextIcon from "../../../assets/img/selanjutnya.png"; // Pastikan path ini sesuai
import backIcon from "../../../assets/img/kembali.png"; // Pastikan path ini sesuai
import iconBook from "../../../assets/img/book.png";
import iconTujuan from "../../../assets/img/tujuan.png";
import iconKonten from "../../../assets/img/konten.png";
import gambar1 from "./img-bab3/gambar1-bab3.png";
import { useOutletContext } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2

const TipeData = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false); // Menyimpan status apakah kuis sudah benar
  const navigate = useNavigate();
  const { handleLessonComplete } = useOutletContext();

  const handleQuizComplete = (isPassed) => {
    handleLessonComplete("/materi/bab3/klasifikasi-tipedata");

    setQuizCompleted(true);
    setQuizPassed(isPassed); // Set status kuis
  };

  const handleNext = () => {
    handleLessonComplete("/materi/bab3/pengertian-tipedata");
    window.scrollTo(0, 0);
    navigate("/materi/bab3/klasifikasi-tipedata");
  };

  const handleBack = () => {
    window.scrollTo(0, 0);
    navigate("/materi/bab2/rangkuman-bab2");
  };

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold text-center">BAB 3 - TIPE DATA</h1>

      {/* Pendahuluan Materi */}
      <div className="w-full mb-4 border border-gray-300 rounded-lg">
        <h3
          className="flex items-center p-4 font-bold text-white cursor-pointer"
          style={{ backgroundColor: "#68217A" }}
        >
          <img src={iconBook} alt="Icon" className="w-8 h-8 mr-2" />
          PENDAHULUAN MATERI
          <span className="ml-2">▼</span>
        </h3>

        <div className="p-4 text-justify text-gray-700 rounded-b-lg">
          <p>
            Pada bab ini, kita akan membahas tentang tipe data dalam bahasa
            pemrograman C#. Tipe data adalah konsep fundamental yang digunakan
            untuk menentukan jenis nilai yang dapat disimpan dalam variabel.
            Memahami tipe data sangat penting karena mempengaruhi cara data
            disimpan, ukuran memori yang digunakan, dan operasi yang dapat
            dilakukan. Setelah mempelajari materi ini, diharapkan pembaca dapat
            menjelaskan perbedaan antara tipe data nilai dan tipe data
            referensi, serta menerapkan berbagai tipe data dalam penulisan
            program C#.
          </p>
        </div>
      </div>

      {/* Tujuan Pembelajaran */}
      <div
        className="w-full mb-4 border border-gray-300 rounded-lg"
        style={{ backgroundColor: "#68217A" }}
      >
        <h3 className="flex items-center p-4 font-bold text-white cursor-pointer">
          <img src={iconTujuan} alt="Icon" className="w-8 h-8 mr-2" />
          TUJUAN PEMBELAJARAN
          <span className="ml-2">▼</span>
        </h3>

        <ul className="p-4 pl-6 text-justify text-gray-700 list-disc bg-white rounded-b-lg">
          <li>Mampu memahami konsep tipe data dan klasifikasinya</li>
          <li>
            Menerapkan tipe data integer, floating-point, boolean, karakter, dan
            string dalam penulisan program C#.
          </li>
          <li>
            Menggunakan tipe data yang tepat untuk operasi aritmatika, logika,
            dan manipulasi data dalam program C#.
          </li>
        </ul>
      </div>

      {/* Konten Materi */}
      <div
        className="w-full mb-4 border border-gray-300 rounded-lg"
        style={{ backgroundColor: "#68217A" }}
      >
        <h3 className="flex items-center p-4 font-bold text-white cursor-pointer">
          <img src={iconKonten} alt="Icon" className="w-8 h-8 mr-2" />
          KONTEN MATERI
          <span className="ml-2">▼</span>
        </h3>

        <ul className="p-4 pl-6 text-justify text-gray-700 list-none bg-white rounded-b-lg">
          <li>3.1 Pengertian Tipe Data</li>
          <li>3.2 Klasifikasi Tipe Data</li>
          <li>3.3 Tipe Data Dasar</li>
          <li>3.3.1 Integer</li>
          <li>3.3.2 Floating-point</li>
          <li>3.3.3 Boolean</li>
          <li>3.3.4 Char</li>
          <li>3.3.5 String</li>

          <li>Rangkuman</li>
        </ul>
      </div>

      {/* Pengertian Tipe Data */}
      <div>
        <h2 className="mt-2 text-2xl font-bold">3.1 Pengertian Tipe Data</h2>
        <div className="p-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
          <p>
            Secara makna, kata tipe data terbentuk dari 2 kata yaitu tipe dan
            data. Tipe berarti sesuatu yang merepresentasikan model atau jenis.
            Sedangkan untuk data adalah bahan/komponen atau hasil dari suatu
            proses pengolahan.
          </p>
          <p>
            Tipe data adalah suatu kelompok yang mempunyai jenis-jenis tertentu.
            Dengan kata lain, tipe data adalah sebuah cara yang digunakan untuk
            menentukan jenis dari suatu data. Dalam bahasa pemrograman terdapat
            banyak jenis-jenis tipe data yang bisa digunakan. Setiap bahasa
            pemrograman memiliki tipe data khusus yang mungkin berbeda. Namun
            secara umum, dalam bahasa pemrograman apapun pasti mengenal 5 tipe
            data ini, yaitu integer, float, char, string, dan boolean.
          </p>
        </div>

        <div className="flex justify-center p-4">
          <img src={gambar1} alt="Gambar 3.1" className="h-100 w-100" />
        </div>
        <p className="font-bold text-center">Gambar 3.1</p>

        <div className="p-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
          <p>
            Memahami tipe data sangat penting dalam pemrograman karena
            mempengaruhi cara data disimpan, ukuran memori yang digunakan, dan
            operasi yang dapat dilakukan.
          </p>
        </div>
      </div>

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

export default TipeData;
