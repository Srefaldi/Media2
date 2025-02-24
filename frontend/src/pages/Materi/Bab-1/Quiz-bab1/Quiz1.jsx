import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NotificationPopup from "../../../../components/Home/Materi/PopUp/PopUpSalahJawaban";

const Quiz = ({ onComplete }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [quizFeedback, setQuizFeedback] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedAnswer === "B") {
      onComplete();
    } else {
      setShowNotification(true);
    }
  };

  const handleReset = () => {
    setSelectedAnswer("");
    setQuizFeedback("");
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
    setSelectedAnswer("");
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
      <form onSubmit={handleSubmit}>
        <p className="mb-4 text-gray-700">Hasil kompilasi program C# ....</p>
        <div className="mb-4">
          {["A", "B", "C", "D", "E"].map((option) => (
            <div key={option} className="mb-2">
              <label
                className={`flex items-center cursor-pointer p-3 rounded-lg border-2 transition duration-200 ${
                  selectedAnswer === option
                    ? "bg-[#6E2A7F] text-white border-[#6E2A7F]"
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
        <div className="flex space-x-2">
          <button
            type="submit"
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
            Kirim
          </button>
          <button
            type="button"
            onClick={handleReset}
            style={{
              backgroundColor: "red", // Warna merah
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              transition: "background-color 0.2s",
              marginLeft: "1rem", // Tambahkan margin kiri untuk jarak
            }}
            onMouseEnter={
              (e) => (e.currentTarget.style.backgroundColor = "#c0392b") // Warna merah lebih gelap saat hover
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "red")
            }
          >
            Hapus Jawaban
          </button>
        </div>
      </form>
      {quizFeedback && (
        <p
          className={`mt-4 text-center ${
            selectedAnswer === "B" ? "text-green-500" : "text-red-500"
          }`}
        >
          {quizFeedback}
        </p>
      )}

      {/* Notifikasi jika jawaban salah */}
      {showNotification && (
        <NotificationPopup onClose={handleCloseNotification} />
      )}
    </div>
  );
};

const getOptionText = (option) => {
  switch (option) {
    case "A":
      return "Binary langsung";
    case "B":
      return "CIL (Common Intermediate Language)";
    case "C":
      return "Java bytecode";
    case "D":
      return "Assembly language";
    case "E":
      return "HTML";
    default:
      return "";
  }
};

export default Quiz;
