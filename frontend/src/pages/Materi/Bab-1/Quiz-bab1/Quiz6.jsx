import React, { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2

const Quiz = ({ onComplete }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (e) => {
    window.scrollTo(0, 0);
    e.preventDefault();
    // Validasi jawaban
    if (selectedOption === "C") {
      onComplete();
      setIsSubmitted(true);
      setShowNotification(false);

      Swal.fire({
        title: "Jawaban Anda Benar",
        text: "Silahkan Lanjut Kemateri Berikutnya",
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      setSelectedOption("");
      setIsSubmitted(false);
      Swal.fire({
        title: "Jawaban Salah!",
        text: "Baca Kembali Materi dan Coba Lagi",
        icon: "error",
        confirmButtonText: "OK",
      }).then(() => {
        window.scrollTo(0, 0);
      });
    }
  };

  const handleReset = () => {
    setSelectedOption("");
    setIsSubmitted(false);
  };

  return (
    <div className="max-w-full p-6 mx-auto bg-white rounded-lg shadow-lg">
      <h2
        className="text-lg font-semibold text-center"
        style={{ color: "#6E2A7F" }}
      >
        UJI PENGETAHUAN
      </h2>
      <p className="mb-4">Sintaks untuk membuat single line comment adalah …</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          {["A", "B", "C", "D", "E"].map((option) => (
            <div key={option} className="mb-2">
              <label
                className={`flex items-center cursor-pointer p-3 rounded-lg border-2 transition duration-200 ${
                  selectedOption === option
                    ? "bg-[#6E2A7F] text-white border-[#6E2A7F]"
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
        </div>
      </form>
      {isSubmitted && (
        <p
          className={`mt-4 text-center ${
            selectedOption === "C" ? "text-green-500" : "text-red-500"
          }`}
        >
          {selectedOption === "C"}
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
