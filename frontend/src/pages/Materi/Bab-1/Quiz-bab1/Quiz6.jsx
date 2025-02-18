import React, { useState } from "react";

const Quiz = ({ onCorrectAnswer }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi jawaban
    if (selectedOption === "C") {
      onCorrectAnswer(); // Panggil fungsi jika jawaban benar
    }
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setSelectedOption("");
    setIsSubmitted(false);
  };

  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">Kuis</h3>
      <p className="mb-4">Sintaks untuk membuat single line comment adalah …</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          {["A", "B", "C", "D", "E"].map((option) => (
            <div key={option} className="mb-2">
              <label
                className={`flex items-center cursor-pointer p-3 rounded-lg border-2 transition duration-200 ${
                  selectedOption === option
                    ? "bg-[#001F3F] text-white border-[#001F3F]"
                    : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200"
                }`}
              >
                <input
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
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
            Kirim Jawaban
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
      {isSubmitted && (
        <p
          className={`mt-4 text-center ${
            selectedOption === "C" ? "text-green-500" : "text-red-500"
          }`}
        >
          {selectedOption === "C"
            ? "Jawaban Anda benar!"
            : "Jawaban Anda salah. Coba lagi!"}
        </p>
      )}
    </div>
  );
};

const getOptionText = (option) => {
  switch (option) {
    case "A":
      return "$$";
    case "B":
      return "&&";
    case "C":
      return "//";
    case "D":
      return "##";
    case "E":
      return "{}*{}";
    default:
      return "";
  }
};

export default Quiz;
