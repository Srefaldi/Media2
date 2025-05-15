import React, { useState } from "react";
import Swal from "sweetalert2";

const QuizAssignment = ({ onComplete }) => {
  const [inputMultiply, setInputMultiply] = useState("");
  const [inputDivide, setInputDivide] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fungsi untuk normalisasi jawaban
    const normalizeAnswer = (answer) => {
      return answer.replace(/\s+/g, "").toLowerCase();
    };

    // Normalisasi jawaban pengguna dan jawaban yang benar
    const normalizedInputMultiply = normalizeAnswer(inputMultiply);
    const normalizedInputDivide = normalizeAnswer(inputDivide);
    const correctMultiply = "*="; // Operator penugasan untuk perkalian
    const correctDivide = "/="; // Operator penugasan untuk pembagian

    // Cek jawaban
    if (
      normalizedInputMultiply === normalizeAnswer(correctMultiply) &&
      normalizedInputDivide === normalizeAnswer(correctDivide)
    ) {
      console.log("Correct answers submitted"); // Debugging
      onComplete(true); // Pass true to indicate correct answer
    } else {
      window.scrollTo(0, 0);
      setInputMultiply("");
      setInputDivide("");
      Swal.fire({
        title: "Jawaban Salah!",
        text: "Baca Kembali Materi dan Coba Lagi",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleReset = () => {
    setInputMultiply("");
    setInputDivide("");
  };

  return (
    <div className="max-w-full p-6 mt-4 bg-white rounded-lg shadow-lg">
      <h2
        className="text-lg font-semibold text-center"
        style={{ color: "#6E2A7F" }}
      >
        UJI PENGETAHUAN
      </h2>

      <div className="mt-4">
        <p className="mt-2 text-gray-600">
          Lengkapilah bagian kode berikut dengan operator penugasan gabungan
          yang sesuai untuk mendapatkan hasil perhitungan yang benar.
        </p>

        <div className="p-4 mt-3 mb-4 font-mono text-sm bg-gray-100 rounded-lg">
          <pre style={{ whiteSpace: "pre-wrap" }}>
            <code>
              {`public class SoalPenugasan2\n{\n    public static void Main(string[] args)\n    {\n        int angka = 10;\n\n        // Kalikan angka dengan 4\n        angka `}
              <input
                type="text"
                value={inputMultiply}
                onChange={(e) => setInputMultiply(e.target.value)}
                className="ml-1 mr-1 border border-gray-400 px-1 py-1 w-20 mb-2 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban ..."
              />
              {` 4;\n        Console.WriteLine("Setelah perkalian: " + angka);\n\n        // Bagi angka dengan 2\n        angka `}
              <input
                type="text"
                value={inputDivide}
                onChange={(e) => setInputDivide(e.target.value)}
                className="ml-1 mr-1 border border-gray-400 px-1 py-1 w-20 mb-2 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban ..."
              />
              {` 2;\n        Console.WriteLine("Setelah pembagian: " + angka);\n    }\n}`}
            </code>
          </pre>
        </div>

        {/* Tombol Submit */}
        <button
          onClick={handleSubmit}
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
          Cek Jawaban
        </button>

        {/* Tombol Reset (Hapus Jawaban) */}
        <button
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
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "red")}
        >
          Hapus Jawaban
        </button>
      </div>
    </div>
  );
};

export default QuizAssignment;
