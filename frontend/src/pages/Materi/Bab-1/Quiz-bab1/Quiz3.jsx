import React, { useState } from "react";
import PopUpJawabanSalah from "../../../../components/Home/Materi/PopUp/PopUpSalahJawaban";

const Quiz = ({ onComplete }) => {
  const [functionName, setFunctionName] = useState("");
  const [methodName, setMethodName] = useState("");
  const [showCompiler, setShowCompiler] = useState(false);
  const [quizFeedback, setQuizFeedback] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = () => {
    if (functionName === "Main" && methodName === "Console") {
      onComplete();
    } else {
      setShowNotification(true);
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

  const handleCloseNotification = () => {
    setShowNotification(false);
    setFunctionName("");
    setMethodName("");
    window.scrollTo(0, 0);
  };

  return (
    <div className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2
        className="text-lg font-semibold text-center"
        style={{ color: "#6E2A7F" }}
      >
        UJI PENGETAHUAN
      </h2>

      <div className="mt-4">
        <p className="text-gray-600 mt-2">
          Lengkapi kode berikut agar bisa menampilkan "Hello World"
        </p>

        <div className="bg-gray-100 p-4 mt-3 rounded-lg font-mono text-sm">
          <pre style={{ whiteSpace: "pre-wrap" }}>
            <code>
              {`static void `}
              <input
                type="text"
                value={functionName}
                onChange={(e) => setFunctionName(e.target.value)}
                className="border border-gray-400 px-2 py-1 w-20 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
              />
              {` (string[] args)`}
              {"\n{"}
              {"\n  "}
              <input
                type="text"
                value={methodName}
                onChange={(e) => setMethodName(e.target.value)}
                className="border border-gray-400 px-2 py-1 w-20 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
              />
              {`.`}
              <input
                type="text"
                className="border border-gray-400 px-2 py-1 w-32 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                value="WriteLine"
                readOnly
              />
              {`("Hello World!");`}
              {"\n}"}
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

      {/* Notifikasi jika jawaban salah */}
      {showNotification && (
        <PopUpJawabanSalah onClose={handleCloseNotification} />
      )}
    </div>
  );
};

export default Quiz;
