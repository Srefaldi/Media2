import React, { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert

const Quiz = ({ onComplete }) => {
  const [functionName, setFunctionName] = useState("");
  const [methodName, setMethodName] = useState("");
  const [showCompiler, setShowCompiler] = useState(false);
  const [quizFeedback, setQuizFeedback] = useState("");

  const normalizeAnswer = (answer) => {
    return answer.trim().toLowerCase();
  };

  const handleSubmit = () => {
    const normalizedFunction = normalizeAnswer(functionName);
    const normalizedMethod = normalizeAnswer(methodName);

    if (normalizedFunction === "main" && normalizedMethod === "console") {
      // Auto-correct the case before proceeding
      setFunctionName("Main");
      setMethodName("Console");
      onComplete();
      Swal.fire({
        title: "Jawaban Anda Benar",
        text: "Silahkan Lanjut Kemateri Berikutnya",
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      window.scrollTo(0, 0);
      setFunctionName("");
      setMethodName("");
      setQuizFeedback("");
      Swal.fire({
        title: "Jawaban Salah!",
        text: "Baca Kembali Materi dan Coba Lagi",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleReset = () => {
    setFunctionName("");
    setMethodName("");
    setQuizFeedback("");
    setShowCompiler(false);
  };

  const handleTryCode = () => {
    setShowCompiler((prev) => !prev);
  };

  return (
    <div className="max-w-full p-6 mx-auto bg-white rounded-lg shadow-lg">
      <h2
        className="text-lg font-semibold text-center"
        style={{ color: "#6E2A7F" }}
      >
        UJI PENGETAHUAN
      </h2>

      <div className="mt-4">
        <p className="mt-2 text-gray-600">
          Lengkapilah struktur kode berikut dengan mengisi bagian yang kosong
          agar program memiliki sintaks yang benar ....
        </p>

        <div className="p-4 mt-3 font-mono text-sm bg-gray-100 rounded-lg">
          <pre style={{ whiteSpace: "pre-wrap" }}>
            <code>
              {`public class Program\n{\n  static void `}
              <input
                type="text"
                value={functionName}
                onChange={(e) => setFunctionName(e.target.value)}
                className="border border-gray-400 px-2 py-1 w-20 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
              />
              {`(string[] args)\n  {\n    `}
              <input
                type="text"
                value={methodName}
                onChange={(e) => setMethodName(e.target.value)}
                className="border border-gray-400 px-2 py-1 w-20 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
              />
              {`.WriteLine("Hello World");\n  }\n}`}
            </code>
          </pre>
        </div>

        {/* Tombol Submit */}
        <button
          onClick={handleSubmit}
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
          Cek Jawaban
        </button>

        {/* Tombol Reset (Hapus Jawaban) */}
        <button
          onClick={handleReset}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#c0392b")
          }
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "red")}
          className="ml-2"
        >
          Hapus Jawaban
        </button>

        {/* Tombol Coba Kode di Compiler */}
        <button
          onClick={handleTryCode}
          style={{
            backgroundColor: "white",
            color: "#6E2A7F",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            transition: "background-color 0.2s, border-color 0.2s",
            border: "2px solid #6E2A7F",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#e0e0e0";
            e.currentTarget.style.borderColor = "#5B1F6A";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "white";
            e.currentTarget.style.borderColor = "#6E2A7F";
          }}
          className="ml-2"
        >
          Coba Kode di Compiler
        </button>
      </div>

      {/* Iframe untuk Compiler */}
      {showCompiler && (
        <div className="mt-6">
          <iframe
            width="100%"
            height="475"
            src="https://dotnetfiddle.net/Widget/z3Z1xG"
            frameBorder="0"
          ></iframe>
        </div>
      )}

      {/* Umpan Balik Kuis */}
      {quizFeedback && (
        <p
          className={`mt-4 text-center ${
            functionName === "Main" && methodName === "Console"
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {quizFeedback}
        </p>
      )}
    </div>
  );
};

export default Quiz;
