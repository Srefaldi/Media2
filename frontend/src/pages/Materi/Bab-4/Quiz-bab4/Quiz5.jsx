import React, { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2

const QuizComparison = ({ onComplete }) => {
  const [inputComparison, setInputComparison] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Cek jawaban
    const correctComparison = ">"; // Operator perbandingan yang benar

    if (inputComparison.trim() === correctComparison) {
      onComplete();
      Swal.fire({
        title: "Jawaban Anda Benar",
        text: "Silahkan Lanjut Kemateri Berikutnya",
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      // Scroll ke atas ketika jawaban salah
      window.scrollTo(0, 0);
      setInputComparison("");

      Swal.fire({
        title: "Jawaban Salah!",
        text: "Baca Kembali Materi dan Coba Lagi",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleReset = () => {
    setInputComparison("");
  };

  return (
    <div className="mt-4 max-w-full p-6 mx-auto bg-white rounded-lg shadow-lg">
      <h2
        className="text-lg font-semibold text-center"
        style={{ color: "#6E2A7F" }}
      >
        UJI PENGETAHUAN
      </h2>

      <div className="mt-4">
        <p className="mt-2 text-gray-600">
          Lengkapilah bagian kode berikut dengan operator perbandingan yang
          sesuai untuk mendapatkan hasil yang benar.
        </p>

        <div className="p-4 mt-3 font-mono text-sm bg-gray-100 rounded-lg mb-4">
          <pre style={{ whiteSpace: "pre-wrap" }}>
            <code>
              {`using System;\n\npublic class SoalPerbandingan4\n{\n    public static void Main(string[] args)\n    {\n        int x = 18;\n        int y = 12;\n\n        if (x `}
              <input
                type="text"
                value={inputComparison}
                onChange={(e) => setInputComparison(e.target.value)}
                className="ml-1 mr-1 border border-gray-400 px-1 py-1 w-20 mb-2 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban ..."
              />
              {` y)\n        {\n            Console.WriteLine("x lebih besar dari y");\n        }\n        else {\n            Console.WriteLine("x lebih kecil atau sama dengan y");\n        }\n    }\n}`}
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

export default QuizComparison;
