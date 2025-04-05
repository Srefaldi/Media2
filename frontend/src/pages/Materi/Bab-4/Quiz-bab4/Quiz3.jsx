import React, { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2

const Quiz3 = ({ onComplete }) => {
  const [inputPreIncrement, setInputPreIncrement] = useState("");
  const [inputPostIncrement, setInputPostIncrement] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Cek jawaban
    if (inputPreIncrement === "++" && inputPostIncrement === "++") {
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
      setInputPreIncrement("");
      setInputPostIncrement("");

      Swal.fire({
        title: "Jawaban Salah!",
        text: "Baca Kembali Materi dan Coba Lagi",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleReset = () => {
    setInputPreIncrement("");
    setInputPostIncrement("");
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
          Lengkapilah bagian kode yang hilang agar program dapat melakukan
          operasi increment dengan benar ...
        </p>

        <div className="p-4 mt-3 font-mono text-sm bg-gray-100 rounded-lg mb-4">
          <pre style={{ whiteSpace: "pre-wrap" }}>
            <code>
              {`public class SoalIncrement\n{\n    public static void Main(string[] args)\n    {\n        int a = 5;\n        Console.WriteLine("Hasil Pre-Increment: " + `}
              <input
                type="text"
                value={inputPreIncrement}
                onChange={(e) => setInputPreIncrement(e.target.value)}
                className="ml-1 mr-1 border border-gray-400 px-1 py-1 w-20 mb-2 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban ..."
              />
              {`a);\n        Console.WriteLine("Hasil Setelah Pre-Increment: " + a);\n\n        int b = 5;\n        Console.WriteLine("Hasil Post-Increment: " + b`}
              <input
                type="text"
                value={inputPostIncrement}
                onChange={(e) => setInputPostIncrement(e.target.value)}
                className="ml-1 mr-1 border border-gray-400 px-1 py-1 w-20 mb-2 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban ..."
              />
              {`);\n        Console.WriteLine("Hasil Setelah Post-Increment: " + b);\n    }\n}`}
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

export default Quiz3;
