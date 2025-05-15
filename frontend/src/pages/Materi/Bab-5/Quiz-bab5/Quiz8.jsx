import React, { useState } from "react";
import Swal from "sweetalert2";

const Quiz8 = ({ onComplete }) => {
  const [inputIteration, setInputIteration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fungsi untuk normalisasi jawaban
    const normalizeAnswer = (answer) => {
      return answer.replace(/\s+/g, "").toLowerCase();
    };

    // Normalisasi jawaban pengguna dan jawaban yang benar
    const normalizedInputIteration = normalizeAnswer(inputIteration);
    const correctIteration = "for (int j = 0; j < 2; j++)";
    const normalizedCorrectIteration = normalizeAnswer(correctIteration);

    // Cek jawaban (case insensitive dan ignore spaces)
    if (normalizedInputIteration === normalizedCorrectIteration) {
      // Jika benar, simpan dengan format yang benar (kapitalisasi sesuai jawaban benar)
      const formattedAnswer = inputIteration.replace(/\s+/g, " ").trim();
      const correctFormatted = correctIteration;
      
      // Jika hanya masalah kapitalisasi, gunakan format yang benar
      if (normalizeAnswer(formattedAnswer) === normalizeAnswer(correctFormatted)) {
        setInputIteration(correctFormatted);
      }

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
    <div className="max-w-full p-6 mx-auto mt-4 rounded-lg">
      <h2
        className="text-lg font-semibold text-center"
        style={{ color: "#6E2A7F" }}
      >
        UJI PENGETAHUAN
      </h2>

      <form onSubmit={handleSubmit}>
        <p className="mt-2 text-gray-600">
          Lengkapilah bagian kode yang kosong (tanda // ...) agar program
          menampilkan seluruh kombinasi pasangan bilangan dari 0 sampai 1, dalam
          bentuk i j:
        </p>

        <div className="p-4 mt-3 mb-4 font-mono text-sm bg-gray-100 rounded-lg">
          <pre style={{ whiteSpace: "pre-wrap" }}>
            <code>
              {`public class Quiz\n{\n    public static void Main()\n    {\n        for (int i = 0; i < 2; i++)\n        {\n            `}
              <input
                type="text"
                value={inputIteration}
                onChange={(e) => setInputIteration(e.target.value)}
                className="border-2 border-gray-400 px-2 py-1 mb-2 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban..."
              />
              {`\n            {\n                Console.WriteLine(i + " " + j);\n            }\n        }\n    }\n}`}
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

export default Quiz8;