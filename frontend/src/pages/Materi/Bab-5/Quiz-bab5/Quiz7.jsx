import React, { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2

const Quiz7 = ({ onComplete }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Cek jawaban
    const correctAnswer = "A"; // Jawaban yang benar

    if (selectedAnswer === correctAnswer) {
      window.scrollTo(0, document.body.scrollHeight);

      Swal.fire({
        title: "Jawaban Anda Benar",
        text: "Silahkan Lanjut Kemateri Berikutnya",
        icon: "success",
        confirmButtonText: "OK",
      });

      onComplete(true); // Menandakan kuis selesai
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
    <div className="max-w-full p-6 mx-auto mt-4 bg-white rounded-lg shadow-lg">
      <h2
        className="text-lg font-semibold text-center"
        style={{ color: "#6E2A7F" }}
      >
        UJI PENGETAHUAN
      </h2>
      <form onSubmit={handleSubmit}>
        <p className="mb-4 text-gray-700">
          Pilihlah pernyataan yang paling tepat mengenai perbedaan utama antara
          break dan continue dalam perulangan ...
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
      return "break menghentikan seluruh perulangan, sedangkan continue melewati iterasi saat ini dan melanjutkan ke iterasi berikutnya.";
    case "B":
      return "break hanya bekerja pada perulangan while, sedangkan continue bekerja pada semua jenis perulangan.";
    case "C":
      return "break menghentikan program sepenuhnya, sedangkan continue menghentikan blok perulangan saat ini.";
    case "D":
      return "break digunakan untuk mengulang iterasi, sedangkan continue digunakan untuk keluar dari perulangan.";
    case "E":
      return "Tidak ada perbedaan antara break dan continue.";
    default:
      return "";
  }
};

export default Quiz7;
