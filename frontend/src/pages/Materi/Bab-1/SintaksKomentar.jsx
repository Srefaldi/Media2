import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Quiz from "./Quiz-bab1/Quiz6"; // Import komponen Quiz

const SintaksKomentar = () => {
  const navigate = useNavigate();
  const { handleLessonComplete } = useOutletContext();
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleNext = () => {
    handleLessonComplete("/materi/bab1/sintaks-komentar");
    window.scrollTo(0, 0);
    navigate("/materi/bab1/error-csharp");
  };

  const handleBack = () => {
    window.scrollTo(0, 0);
    navigate("/materi/bab1/sintaks-print");
  };

  const handleQuizCompletion = () => {
    setQuizCompleted(true);
  };

  return (
    <div>
      
      <h1 className="mb-4 text-2xl font-bold text-center">
        BAB 1 - PENDAHULUAN
      </h1>
      <h2 className="mb-4 text-2xl font-bold">1.6 Sintaks Komentar</h2>
      <div className="p-4 bg-white rounded-lg shadow-md">
        <p className="mb-4 text-justify text-gray-700">
          Komentar dalam bahasa pemrograman merupakan bagian yang cukup penting
          untuk memberi tahu maksud dan tujuan dari kode program tersebut.
          Komentar merupakan bagian dari program yang tidak akan dieksekusi oleh
          sistem. Dalam bahasa pemrograman C#, terdapat dua tipe komentar:
          <ul className="pl-6 mb-4 list-disc">
            <li>Single line comment</li>
            <li>Multiple line comment</li>
          </ul>
        </p>
        <p className="mb-4 text-justify text-gray-700">
          Untuk memberi komentar, kita dapat menggunakan sintaks <code>//</code>{" "}
          untuk single-line comment atau <code>/* */</code> untuk multi-line
          comment.
        </p>

        <p className="mb-2 text-justify text-gray-700">
          Cobalah kode program pada compiler:
        </p>
      </div>
      <pre className="p-4 mt-2 overflow-x-auto bg-gray-100 rounded-lg">
        <iframe
          width="100%"
          height="475"
          src="https://dotnetfiddle.net/Widget/wpjyVs"
          frameBorder="0"
        ></iframe>
      </pre>

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

export default SintaksKomentar;
