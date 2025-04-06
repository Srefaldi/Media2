import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizConditional from "./Quiz-bab4/Quiz7"; // Import komponen kuis
import nextIcon from "../../../assets/img/selanjutnya.png"; // Pastikan path ini sesuai
import backIcon from "../../../assets/img/kembali.png"; // Pastikan path ini sesuai
import { useOutletContext } from "react-router-dom";

const OperatorConditional = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigate = useNavigate();
  const { handleLessonComplete } = useOutletContext();

  const handleNext = () => {
    handleLessonComplete("/materi/bab4/operator-conditional");
    window.scrollTo(0, 0);
    navigate("/materi/bab4/operator-equality"); // Ganti dengan rute topik berikutnya
  };

  const handleBack = () => {
    window.scrollTo(0, 0);
    navigate("/materi/bab4/operator-logika"); // Ganti dengan rute topik sebelumnya
  };

  const handleQuizComplete = () => {
    setQuizCompleted(true);
  };

  return (
    <div className="mt-4 mb-4">
      <h1 className="mb-4 text-2xl font-bold text-center">BAB 4 - OPERATOR</h1>
      <h2 className="mt-2 mb-4 text-2xl font-bold">Operator Bersyarat</h2>

      <div className="p-4 mt-2 mb-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <p className="mb-2">
          <strong>Conditional operator</strong> adalah operator yang membentuk
          logika jika/maka atau if/else. Conditional Operator disebut juga
          operator ternary karena memiliki tiga operan. Di dalam Bahasa C#,
          operator ternary ini menggunakan tanda <code>(?:)</code>. Adapun
          bentuk umum penggunaannya adalah sebagai berikut:
        </p>
        <pre className="p-2 mb-4 font-mono bg-gray-100 rounded">
          <code>{`Kondisi? a : b; `}</code>
        </pre>
        <p className="mb-2">
          Pada bentuk umum di atas, kondisi merupakan ekspresi logika yang akan
          diperiksa nilainya. Jika kondisi ini bernilai benar, maka nilai{" "}
          <code>a</code> akan diambil sebagai nilai hasil operasi dan jika
          kondisi ini bernilai salah, maka nilai <code>b</code> yang akan
          diambil sebagai hasil dari operasi ini.
        </p>
        <p className="mb-2 font-bold">Cobalah kode program pada compiler:</p>
        <div className="flex justify-center mb-4">
          <iframe
            width="100%"
            height="475"
            src="https://dotnetfiddle.net/Widget/govNOT"
            frameborder="0"
          ></iframe>
        </div>
        <p className="mb-2">
          Pada kode di atas terdapat 2 variabel yang bertipe data integer yaitu,
          variabel <code>int a</code>
          dan <code>int b</code> yang mana variabel <code>b</code> melakukan
          operasi conditional di antaranya
          <code>(a > 5) ? 10 : 20</code>. Variabel <code>b</code> digunakan
          untuk menyimpan hasil operasi conditional dari variabel <code>a</code>
          . Kemudian ditampilkan menggunakan perintah
          <code>Console.WriteLine()</code>.
        </p>
      </div>

      {/* Kuis */}
      {!quizCompleted && <QuizConditional onComplete={handleQuizComplete} />}

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

export default OperatorConditional;
