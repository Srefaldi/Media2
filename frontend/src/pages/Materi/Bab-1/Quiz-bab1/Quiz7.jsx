import React, { useState } from "react";
import PopUpJawabanSalah from "../../../../components/Home/Materi/PopUp/PopUpSalahJawaban";

const Quiz = ({ onComplete }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi jawaban
    if (selectedOption === "B") {
      onComplete();
      setIsSubmitted(true);
      setShowNotification(false);
    } else {
      setShowNotification(true);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setSelectedOption("");
    setIsSubmitted(false);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
    setSelectedOption("");
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
      <p className="mb-4">Penyebab dari syntax error adalah …</p>
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
            Kirim Jawaban
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
            selectedOption === "B" ? "text-green-500" : "text-red-500"
          }`}
        >
          {selectedOption === "B"}
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
      return "Tidak memberikan spasi antara kode";
    case "B":
      return "Menulis kode yang menyimpang dari aturan tata bahasa C#"; // Jawaban benar
    case "C":
      return "Pengguna memasukkan data yang salah";
    case "D":
      return "Menggunakan variabel yang tidak dideklarasikan";
    case "E":
      return "Menggunakan tipe data yang tidak sesuai";
    default:
      return "";
  }
};

export default Quiz;
