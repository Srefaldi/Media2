import React, { useState } from "react";

const Quiz = ({ onComplete }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [quizFeedback, setQuizFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi jawaban
    if (selectedAnswer === "C") {
      setQuizFeedback("Jawaban benar! Anda dapat melanjutkan.");
      onComplete();
    } else {
      setQuizFeedback("Jawaban salah, coba lagi!");
    }
  };

  const handleReset = () => {
    setSelectedAnswer("");
    setQuizFeedback("");
  };

  return (
    <div className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Kuis</h2>
      <form onSubmit={handleSubmit}>
        <p className="mb-4 text-gray-700">
          1. Apa yang harus kita instal untuk menjalankan kode program dengan
          bahasa pemrograman C# pada Visual Studio Code?
        </p>
        <div className="mb-4">
          {["A", "B", "C", "D", "E"].map((option) => (
            <div key={option} className="mb-2">
              <label
                className={`flex items-center cursor-pointer p-3 rounded-lg border-2 transition duration-200 ${
                  selectedAnswer === option
                    ? "bg-[#001F3F] text-white border-[#001F3F]"
                    : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200"
                }`}
              >
                <input
                  type="radio"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  className="hidden"
                />
                {option}. {getOptionText(option)}
              </label>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Kirim
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-200"
          >
            Reset
          </button>
        </div>
      </form>
      {quizFeedback && (
        <p
          className={`mt-4 text-center ${
            selectedAnswer === "C" ? "text-green-500" : "text-red-500"
          }`}
        >
          {quizFeedback}
        </p>
      )}
    </div>
  );
};

const getOptionText = (option) => {
  switch (option) {
    case "A":
      return ".NET SDK dan .NET Master";
    case "B":
      return ".NET Master dan .NET Runtime";
    case "C":
      return ".NET SDK dan .NET Runtime";
    case "D":
      return ".NET Framework dan .NET Core";
    case "E":
      return ".NET SDK dan Visual Studio";
    default:
      return "";
  }
};

export default Quiz;
