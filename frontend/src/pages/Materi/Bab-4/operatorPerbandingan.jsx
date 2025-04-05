import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizComparison from "./Quiz-bab4/Quiz5"; // Import komponen kuis
import nextIcon from "../../../assets/img/selanjutnya.png"; // Pastikan path ini sesuai
import backIcon from "../../../assets/img/kembali.png"; // Pastikan path ini sesuai
import { useOutletContext } from "react-router-dom";

const OperatorPerbandingan = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigate = useNavigate();
  const { handleLessonComplete } = useOutletContext();

  const handleNext = () => {
    handleLessonComplete("/materi/bab4/operator-comparison");
    window.scrollTo(0, 0);
    navigate("/materi/bab4/operator-logika");
  };

  const handleBack = () => {
    window.scrollTo(0, 0);
    navigate("/materi/bab4/operator-assignment");
  };

  const handleQuizComplete = () => {
    setQuizCompleted(true);
  };

  return (
    <div className="mt-4 mb-4">
      <h1 className="mb-4 text-2xl font-bold text-center">BAB 4 - OPERATOR</h1>
      <h2 className="mt-2 mb-4 text-2xl font-bold">Operator Perbandingan</h2>

      <div className="mt-2 p-4 text-justify text-gray-700 bg-white rounded-lg shadow-md mb-4">
        <p className="mb-2">
          Operator Comparison (Perbandingan) adalah operator untuk membandingkan
          dua buah nilai. Operator ini juga dikenal dengan operator relasi.
          Operator relasional digunakan untuk membandingkan dua buah nilai,
          apakah nilai tersebut sama besar, lebih kecil, lebih besar, dan
          lain-lain. Hasil dari operator relasional ini adalah boolean{" "}
          <code>true</code> atau <code>false</code>.
        </p>
        <p className="mb-2">
          Berikut adalah daftar <strong>Operator Relasional</strong> dalam C#:
        </p>
        <p className="text-gray-600 text-sm text-center italic">
          Tabel 4.5 Tabel daftar operator perbandingan
        </p>
        <div className="flex justify-center p-4 mt-2 mb-4">
          <table className="border border-gray-300 text-center">
            <thead className="bg-[#68217A] text-white text-center">
              <tr>
                <th className="p-2 text-white border border-gray-300">
                  Operator
                </th>
                <th className="p-2 text-white border border-gray-300">
                  Keterangan
                </th>
                <th className="p-2 text-white border border-gray-300">
                  Contoh
                </th>
                <th className="p-2 text-white border border-gray-300">Hasil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-gray-300">==</td>
                <td className="p-2 border border-gray-300">Sama dengan</td>
                <td className="p-2 border border-gray-300">5 == 5</td>
                <td className="p-2 border border-gray-300">true</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">!=</td>
                <td className="p-2 border border-gray-300">
                  Tidak sama dengan
                </td>
                <td className="p-2 border border-gray-300">5 != 5</td>
                <td className="p-2 border border-gray-300">false</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">></td>
                <td className="p-2 border border-gray-300">Lebih besar</td>
                <td className="p-2 border border-gray-300">5 > 6</td>
                <td className="p-2 border border-gray-300">false</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">&lt;</td>
                <td className="p-2 border border-gray-300">Lebih kecil</td>
                <td className="p-2 border border-gray-300">5 &lt; 6</td>
                <td className="p-2 border border-gray-300">true</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">>=</td>
                <td className="p-2 border border-gray-300">
                  Lebih besar atau sama dengan
                </td>
                <td className="p-2 border border-gray-300">5 >= 3</td>
                <td className="p-2 border border-gray-300">true</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">&lt;=</td>
                <td className="p-2 border border-gray-300">
                  Lebih kecil atau sama dengan
                </td>
                <td className="p-2 border border-gray-300">5 &lt;= 5</td>
                <td className="p-2 border border-gray-300">true</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-2 font-bold">
          Cobalah kode program pada compiler C# :
        </p>
        <div className="flex justify-center mb-4">
          <iframe
            width="100%"
            height="475"
            src="https://dotnetfiddle.net/Widget/mb8Zdg"
            frameborder="0"
          ></iframe>
        </div>
      </div>

      {/* Kuis */}
      {!quizCompleted && <QuizComparison onComplete={handleQuizComplete} />}

      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handleBack}
          className="flex items-center px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
        >
          <img src={backIcon} alt="Kembali" className="w-5 h-5 mr-2" />
          Kembali
        </button>
        {quizCompleted && (
          <button
            onClick={handleNext}
            className="flex items-center justify-between"
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
            <span>Selanjutnya</span>
            <img src={nextIcon} alt="Selanjutnya" className="w-5 h-5 ml-2" />
          </button>
        )}
      </div>
    </div>
  );
};

export default OperatorPerbandingan;
