import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizBoolean from "./Quiz-bab3/Quiz6"; // Import komponen kuis
import nextIcon from "../../../assets/img/selanjutnya.png";
import backIcon from "../../../assets/img/kembali.png";
import { useOutletContext } from "react-router-dom";

const Boolean = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigate = useNavigate();
  const { handleLessonComplete } = useOutletContext();

  const handleQuizComplete = () => {
    setQuizCompleted(true);
  };

  const handleNext = () => {
    handleLessonComplete("/materi/bab3/boolean");
    window.scrollTo(0, 0);
    navigate("/materi/bab3/char");
  };

  const handleBack = () => {
    window.scrollTo(0, 0);
    navigate("/materi/bab3/floating-point");
  };

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold text-center">BAB 3 - TIPE DATA</h1>
      <h2 className="text-2xl font-bold">Tipe Data Dasar: Boolean</h2>

      <div className="p-4 mt-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <p>
          Tipe data <code>bool</code> atau Boolean dalam bahasa pemrograman C#
          adalah tipe data yang digunakan untuk merepresentasikan nilai
          kebenaran atau nilai boolean, yaitu nilai yang hanya dapat berupa
          <code>true</code> atau <code>false</code>. Tipe <code>bool</code>{" "}
          sangat penting dalam pemrograman untuk melakukan operasi logika,
          perbandingan, dan kontrol alur program.
        </p>
      </div>

      <div className="p-4 mt-2 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <h3 className="mb-2 text-xl font-bold">
          Deklarasi dan Inisialisasi Variabel Boolean
        </h3>
        <p>
          Untuk mendeklarasikan dan menginisialisasi variabel dengan tipe{" "}
          <code>bool</code>, Anda dapat menggunakan kode berikut:
        </p>
        <pre className="p-2 font-mono bg-gray-100 rounded">
          <code>{`bool var1\nbool var2;\nvar1 = true;\nvar2 = false;\nConsole.WriteLine("var1 = " + var1);  // Output: var1 = True\nConsole.WriteLine("var2 = " + var2);  // Output: var2 = False`}</code>
        </pre>
        <p>
          Dalam kode di atas, <code>var1</code> dan <code>var2</code> adalah
          variabel yang menampung nilai boolean. <code>var1</code>
          diinisialisasi dengan nilai <code>true</code>, sedangkan{" "}
          <code>var2</code> diinisialisasi dengan nilai <code>false.</code>
        </p>
      </div>

      <div className="p-4 mt-2 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <h3 className="mb-2 text-xl font-bold">
          Operasi Perbandingan dengan Tipe Boolean
        </h3>
        <p>
          Tipe data <code>bool</code> sering digunakan untuk hasil operasi
          perbandingan. Berikut adalah contoh kode yang menggunakan operasi
          perbandingan:
        </p>
        <pre className="p-2 font-mono bg-gray-100 rounded">
          <code>
            {`bool var1 = 18 < 13;\nbool var2 = 26 > 18;\nbool var3 = 'A' == 'a';\nConsole.WriteLine("var1 = " + var1);  // Output: var1 = False\nConsole.WriteLine("var2 = " + var2);  // Output: var2 = True\nConsole.WriteLine("var3 = " + var3);  // Output: var3 = False
`}
          </code>
        </pre>
        <p>
          Dalam kode di atas, <code>var1</code> menyimpan hasil perbandingan{" "}
          <code>18 &lt; 13</code>, yang bernilai false karena 18 lebih besar
          dari 13. <code>var2</code> menyimpan hasil perbandingan{" "}
          <code>26 &gt; 18</code>, yang bernilai true karena 26 lebih besar dari
          18. <code>var3</code> menyimpan hasil perbandingan{" "}
          <code>'A' == 'a'</code>, yang bernilai <code>false</code> karena
          karakter 'A' tidak sama dengan karakter 'a'.
        </p>
      </div>

      <div className="p-4 mt-2 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <h3 className="mb-2 text-xl font-bold ">
          Penggunaan Tipe Boolean dalam Percabangan
        </h3>
        <p>
          Tipe data <code>bool</code> juga digunakan untuk mengendalikan alur
          program dalam pernyataan percabangan. Berikut adalah contoh kode
          membandingkan dua angka yang menggunakan <code>if-else</code>:
        </p>
        <pre className="p-2 font-mono bg-gray-100 rounded">
          <code>
            {`int var1 = 18;
int var2 = 13;
  if (var1 < var2
  { 
    Console.WriteLine("var1 lebih kecil daripada var2"); 
  } 
    else if (var1 > var2) 
  { 
    Console.WriteLine("var1 lebih besar daripada var2"); 
  } 
    else 
  { 
    Console.WriteLine("var1 sama dengan var2"); 
  }`}
          </code>
        </pre>
        <p>
          Dalam kode di atas, <code>var1</code> menyimpan hasil perbandingan
          <code>18 &lt; 13</code>, yang bernilai <code>false</code> karena
          <code>18</code> lebih besar dari <code>13</code>.<code>var2</code>{" "}
          menyimpan hasil perbandingan <code>26 &gt; 18</code>, yang bernilai{" "}
          <code>true</code> karena <code>26</code> lebih besar dari{" "}
          <code>18</code>.<code>var3</code> menyimpan hasil perbandingan{" "}
          <code>'A' == 'a'</code>, yang bernilai <code>false</code> karena
          karakter <code>'A'</code> tidak sama dengan karakter <code>'a'</code>.
        </p>
      </div>

      <div className="p-4 mt-2 mb-2 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <h3 className="mb-2 text-xl font-bold ">
          Cobalah Kode Program Berikut
        </h3>
        <div className="flex justify-center mb-4">
          <iframe
            width="100%"
            height="475"
            src="https://dotnetfiddle.net/Widget/INIM9g"
          ></iframe>
        </div>
        <p>
          <p>
            Dalam kode ini, pengguna memasukkan sebuah angka, lalu program
            memeriksa apakah angka tersebut **genap** menggunakan operasi{" "}
            <code>angka % 2 == 0</code>. Hasilnya disimpan dalam **variabel
            boolean** <code>isGenap</code>, yang digunakan dalam **pernyataan
            if-else** untuk menentukan apakah angka **genap atau ganjil**.
            **Tipe data <code>bool</code> dalam C#** sangat penting dalam
            **logika, perbandingan, dan kontrol alur program**, memungkinkan
            kode lebih **efisien** dalam menangani kondisi.
          </p>
        </p>
      </div>

      {/* Kuis */}
      {!quizCompleted && <QuizBoolean onComplete={handleQuizComplete} />}

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

export default Boolean;
