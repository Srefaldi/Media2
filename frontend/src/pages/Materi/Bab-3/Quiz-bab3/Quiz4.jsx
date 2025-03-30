import React, { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2

const Quiz4 = ({ onComplete }) => {
  const [var1, setVar1] = useState("");
  const [var2, setVar2] = useState("");
  const [var3, setVar3] = useState("");
  const [quizFeedback, setQuizFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Cek jawaban
    if (var1 === "0b10100100" && var2 === "164" && var3 === "0xA4") {
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
      setVar1("");
      setVar2("");
      setVar3("");
      Swal.fire({
        title: "Jawaban Salah!",
        text: "Baca Kembali Materi dan Coba Lagi",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleReset = () => {
    setVar1("");
    setVar2("");
    setVar3("");
    setQuizFeedback("");
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
          Lengkapi kode berikut agar bisa menyimpan nilai 164 dalam bentuk
          biner, desimal, dan heksadesimal ...
        </p>

        <div className="p-4 mt-3 mb-4 font-mono text-sm bg-gray-100 rounded-lg">
          <pre style={{ whiteSpace: "pre-wrap" }}>
            <code>
              {`int var1 = `}
              <input
                type="text"
                value={var1}
                onChange={(e) => setVar1(e.target.value)}
                className="border border-gray-400 mb-2 px-2 py-1 w-32 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban ..."
              />
              {`;\nint var2 = `}
              <input
                type="text"
                value={var2}
                onChange={(e) => setVar2(e.target.value)}
                className="border border-gray-400 px-2 mb-2 py-1 w-32 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban ..."
              />
              {`;\nint var3 = `}
              <input
                type="text"
                value={var3}
                onChange={(e) => setVar3(e.target.value)}
                className="border border-gray-400 px-2 mb-2 py-1 w-32 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban ..."
              />
              {`;\n\nConsole.WriteLine(var1);\nConsole.WriteLine(var2);\nConsole.WriteLine(var3);`}
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

      {/* Umpan Balik Kuis */}
      {quizFeedback && (
        <p className={`mt-4 text-center text-red-500`}>{quizFeedback}</p>
      )}
    </div>
  );
};

export default Quiz4;
