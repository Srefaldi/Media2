import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Quiz from "./Quiz-bab1/Quiz7"; // Import komponen Quiz

const ErrorCSharp = () => {
  const navigate = useNavigate();
  const { handleLessonComplete } = useOutletContext();
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleNext = () => {
    handleLessonComplete("/materi/bab1/error-csharp");
    window.scrollTo(0, 0);
    navigate("/materi/bab1/latihan-bab1");
  };

  const handleBack = () => {
    window.scrollTo(0, 0);
    navigate("/materi/bab1/sintaks-komentar");
  };

  const handleQuizCompletion = () => {
    setQuizCompleted(true);
  };

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold text-center">
        BAB 1 - PENDAHULUAN
      </h1>
      <h2 className="mb-4 text-2xl font-bold">1.7 Error Pada C#</h2>
      <div className="p-4 bg-white rounded-lg shadow-md">
        <p className="mb-4 text-justify text-gray-700">
          Dalam pemrograman C# terdapat beberapa tipe-tipe error yang dapat
          muncul dalam pembuatan program, contohnya adalah:
        </p>
        <ul className="pl-6 mb-4 list-disc">
          <li>Syntax Error</li>
          <li>Runtime Error</li>
          <li>Logical Error</li>
        </ul>

        <h3 className="mt-4 font-semibold">Syntax Error</h3>
        <ul className="pl-6 mb-4 text-justify list-disc">
          <li>
            {" "}
            Bahasa pemrograman digunakan di bawah aturan dan konvensi yang
            ketat. Menulis kode yang menyimpang dari aturan tata bahasa
            menghasilkan syntax error.{" "}
          </li>
          <li>
            Untuk mencegah kesalahan sintaks atau syntax error kita harus
            mempelajari dan mempraktikkan tata bahasa dan kode C# sesuai dengan
            aturan yang ditetapkan.{" "}
          </li>

          <li>
            Sebagai contoh, untuk mencetak string "Halo", tanda kutip dua harus
            digunakan di kedua sisi string. Namun, pada kode di bawah ini,
            terjadi kesalahan sintaks karena string tidak dikutip pada kedua
            sisi.
          </li>
        </ul>
        <h4 className="mt-4 mb-2 font-semibold">Perhatikan kode berikut :</h4>
        <pre className="p-4 overflow-x-auto bg-gray-100 rounded-lg">
          <iframe
            width="100%"
            height="400"
            src="https://dotnetfiddle.net/Widget/cg6VKM"
            frameborder="0"
          ></iframe>
        </pre>

        <h3 className="mt-4 font-semibold">Runtime Error</h3>
        <ul className="pl-6 mb-4 text-justify list-disc">
          <li>
            Berbeda dengan kesalahan sintaks, kode yang benar secara tata bahasa
            masih dapat menyebabkan kesalahan selama eksekusi. Jenis kesalahan
            ini disebut kesalahan runtime atau Runtime Error.{" "}
          </li>
          <li>
            Untuk mencegah kesalahan runtime, kamu harus mempertimbangkan
            kemungkinan pengguna memasukkan data yang salah.{" "}
          </li>
          <li>
            Sebagai contoh, dalam kode di bawah ini, pengguna mencoba mencetak
            bilangan bulat 9 yang dibagi dengan 0, sehingga kesalahan runtime
            terjadi.
          </li>
        </ul>
        <pre className="p-4 overflow-x-auto bg-gray-100 rounded-lg">
          <iframe
            width="100%"
            height="475"
            src="https://dotnetfiddle.net/Widget/60SVzk"
            frameborder="0"
          ></iframe>
        </pre>

        <h3 className="mt-4 font-semibold">Logical Error</h3>
        <ul className="pl-6 mb-4 text-justify list-disc">
          <li>
            Logical error atau kesalahan logika merupakan error yang paling
            sulit untuk dideteksi.{" "}
          </li>
          <li>
            {" "}
            Hal itu disebabkan error yang satu ini terjadi bukan karena adanya
            kesalahan sintaks / penulisan atau kesalahan pada proses runtime.
            Namun, juga karena adanya kesalahan dari programmer dalam penggunaan
            algoritma.{" "}
          </li>
          <li>
            {" "}
            Sebagian besar dari logical error terjadi karena adanya kesalahan
            dalam perhitungan atau menggunakan variabel yang salah.{" "}
          </li>

          <li>
            Saat terjadi logical error biasanya tidak akan membuat program
            berhenti secara total. Pasalnya, program akan tetap bisa berjalan
            normal, tapi tidak bisa berfungsi seperti yang diharapkan atau
            menghasilkan output yang tidak sesuai.
          </li>
        </ul>
      </div>

      {/* Komponen Kuis */}
      {!quizCompleted && <Quiz onComplete={handleQuizCompletion} />}

      {/* Tombol Navigasi */}
      {quizCompleted && (
        <div className="flex justify-between mt-6">
          <button
            onClick={handleBack}
            className="px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
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

export default ErrorCSharp;
