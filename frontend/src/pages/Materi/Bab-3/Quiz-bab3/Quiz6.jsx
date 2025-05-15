import React, { useState } from "react";
import Swal from "sweetalert2";

const Quiz6 = ({ onComplete }) => {
  const [operator1, setOperator1] = useState("");
  const [operator2, setOperator2] = useState("");
  const [operator3, setOperator3] = useState("");
  const [quizFeedback, setQuizFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fungsi untuk normalisasi jawaban
    const normalizeAnswer = (answer) => {
      return answer.trim().replace(/\s+/g, " ").toLowerCase();
    };

    // Normalisasi jawaban pengguna dan jawaban yang benar
    const normalizedOperator1 = normalizeAnswer(operator1);
    const normalizedOperator2 = normalizeAnswer(operator2);
    const normalizedOperator3 = normalizeAnswer(operator3);

    // Cek jawaban
    if (
      normalizedOperator1 === normalizeAnswer("<") &&
      normalizedOperator2 === normalizeAnswer("==") &&
      normalizedOperator3 === normalizeAnswer(">")
    ) {
      onComplete(true); // Pass isPassed: true to parent
      Swal.fire({
        title: "Jawaban Anda Benar",
        text: "Silahkan Lanjut Kemateri Berikutnya",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      });
    } else {
      // Scroll ke atas ketika jawaban salah
      window.scrollTo(0, 0);
      setOperator1("");
      setOperator2("");
      setOperator3("");

      Swal.fire({
        title: "Jawaban Salah!",
        text: "Baca Kembali Materi dan Coba Lagi",
        icon: "error",
        confirmButtonText: "OK",
      });
      onComplete(false); // Pass isPassed: false to parent
    }
  };

  const handleReset = () => {
    setOperator1("");
    setOperator2("");
    setOperator3("");
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
          Lengkapi kode berikut dengan operator perbandingan yang benar:
        </p>

        <div className="p-4 mt-3 mb-4 font-mono text-sm bg-gray-100 rounded-lg">
          <pre style={{ whiteSpace: "pre-wrap" }}>
            <code>
              {`bool hasil1 = 50 `}
              <input
                type="text"
                value={operator1}
                onChange={(e) => setOperator1(e.target.value)}
                className="border border-gray-400 mb-2 px-2 py-1 w-20 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban..."
              />
              {` 30; // Bandingkan apakah 50 lebih kecil dari 30\n`}
              {`bool hasil2 = 15 `}
              <input
                type="text"
                value={operator2}
                onChange={(e) => setOperator2(e.target.value)}
                className="border border-gray-400 px-2 mb-2 py-1 w-20 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban..."
              />
              {` 15; // Bandingkan apakah 15 sama dengan 15\n`}
              {`bool hasil3 = 'B'`}
              <input
                type="text"
                value={operator3}
                onChange={(e) => setOperator3(e.target.value)}
                className="border border-gray-400 px-2 py-1 mb-2 w-20 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban..."
              />
              {` 'b'; // Bandingkan apakah karakter 'B' lebih besar dari 'b'\n\n`}
              {`Console.WriteLine("hasil1 = " + hasil1);\nConsole.WriteLine("hasil2 = " + hasil2);\nConsole.WriteLine("hasil3 = " + hasil3);`}
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

export default Quiz6;
