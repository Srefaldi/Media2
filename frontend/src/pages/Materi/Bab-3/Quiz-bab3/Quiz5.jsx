import React, { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2

const Quiz5 = ({ onComplete }) => {
  const [var1Type, setVar1Type] = useState("");
  const [var2Type, setVar2Type] = useState("");
  const [var3Type, setVar3Type] = useState("");
  const [var1Value, setVar1Value] = useState("");
  const [var2Value, setVar2Value] = useState("");
  const [var3Value, setVar3Value] = useState("");
  const [quizFeedback, setQuizFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Cek jawaban
    if (
      var1Type === "float" &&
      var2Type === "double" &&
      var3Type === "decimal" &&
      var1Value === "F" &&
      var2Value === "D" &&
      var3Value === "M"
    ) {
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
      setVar1Type("");
      setVar2Type("");
      setVar3Type("");
      setVar1Value("");
      setVar2Value("");
      setVar3Value("");
      setQuizFeedback("Jawaban Anda Salah! Silakan coba lagi.");
      Swal.fire({
        title: "Jawaban Salah!",
        text: "Baca Kembali Materi dan Coba Lagi",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleReset = () => {
    setVar1Type("");
    setVar2Type("");
    setVar3Type("");
    setVar1Value("");
    setVar2Value("");
    setVar3Value("");
    setQuizFeedback("");
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
          Lengkapi kode berikut dengan tipe data dan nilai yang benar:
        </p>

        <div className="p-4 mt-3 mb-4 font-mono text-sm bg-gray-100 rounded-lg">
          <pre style={{ whiteSpace: "pre-wrap" }}>
            <code>
              {`public class BelajarCSharp \n{ \n    public static void Main(string[] args) \n    { \n        `}
              <input
                type="text"
                value={var1Type}
                onChange={(e) => setVar1Type(e.target.value)}
                className="border border-gray-400 px-2 py-1 w-20 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban..."
              />
              {` var1; \n        `}
              <input
                type="text"
                value={var2Type}
                onChange={(e) => setVar2Type(e.target.value)}
                className="border border-gray-400 px-2 py-1 w-20 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban..."
              />
              {` var2; \n        `}
              <input
                type="text"
                value={var3Type}
                onChange={(e) => setVar3Type(e.target.value)}
                className="border border-gray-400 px-2 py-1 w-20 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban..."
              />
              {` var3; \n\n        var1 = 136.18`}
              <input
                type="text"
                value={var1Value}
                onChange={(e) => setVar1Value(e.target.value)}
                className="border border-gray-400 px-2 py-1 w-18 ml-2 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban..."
              />
              {`;\n        var2 = 136.18`}
              <input
                type="text"
                value={var2Value}
                onChange={(e) => setVar2Value(e.target.value)}
                className="border border-gray-400 px-2 py-1 w-18 ml-2 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban..."
              />
              {`;\n        var3 = 136.18`}
              <input
                type="text"
                value={var3Value}
                onChange={(e) => setVar3Value(e.target.value)}
                className="border border-gray-400 px-2 py-1 w-18 ml-2 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban..."
              />
              {`;\n\n        Console.WriteLine("var1 = " + var1); \n        Console.WriteLine("var2 = " + var2); \n        Console.WriteLine("var3 = " + var3); \n    } \n}`}
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

export default Quiz5;
