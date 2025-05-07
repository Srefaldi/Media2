import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Quiz2 from "./Quiz-bab4/Quiz2"; // Import komponen kuis
import nextIcon from "../../../assets/img/selanjutnya.png";
import backIcon from "../../../assets/img/kembali.png";
import bab41 from "./img-bab4/1.png";
import { useOutletContext } from "react-router-dom";

const OperatorAritmatika = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigate = useNavigate();
  const { handleLessonComplete } = useOutletContext();

  const handleNext = () => {
    handleLessonComplete("/materi/bab4/operator-arithmetic");
    window.scrollTo(0, 0);
    navigate("/materi/bab4/operator-increment-decrement"); // Ganti dengan rute topik berikutnya
  };

  const handleBack = () => {
    window.scrollTo(0, 0);
    navigate("/materi/bab4/pengertian-operator");
  };

  const handleQuizComplete = () => {
    handleLessonComplete("/materi/bab4//operator-increment-decrement");
    setQuizCompleted(true);
  };

  return (
    <div className="mt-4 mb-4">
      <h1 className="mb-4 text-2xl font-bold text-center">BAB 4 - OPERATOR</h1>
      <h2 className="mt-2 mb-4 text-2xl font-bold">Operator Aritmatika</h2>
      <div className="p-4 mt-2 mb-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <p className="mb-2">
          Operator Arithmetic (Aritmatika) dalam pemrograman, operasi
          menggunakan informasi numerik dan kemudian menggunakan data tersebut
          sering terjadi. Misalnya, informasi seperti tinggi dan berat badan
          seseorang dinyatakan sebagai nilai numerik seperti 177cm dan 58kg.
        </p>
        <p className="mb-2">
          <strong>
            Sebuah pernyataan pada operasi aritmatika biasanya tersusun dari
            satu atau lebih operand dan satu atau lebih operator yang
            merepresentasikan sebuah ekspresi,{" "}
          </strong>
          seperti terlihat pada gambar di bawah ini.
        </p>
        <div className="flex justify-center p-4">
          <img
            src={bab41}
            alt="Gambar 1.2 Alur eksekusi Common Language Runtime"
            className="h-auto w-150"
          />
        </div>
        <p className="mb-2">
          Dalam bahasa pemrograman C#, sebuah ekspresi merupakan suatu operasi
          yang menghasilkan sebuah nilai. Pada gambar di atas, penjumlahan
          antara operand bilangan_1 dan operand bilangan_2 menghasilkan sebuah
          nilai yang kemudian ditetapkan ke dalam variabel hasil. Oleh karena
          itu, bilangan_1 + bilangan_2 merupakan sebuah ekspresi.
        </p>
      </div>
      <div className="p-4 mt-2 mb-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <h3 className="mb-2 text-xl font-bold">Penggunaan Operator</h3>
        <p className="mb-2">
          Untuk melakukan operasi aritmatika, C# menyediakan beberapa operator
          seperti tanda plus <code>+</code> untuk operasi penambahan, tanda
          minus <code>-</code> untuk operasi pengurangan, tanda asterik{" "}
          <code>*</code> untuk operasi perkalian, tanda garis miring{" "}
          <code>/</code> untuk operasi pembagian, dan tanda persen{" "}
          <code>%</code> untuk operasi modulus.
        </p>
        <p className="mb-2">
          Sebagai contoh, misalkan kita punya <code>a = 15</code>,{" "}
          <code>b = 10</code>.
        </p>
      </div>
      <div className="p-4 mt-2 mb-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <p className="text-sm italic text-center text-gray-600">
          Tabel 4.1 Tabel daftar operator aritmatika
        </p>
        <div className="flex justify-center p-4 mt-2 mb-4">
          <table className="text-center border border-gray-300 w-150">
            <thead className="bg-[#68217A] text-white text-center">
              <tr>
                <th className="p-2 text-white border border-gray-300">
                  Operator
                </th>
                <th className="p-2 text-white border border-gray-300">
                  Keterangan
                </th>
                <th className="p-2 text-white border border-gray-300">
                  Contoh
                </th>
                <th className="p-2 text-white border border-gray-300">Hasil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-gray-300">+</td>
                <td className="p-2 border border-gray-300">Penjumlahan</td>
                <td className="p-2 border border-gray-300">a + b</td>
                <td className="p-2 border border-gray-300">25</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">-</td>
                <td className="p-2 border border-gray-300">Pengurangan</td>
                <td className="p-2 border border-gray-300">a - b</td>
                <td className="p-2 border border-gray-300">5</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">*</td>
                <td className="p-2 border border-gray-300">Perkalian</td>
                <td className="p-2 border border-gray-300">a * b</td>
                <td className="p-2 border border-gray-300">150</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">/</td>
                <td className="p-2 border border-gray-300">Pembagian</td>
                <td className="p-2 border border-gray-300">a / b</td>
                <td className="p-2 border border-gray-300">1.5</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">%</td>
                <td className="p-2 border border-gray-300">Modulus</td>
                <td className="p-2 border border-gray-300">a % b</td>
                <td className="p-2 border border-gray-300">5</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">++</td>
                <td className="p-2 border border-gray-300">Increment</td>
                <td className="p-2 border border-gray-300">a++</td>
                <td className="p-2 border border-gray-300">16</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">--</td>
                <td className="p-2 border border-gray-300">Decrement</td>
                <td className="p-2 border border-gray-300">a--</td>
                <td className="p-2 border border-gray-300">14</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">-</td>
                <td className="p-2 border border-gray-300">Minus</td>
                <td className="p-2 border border-gray-300">-a</td>
                <td className="p-2 border border-gray-300">-15</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-2">
          Terdapat prioritas dalam operator-operator di atas. Operator
          increment, decrement, dan minus akan dihitung terlebih dahulu,
          kemudian baru modulus, perkalian dan pembagian, terakhir barulah
          operator pengurangan dan penjumlahan. Jika perlu untuk mengubah urutan
          eksekusi, tanda kurung dapat digunakan.
        </p>
      </div>
      <div className="p-4 mt-2 mb-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <h3 className="mb-2 text-xl font-bold">Contoh Penerapan Operator</h3>
        <p className="mb-2">
          Penggunaan operator penjumlahan, pengurangan, dan lain-lain:
        </p>
        <p className="mb-2 text-bold">Cobalah kode program pada compiler:</p>
        <div className="flex justify-center mb-4">
          <iframe
            width="100%"
            height="475"
            src="https://dotnetfiddle.net/Widget/Hb0BbF"
          ></iframe>
        </div>
      </div>
      {/* Kuis */}
      {!quizCompleted && <Quiz2 onComplete={handleQuizComplete} />}
      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handleBack}
          className="flex items-center px-4 py-2 text-white bg-gray-500 rounded-lg text -white hover:bg-gray-600"
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

export default OperatorAritmatika;
