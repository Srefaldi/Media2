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
      <h2 className="text-2xl font-bold mb-4">1.7 Error Pada C#</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="text-gray-700 text-justify mb-4">
          Dalam pemrograman C# terdapat beberapa tipe-tipe error yang dapat
          muncul dalam pembuatan program, contohnya adalah:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Syntax Error</li>
          <li>Runtime Error</li>
          <li>Logical Error</li>
        </ul>

        <h3 className="font-semibold mt-4">Syntax Error</h3>
        <ul className="list-disc pl-6 mb-4 text-justify">
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
        <h4 className="font-semibold mt-4 mb-2">Perhatikan kode berikut :</h4>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <iframe
            width="100%"
            height="400"
            src="https://dotnetfiddle.net/Widget/cg6VKM"
            frameborder="0"
          ></iframe>
        </pre>

        <h3 className="font-semibold mt-4">Runtime Error</h3>
        <ul className="list-disc pl-6 mb-4 text-justify">
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
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <iframe
            width="100%"
            height="475"
            src="https://dotnetfiddle.net/Widget/60SVzk"
            frameborder="0"
          ></iframe>
        </pre>

        <h3 className="font-semibold mt-4">Logical Error</h3>
        <ul className="list-disc pl-6 mb-4 text-justify">
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
      {!quizCompleted && <Quiz onCorrectAnswer={handleQuizCompletion} />}

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

export default ErrorCSharp;
