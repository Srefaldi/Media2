import React, { useState } from "react";
import Swal from "sweetalert2";

const Quiz4 = ({ onComplete }) => {
  const [inputMethodCall, setInputMethodCall] = useState("");
  const [inputParameter, setInputParameter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fungsi untuk normalisasi jawaban
    const normalizeAnswer = (answer) => {
      return answer.replace(/\s+/g, "").toLowerCase();
    };

    // Normalisasi jawaban pengguna dan jawaban yang benar
    const normalizedInputMethodCall = normalizeAnswer(inputMethodCall);
    const normalizedInputParameter = normalizeAnswer(inputParameter);
    const correctMethodCall = "Sapa";
    const correctParameter = "nama";
    const normalizedCorrectMethodCall = normalizeAnswer(correctMethodCall);
    const normalizedCorrectParameter = normalizeAnswer(correctParameter);

    // Cek jawaban
    if (
      normalizedInputMethodCall === normalizedCorrectMethodCall &&
      normalizedInputParameter === normalizedCorrectParameter
    ) {
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
        onComplete(true);
      });
    } else {
      window.scrollTo(0, 0);
      setInputMethodCall("");
      setInputParameter("");
      Swal.fire({
        title: "Jawaban Salah!",
        text: "Baca Kembali Materi dan Coba Lagi",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleReset = () => {
    setInputMethodCall("");
    setInputParameter("");
  };

  return (
    <div className="mt-4 max-w-full p-6 mx-auto rounded-lg">
      <h2
        className="text-lg font-semibold text-center"
        style={{ color: "#6E2A7F" }}
      >
        UJI PENGETAHUAN
      </h2>

      <form onSubmit={handleSubmit}>
        <p className="mt-2 text-gray-600">
          Lengkapilah kode berikut agar method Sapa() menerima satu parameter
          berupa string dan mencetak sapaan ke layar dengan format "Halo,
          [nama]!"...
        </p>

        <div className="p-4 mt-3 font-mono text-sm bg-gray-100 rounded-lg mb-4">
          <pre style={{ whiteSpace: "pre-wrap" }}>
            <code>
              {`public class Quiz\n{\n    public static void Main(string[] args)\n    {\n        `}
              <input
                type="text"
                value={inputMethodCall}
                onChange={(e) => setInputMethodCall(e.target.value)}
                className="ml-1 mr-1 border-2 border-gray-400 px-2 py-1 w-40 mb-2 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban ..."
              />
              {`("Andi");\n    }\n\n    static void Sapa(string nama)\n    {\n        Console.WriteLine("Halo, " + `}
              <input
                type="text"
                value={inputParameter}
                onChange={(e) => setInputParameter(e.target.value)}
                className="ml-1 mr-1 border-2 border-gray-400 px-2 py-1 w-40 mb-2 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban ..."
              />
              {`);\n    }\n}`}
            </code>
          </pre>
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
            Cek Jawaban
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

export default Quiz4;
