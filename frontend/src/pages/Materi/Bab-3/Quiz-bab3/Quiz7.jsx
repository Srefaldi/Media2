import React, { useState } from "react";
import Swal from "sweetalert2";

const Quiz7 = ({ onComplete }) => {
  const [charValue1, setCharValue1] = useState("");
  const [charValue2, setCharValue2] = useState("");
  const [charValue3, setCharValue3] = useState("");
  const [output1, setOutput1] = useState("");
  const [output2, setOutput2] = useState("");
  const [output3, setOutput3] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fungsi untuk normalisasi jawaban
    const normalizeAnswer = (answer) => {
      return answer.trim().replace(/\s+/g, " ").toLowerCase();
    };

    // Normalisasi jawaban pengguna dan jawaban yang benar
    const normalizedCharValue1 = normalizeAnswer(charValue1);
    const normalizedCharValue2 = normalizeAnswer(charValue2);
    const normalizedCharValue3 = normalizeAnswer(charValue3);
    const normalizedOutput1 = normalizeAnswer(output1);
    const normalizedOutput2 = normalizeAnswer(output2);
    const normalizedOutput3 = normalizeAnswer(output3);

    // Cek jawaban
    if (
      normalizedCharValue1 === normalizeAnswer("'B'") &&
      normalizedCharValue2 === normalizeAnswer("'7'") &&
      normalizedCharValue3 === normalizeAnswer("'#'") &&
      normalizedOutput1 === normalizeAnswer("huruf") &&
      normalizedOutput2 === normalizeAnswer("angka") &&
      normalizedOutput3 === normalizeAnswer("simbol")
    ) {
      console.log("Correct answers submitted"); // Debugging
      onComplete(true); // Pass true to indicate correct answer
    } else {
      window.scrollTo(0, 0);
      setCharValue1("");
      setCharValue2("");
      setCharValue3("");
      setOutput1("");
      setOutput2("");
      setOutput3("");
      Swal.fire({
        title: "Jawaban Salah!",
        text: "Baca Kembali Materi dan Coba Lagi",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleReset = () => {
    setCharValue1("");
    setCharValue2("");
    setCharValue3("");
    setOutput1("");
    setOutput2("");
    setOutput3("");
  };

  return (
    <div className="max-w-full p-6 mx-auto bg-white rounded-lg shadow-lg">
      <h2
        className="text-lg font-semibold text-center"
        style={{ color: "#6E2A7F" }}
      >
        UJI PENGETAHUAN
      </h2>

      <div className="mt-4">
        <p className="mt-2 text-gray-600">
          Lengkapi kode berikut sehingga dapat menampilkan karakter B, 7, dan #
          dengan output yang benar ...
        </p>

        <div className="p-4 mt-3 mb-4 font-mono text-sm bg-gray-100 rounded-lg">
          <pre style={{ whiteSpace: "pre-wrap" }}>
            <code>
              {`\npublic class BelajarCSharp \n{\n    public static void Main(string[] args) \n    {\n        char huruf = `}
              <input
                type="text"
                value={charValue1}
                onChange={(e) => setCharValue1(e.target.value)}
                className="border border-gray-400 px-2 py-1 w-20 mb-2 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban..."
              />
              {`;\n        char angka = `}
              <input
                type="text"
                value={charValue2}
                onChange={(e) => setCharValue2(e.target.value)}
                className="border border-gray-400 px-2 py-1 w-20 mb-2 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban..."
              />
              {`;\n        char simbol = `}
              <input
                type="text"
                value={charValue3}
                onChange={(e) => setCharValue3(e.target.value)}
                className="border border-gray-400 px-2 py-1 w-20 mb-2 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban..."
              />
              {`;\n\n        Console.WriteLine("Huruf: " + `}
              <input
                type="text"
                value={output1}
                onChange={(e) => setOutput1(e.target.value)}
                className="border border-gray-400 px-2 py-1 w-20 mb-2 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban..."
              />
              {`);\n        Console.WriteLine("Angka: " + `}
              <input
                type="text"
                value={output2}
                onChange={(e) => setOutput2(e.target.value)}
                className="border border-gray-400 px-2 py-1 w-20 mb-2 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban..."
              />
              {`);\n        Console.WriteLine("Simbol: " + `}
              <input
                type="text"
                value={output3}
                onChange={(e) => setOutput3(e.target.value)}
                className="border border-gray-400 px-2 py-1 w-20 mb-2 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban..."
              />
              {`);\n    }\n}`}
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

export default Quiz7;
