import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Quiz3 from "./Quiz-bab4/Quiz3"; // Import komponen kuis
import nextIcon from "../../../assets/img/selanjutnya.png";
import backIcon from "../../../assets/img/kembali.png";
import { useOutletContext } from "react-router-dom";

const OperatorInD = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigate = useNavigate();
  const { handleLessonComplete } = useOutletContext();

  const handleNext = () => {
    handleLessonComplete("/materi/bab4/operator-increment-decrement");
    window.scrollTo(0, 0);
    navigate("/materi/bab4/operator-assignment");
  };

  const handleBack = () => {
    window.scrollTo(0, 0);
    navigate("/materi/bab4/operator-arithmetic");
  };

  const handleQuizComplete = () => {
    setQuizCompleted(true);
  };

  return (
    <div className="mt-4 mb-4">
      <h1 className="mb-4 text-2xl font-bold text-center">BAB 4 - OPERATOR</h1>
      <h2 className="mt-2 mb-4 text-2xl font-bold">
        Operator Increment dan Decrement
      </h2>

      <div className="p-4 mt-2 mb-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <p className="mb-2">
          Operator increment dan decrement adalah sebutan untuk operasi seperti{" "}
          <code>a++</code> dan <code>a--</code>. Ini sebenarnya penulisan
          singkat dari operasi <code>a = a + 1</code> serta{" "}
          <code>a = a - 1</code>. Increment digunakan untuk menambah variabel
          sebanyak 1 angka, sedangkan decrement digunakan untuk mengurangi
          sebanyak 1 angka. Penulisannya menggunakan tanda tambah dua kali untuk
          increment, dan tanda kurang dua kali untuk decrement. Penempatan tanda
          tambah atau kurang ini boleh di awal seperti <code>++a</code> dan{" "}
          <code>--a</code>, atau di akhir variabel seperti <code>a++</code> dan{" "}
          <code>a--</code>.
        </p>
        <p className="mb-2">
          Berikut adalah daftar{" "}
          <strong>operator Increment dan Decrement</strong> dalam C#:
        </p>
        <p className="text-sm italic text-center text-gray-600">
          Tabel 4.2 Tabel daftar operator increment dan decrement
        </p>
        <div className="flex justify-center p-4 mt-2 mb-4">
          <table className="text-center border border-gray-300 w-200">
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-gray-300">Pre-increment</td>
                <td className="p-2 border border-gray-300">++a</td>
                <td className="p-2 border border-gray-300">
                  Tambah a sebanyak 1 angka, lalu tampilkan hasilnya
                </td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">Post-increment</td>
                <td className="p-2 border border-gray-300">a++</td>
                <td className="p-2 border border-gray-300">
                  Tampilkan nilai a, lalu tambah a sebanyak 1 angka
                </td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">Pre-decrement</td>
                <td className="p-2 border border-gray-300">--a</td>
                <td className="p-2 border border-gray-300">
                  Kurangi a sebanyak 1 angka, lalu tampilkan hasilnya
                </td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">Post-decrement</td>
                <td className="p-2 border border-gray-300">a--</td>
                <td className="p-2 border border-gray-300">
                  Tampilkan nilai a, lalu kurangi a sebanyak 1 angka
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-2">Cobalah kode program pada compiler:</p>
        <div className="flex justify-center mb-4">
          <iframe
            width="100%"
            height="475"
            src="https://dotnetfiddle.net/Widget/Xy5MG9" // Ganti dengan link ke compiler yang sesuai
          ></iframe>
        </div>
        <p className="mb-2">
          Pada kode di atas terdapat 2 variabel yang bertipe data integer yaitu,
          variabel <code>int a</code> dan <code>int b</code> yang melakukan
          operasi increment dan decrement. Operasi increment dilakukan oleh
          variabel <code>int a</code> yang mana di sini melakukan operasi
          post-increment yaitu, “Menampilkan nilai a, kemudian ditambah a
          sebanyak 1 angka”. Operasi decrement dilakukan oleh variabel{" "}
          <code>int b</code> yang mana di sini melakukan operasi post-decrement
          yaitu, “Menampilkan nilai b, kemudian dikurangi b sebanyak 1 angka”.
          Kemudian ditampilkan menggunakan perintah{" "}
          <code>Console.WriteLine()</code>.
        </p>
      </div>

      {/* Kuis */}
      <Quiz3 onComplete={handleQuizComplete} />

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

export default OperatorInD;
