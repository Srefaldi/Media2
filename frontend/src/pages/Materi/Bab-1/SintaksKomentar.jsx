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
      <h2 className="text-2xl font-bold mb-4">1.6 Sintaks Komentar</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="text-gray-700 text-justify mb-4">
          Komentar dalam bahasa pemrograman merupakan bagian yang cukup penting
          untuk memberi tahu maksud dan tujuan dari kode program tersebut.
          Komentar merupakan bagian dari program yang tidak akan dieksekusi oleh
          sistem. Dalam bahasa pemrograman C#, terdapat dua tipe komentar:
          <ul className="list-disc pl-6 mb-4">
            <li>Single line comment</li>
            <li>Multiple line comment</li>
          </ul>
        </p>
        <p className="text-gray-700 text-justify mb-4">
          Untuk memberi komentar, kita dapat menggunakan sintaks <code>//</code>{" "}
          untuk single-line comment atau <code>/* */</code> untuk multi-line
          comment.
        </p>

        <p className="text-gray-700 text-justify mb-2">
          Cobalah kode program pada compiler:
        </p>
      </div>
      <pre className="mt-2 bg-gray-100 p-4 rounded-lg overflow-x-auto">
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
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
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
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default SintaksKomentar;
