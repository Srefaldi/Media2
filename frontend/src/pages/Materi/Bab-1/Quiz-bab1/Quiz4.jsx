import React, { useState } from "react";

const Quiz = ({ onComplete }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [quizFeedback, setQuizFeedback] = useState("");
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showCompiler, setShowCompiler] = useState(false); // State for compiler visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi jawaban
    if (selectedAnswer === "C") {
      setQuizFeedback("Jawaban benar! Anda dapat melanjutkan.");
      setQuizCompleted(true);
      setShowCompiler(false); // Hide compiler when quiz is completed
      onComplete(); // Call onComplete to notify parent component
    } else {
      setQuizFeedback("Jawaban salah, coba lagi!");
    }
  };

  const handleReset = () => {
    setSelectedAnswer("");
    setQuizFeedback("");
    setQuizCompleted(false); // Reset status kuis
  };

  const toggleCompiler = () => {
    setShowCompiler(!showCompiler); // Toggle compiler visibility
  };

  return (
    <>
      <h3 className="text-xl font-semibold mt-4">Kuis</h3>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-lg shadow-md"
      >
        <p className="mb-4 text-gray-700">
          Dari sampel kode di bawah ini, yang mana yang merupakan hasil output
          dengan urutan struktur eksekusi kode yang benar?
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mb-4">
          {`namespace CsharpLearn {
    class Animal {
        static void Main(string[] args) {
            Console.WriteLine("Mobil");
            Console.WriteLine("Motor");
            Console.WriteLine("Sepeda");
        }
    }
}`}
        </pre>
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
        <button
          onClick={toggleCompiler}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 mt-4"
        >
          {showCompiler ? "Sembunyikan Compiler" : "Coba Kode"}
        </button>
        {showCompiler && (
          <iframe
            width="100%"
            height="475"
            src="https://dotnetfiddle.net/Widget/dIqdao"
            frameBorder="0"
            className="mt-4"
          ></iframe>
        )}
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
    </>
  );
};

const getOptionText = (option) => {
  switch (option) {
    case "A":
      return "Mobil\nSepeda\nMotor";
    case "B":
      return "Sepeda\nMobil\nMotor";
    case "C":
      return "Mobil\nMotor\nSepeda";
    case "D":
      return "Motor\nSepeda\nMobil";
    case "E":
      return "Motor\nSepeda\nMobil";
    default:
      return "";
  }
};

export default Quiz;
