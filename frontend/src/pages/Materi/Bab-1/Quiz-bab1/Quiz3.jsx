import React, { useState } from "react";

const Quiz = ({ onComplete }) => {
  const [functionName, setFunctionName] = useState("");
  const [methodName, setMethodName] = useState("");
  const [showCompiler, setShowCompiler] = useState(false);
  const [quizFeedback, setQuizFeedback] = useState("");

  const handleSubmit = () => {
    if (functionName === "Main" && methodName === "Console") {
      setQuizFeedback("Jawaban Anda benar! Anda dapat melanjutkan.");
      onComplete();
    } else {
      setQuizFeedback("Jawaban Anda salah, coba lagi!");
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
    <div className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-gray-800 text-center">
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
                className="border border-gray-400 px-2 py-1 w-20 rounded-md focus:ring-2 focus:ring-blue-300"
              />
              {` (string[] args)`}
              {"\n{"}
              {"\n  "}
              <input
                type="text"
                value={methodName}
                onChange={(e) => setMethodName(e.target.value)}
                className="border border-gray-400 px-2 py-1 w-20 rounded-md focus:ring-2 focus:ring-blue-300"
              />
              {`.`}
              <input
                type="text"
                className="border border-gray-400 px-2 py-1 w-32 rounded-md focus:ring-2 focus:ring-blue-300"
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
          className="bg-green-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-green-600"
        >
          Cek Jawaban
        </button>

        {/* Tombol Reset */}
        <button
          onClick={handleReset}
          className="bg-gray-500 text-white px-4 py-2 mt-4 ml-2 rounded-lg hover:bg-gray-600"
        >
          Hapus Jawaban
        </button>

        {/* Tombol Coba Kode di Compiler */}
        <button
          onClick={handleTryCode}
          className="bg-blue-500 text-white px-4 py-2 mt-4 ml-2 rounded-lg hover:bg-blue-600"
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
        <p className={`mt-4 text-center ${functionName === "Main" && methodName === "Console" ? "text-green-500" : "text-red-500"}`}>
          {quizFeedback}
        </p>
      )}
    </div>
  );
};

export default Quiz;