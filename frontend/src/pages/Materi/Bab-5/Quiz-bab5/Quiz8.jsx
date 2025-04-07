import React, { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2

const Quiz8 = ({ onComplete }) => {
  const [inputIteration, setInputIteration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Cek jawaban
    const correctIteration = "for (int j = 0; j < 2; j++)"; // Jawaban yang benar untuk iterasi

    if (inputIteration.trim() === correctIteration) {
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
      setInputIteration("");

      Swal.fire({
        title: "Jawaban Salah!",
        text: "Baca Kembali Materi dan Coba Lagi",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleReset = () => {
    setInputIteration("");
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
          Lengkapilah bagian kode yang kosong (tanda // ...) agar program
          menampilkan seluruh kombinasi pasangan bilangan dari 0 sampai 1, dalam
          bentuk i j:
        </p>

        <div className="p-4 mt-3 font-mono text-sm bg-gray-100 rounded-lg mb-4">
          <pre style={{ whiteSpace: "pre-wrap" }}>
            <code>
              {`public class Quiz\n{\n    public static void Main()\n    {\n        for (int i = 0; i < 2; i++)\n        {\n            `}
              <input
                type="text"
                value={inputIteration}
                onChange={(e) => setInputIteration(e.target.value)}
                className="border border-gray-400 px-2 py-1 mb-2 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban..."
              />
              {`\n            {\n                Console.WriteLine(i + " " + j);\n            }\n        }\n    }\n}`}
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

export default Quiz8;
