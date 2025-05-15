import React, { useState } from "react";
import Swal from "sweetalert2";

const Quiz2 = ({ onComplete }) => {
  const [inputTambah, setInputTambah] = useState("");
  const [inputKurang, setInputKurang] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fungsi untuk normalisasi jawaban
    const normalizeAnswer = (answer) => {
      return answer.trim().replace(/\s+/g, " ").toLowerCase();
    };

    // Normalisasi jawaban pengguna dan jawaban yang benar
    const normalizedInputTambah = normalizeAnswer(inputTambah);
    const normalizedInputKurang = normalizeAnswer(inputKurang);

    // Cek jawaban
    if (
      normalizedInputTambah === normalizeAnswer("+") &&
      normalizedInputKurang === normalizeAnswer("-")
    ) {
      console.log("Correct answers submitted"); // Debugging
      onComplete(true); // Pass true to indicate correct answer
    } else {
      window.scrollTo(0, 0);
      setInputTambah("");
      setInputKurang("");
      Swal.fire({
        title: "Jawaban Salah!",
        text: "Baca Kembali Materi dan Coba Lagi",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleReset = () => {
    setInputTambah("");
    setInputKurang("");
  };

  return (
    <div className="max-w-full p-6 mx-auto mt-4 bg-white rounded-lg shadow-lg">
      <h2
        className="text-lg font-semibold text-center"
        style={{ color: "#6E2A7F" }}
      >
        UJI PENGETAHUAN
      </h2>

      <div className="mt-4">
        <p className="mt-2 text-gray-600">
          Lengkapilah bagian kode yang hilang agar program dapat melakukan
          penjumlahan dan pengurangan dua bilangan yang dimasukkan oleh pengguna
          ...
        </p>

        <div className="p-4 mt-3 mb-4 font-mono text-sm bg-gray-100 rounded-lg">
          <pre style={{ whiteSpace: "pre-wrap" }}>
            <code>
              {`int angka1 = 15;\nint angka2 = 10;\n\nint hasilTambah = angka1 `}
              <input
                type="text"
                value={inputTambah}
                onChange={(e) => setInputTambah(e.target.value)}
                className="border border-gray-400 px-1 py-1 w-20 mb-2 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban ..."
              />
              {` angka2;\nint hasilKurang = angka1 `}
              <input
                type="text"
                value={inputKurang}
                onChange={(e) => setInputKurang(e.target.value)}
                className="border border-gray-400 px-1 py-1 w-20 mb-2 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban ..."
              />
              {` angka2;\n\nConsole.WriteLine("Hasil Penjumlahan: " + hasilTambah);\nConsole.WriteLine("Hasil Pengurangan: " + hasilKurang);`}
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

export default Quiz2;
