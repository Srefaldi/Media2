import React, { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2

const QuizKlasifikasiTipeData = ({ onComplete }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedAnswer === "B") {
      window.scrollTo(0, document.body.scrollHeight);

      Swal.fire({
        title: "Jawaban Anda Benar",
        text: "Silahkan Lanjut Kemateri Berikutnya",
        icon: "success",
        confirmButtonText: "OK",
      });

      onComplete(true);
    } else {
      // Scroll ke atas ketika jawaban salah
      window.scrollTo(0, 0);
      setSelectedAnswer("");
      Swal.fire({
        title: "Jawaban Salah!",
        text: "Baca Kembali Materi dan Coba Lagi",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleReset = () => {
    setSelectedAnswer("");
  };

  return (
    <div className="mt-4 max-w-full p-6 mx-auto bg-white rounded-lg shadow-lg">
      <h2
        className="text-lg font-semibold text-center"
        style={{ color: "#6E2A7F" }}
      >
        UJI PENGETAHUAN
      </h2>
      <form onSubmit={handleSubmit}>
        <p className="mb-4 text-gray-700">
          Dalam mendefinisikan user-defined types dengan menggunakan …
        </p>
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
              backgroundColor: "red",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              transition: "background-color 0.2s",
              marginLeft: "1rem",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#c0392b")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "red")
            }
          >
            Hapus Jawaban
          </button>
        </div>
      </form>
    </div>
  );
};

const getOptionText = (option) => {
  switch (option) {
    case "A":
      return "int dan string";
    case "B":
      return "class dan struct";
    case "C":
      return "interface dan bool";
    case "D":
      return "enum dan record";
    case "E":
      return "delegate dan interface";
    default:
      return "";
  }
};

export default QuizKlasifikasiTipeData;
