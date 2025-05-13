import React, { useState } from "react";
import Swal from "sweetalert2";

const Quiz3 = ({ onComplete }) => {
  const [inputMain, setInputMain] = useState("");
  const [inputReturn, setInputReturn] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const correctMain = "PerkalianTigaAngka()";
    const correctReturn = "return hasil;";

    if (
      inputMain.trim() === correctMain &&
      inputReturn.trim() === correctReturn
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
      setInputMain("");
      setInputReturn("");
      Swal.fire({
        title: "Jawaban Salah!",
        text: "Baca Kembali Materi dan Coba Lagi",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleReset = () => {
    setInputMain("");
    setInputReturn("");
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
          Lengkapilah kode program berikut agar method PerkalianTigaAngka()
          dapat mengembalikan hasil perkalian tiga angka bertipe int dan
          mencetaknya ke layar:
        </p>

        <div className="p-4 mt-3 font-mono text-sm bg-gray-100 rounded-lg mb-4">
          <pre style={{ whiteSpace: "pre-wrap" }}>
            <code>
              {`public class BelajarCSharp\n{\n    public static void Main(string[] args)\n    {\n        Console.WriteLine(`}
              <input
                type="text"
                value={inputMain}
                onChange={(e) => setInputMain(e.target.value)}
                className="ml-1 mr-1 border-2 border-gray-400 px-2 py-1 w-40 mb-2 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban ..."
              />
              {`);\n    }\n\n    static int PerkalianTigaAngka()\n    {\n        int a = 2, b = 3, c = 4;\n        int hasil = a * b * c;\n        `}
              <input
                type="text"
                value={inputReturn}
                onChange={(e) => setInputReturn(e.target.value)}
                className="ml-1 mr-1 border-2 border-gray-400 px-2 py-1 w-40 mb-2 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban ..."
              />
              {`;\n    }\n}`}
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

export default Quiz3;
