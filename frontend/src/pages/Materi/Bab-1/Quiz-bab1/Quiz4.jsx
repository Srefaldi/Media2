import React, { useState } from "react";
import PopUpJawabanSalah from "../../../../components/Home/Materi/PopUp/PopUpSalahJawaban";

const Quiz = ({ onComplete }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [quizFeedback, setQuizFeedback] = useState("");
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showCompiler, setShowCompiler] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi jawaban
    if (selectedAnswer === "C") {
      setQuizCompleted(true);
      setShowCompiler(false);
      onComplete();
    } else {
      setShowNotification(true);
    }
  };

  const handleReset = () => {
    setSelectedAnswer("");
    setQuizFeedback("");
    setQuizCompleted(false);
  };

  const toggleCompiler = () => {
    setShowCompiler((prev) => !prev);
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
          <button
            onClick={toggleCompiler}
            style={{
              backgroundColor: "white", // Warna latar belakang putih
              color: "#6E2A7F", // Warna teks sesuai tema
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              transition: "background-color 0.2s, border-color 0.2s",
              border: "2px solid #6E2A7F", // Outline border dengan warna tema
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#aab7b8")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "white")
            }
          >
            {showCompiler ? "Sembunyikan Compiler" : "Coba di Compiler"}
          </button>
        </div>
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

      {/* Umpan Balik Kuis */}
      {quizFeedback && (
        <p
          className={`mt-4 text-center ${
            selectedAnswer === "C" ? "text-green-500" : "text-red-500"
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

const getOptionText = (option) => {
  switch (option) {
    case "A":
      return "Mobil \nSepeda\nMotor";
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
