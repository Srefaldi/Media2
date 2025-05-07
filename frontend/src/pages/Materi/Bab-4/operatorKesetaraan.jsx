import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizEquality from "./Quiz-bab4/Quiz8"; // Import komponen kuis
import nextIcon from "../../../assets/img/selanjutnya.png"; // Pastikan path ini sesuai
import backIcon from "../../../assets/img/kembali.png"; // Pastikan path ini sesuai
import { useOutletContext } from "react-router-dom";

const OperatorKesetaraan = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigate = useNavigate();
  const { handleLessonComplete } = useOutletContext();

  const handleNext = () => {
    handleLessonComplete("/materi/bab4/operator-equality");
    window.scrollTo(0, 0);
    navigate("/materi/bab4/latihan-bab4"); // Ganti dengan rute topik berikutnya
  };

  const handleBack = () => {
    window.scrollTo(0, 0);
    navigate("/materi/bab4/operator-conditional"); // Ganti dengan rute topik sebelumnya
  };
  const handleQuizComplete = () => {
    handleLessonComplete("/materi/bab4/latihan-bab4");
    setQuizCompleted(true);
  };

  return (
    <div className="mt-4 mb-4">
      <h1 className="mb-4 text-2xl font-bold text-center">BAB 4 - OPERATOR</h1>
      <h2 className="mt-2 mb-4 text-2xl font-bold">
        Operator Equality (Kesetaraan)
      </h2>

      <div className="p-4 mt-2 mb-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <p className="mb-2">
          <strong>
            {" "}
            Cara paling umum untuk membandingkan sebuah objek atau variabel
          </strong>{" "}
          di C# adalah equality operator. Operator <code>==</code>{" "}
          <strong>(equality) </strong>
          dan <code>!=</code> <strong>(inequality)</strong> memeriksa{" "}
          <strong>apakah kedua operan bernilai sama atau tidak.</strong>
        </p>
        <h1 className="font-bold">Equality Operator (==)</h1>
        <p className="mb-2">
          Equality operator atau operator kesetaraan <code>==</code>{" "}
          mengembalikan nilai <strong>true </strong>
          jika kedua operannya sama, dan akan mengembalikan nilai{" "}
          <strong>false</strong> jika sebaliknya.
        </p>
        <h4 className="font-bold">Value types equality</h4>
        <p className="mb-2">
          Operan dari built-in value types (tipe nilai bawaan) adalah sama jika
          kedua nilainya sama, contoh:
        </p>
        <p className="mb-2 font-bold">Cobalah kode program pada compiler:</p>
        <div className="flex justify-center mb-4">
          <iframe
            width="100%"
            height="475"
            src="https://dotnetfiddle.net/Widget/mIStW5"
            frameborder="0"
          ></iframe>
        </div>
        {/* Ganti dengan path gambar yang sesuai */}
        <h4 className="font-bold">String equality</h4>
        <p className="mb-2">
          Dua operan string adalah setara jika kedua nilai nya null atau kedua
          string memiliki panjang yang sama dan memiliki karakter yang identik
          di setiap posisi karakter:
        </p>
        <p className="mb-2 font-bold">Cobalah kode program pada compiler:</p>
        <div className="flex justify-center mb-4">
          <iframe
            width="100%"
            height="475"
            src="https://dotnetfiddle.net/Widget/l7qJ5j"
            frameborder="0"
          ></iframe>
        </div>
        {/* Ganti dengan path gambar yang sesuai */}
        <h3 className="font-bold">Inequality operator (!=)</h3>
        <p className="mb-2">
          Inequality operator atau operator ketidaksetaraan <code>!=</code>{" "}
          mengembalikan nilai <strong>true</strong>
          jika operannya tidak sama, <strong>false</strong> jika sebaliknya.
          Untuk operan dari built-in types (tipe bawaan), ekspresi{" "}
          <code>x != y</code> menghasilkan hasil yang sama dengan ekspresi{" "}
          <code>!(x == y)</code>. Contoh berikut menunjukkan penggunaan operator{" "}
          <code>!=</code>:
        </p>
        <p className="mb-2 font-bold">Cobalah kode program pada compiler:</p>
        <div className="flex justify-center mb-4">
          <iframe
            width="100%"
            height="475"
            src="https://dotnetfiddle.net/Widget/XWARCX"
            frameborder="0"
          ></iframe>
        </div>
      </div>

      {/* Kuis */}
      {!quizCompleted && <QuizEquality onComplete={handleQuizComplete} />}

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

export default OperatorKesetaraan;
