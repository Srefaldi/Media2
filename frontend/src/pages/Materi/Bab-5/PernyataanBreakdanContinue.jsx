import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import nextIcon from "../../../assets/img/selanjutnya.png"; // Pastikan path ini sesuai
import backIcon from "../../../assets/img/kembali.png"; // Pastikan path ini sesuai
import { useOutletContext } from "react-router-dom";

import QuizKedua from "./Quiz-bab5/Quiz7";

const PernyataanBreakdanContinue = () => {
  const [quiz2Completed, setQuiz2Completed] = useState(false);
  const navigate = useNavigate();
  const { handleLessonComplete } = useOutletContext();

  const handleNext = () => {
    handleLessonComplete("/materi/bab5/pernyataan-break-continue");
    window.scrollTo(0, 0);
    navigate("/materi/bab5/perulangan-bersarang"); // Ganti dengan rute topik berikutnya
  };

  const handleBack = () => {
    window.scrollTo(0, 0);
    navigate("/materi/bab5/pernyataan-perulangan"); // Ganti dengan rute topik sebelumnya
  };

  const handleQuiz2Complete = () => {
    handleLessonComplete("/materi/bab5/perulangan-bersarang");
    setQuiz2Completed(true); // Menandakan Quiz2 selesai
  };

  return (
    <div className="mt-4 mb-4">
      <h1 className="mb-4 text-2xl font-bold text-center">
        BAB 5 - KONTROL ALUR
      </h1>
      <h2 className="mt-2 mb-4 text-2xl font-bold">
        5.5 Pernyataan Break dan Continue
      </h2>
      <p className="mt-2">
        <strong>Break dan Continue</strong> adalah konsep yang sangat mendasar
        dari bahasa pemrograman apapun dan didukung oleh hampir semua bahasa
        populer, seperti C++, C#, Java, JavaScript, dll. breakmaupun continue
        merupakan statement dalam kategori control flow. Statement ini
        berkontribusi{" "}
        <strong>untuk mengatur alur kontrol dari sebuah program.</strong>
      </p>
      <div className="p-4 mt-2 mb-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <p className="mb-3 text-xl font-bold">Pernyataan Break</p>
        <p className="mb-3">
          Pernyataan break adalah salah satu statement dalam control flow yang
          berfungsi untuk menghentikan atau mengakhiri iterasi dan proses
          perulangan (loop) atau pengkondisian pada program.
        </p>
        <p className="mb-3 font-bold">
          Pernyataan break dapat digunakan dalam skenario berikut:
        </p>
        <ul className="mt-2 text-justify text-gray-600 list-disc list-inside">
          <li className="mb-2 ml-4">
            Perulangan for, foreach, while, dan do while.
          </li>
          <li className="mb-2 ml-4">Pengkondisian switch case.</li>
        </ul>
        <p className="mb-2 font-bold">Cobalah kode program pada compiler :</p>
        <div className="flex justify-center mb-4">
          <iframe
            width="100%"
            height="475"
            src="https://dotnetfiddle.net/Widget/KxCA7Q"
            frameborder="0"
          ></iframe>
        </div>
      </div>

      <div className="p-4 mt-2 mb-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <p className="mb-3 text-xl font-bold">Pernyataan Continue</p>
        <p className="mb-3">
          Pernyataan continue tidak sama dengan pernyataan break. Pernyataan
          break menghentikan perulangan atau pengkondisian sedangkan continue
          melewatkan eksekusi iterasi saat ini saja dan itu tidak memutus
          perulangan atau pengkondisian yaitu melewati kontrol ke iterasi
          berikutnya dari perulangan for, while, do while, atau foreach setiap
          pernyataan di mana itu muncul.
        </p>
        <p className="mb-2 font-bold">Cobalah kode program pada compiler :</p>
        <div className="flex justify-center mb-4">
          <iframe
            width="100%"
            height="475"
            src="https://dotnetfiddle.net/Widget/6TIHAK"
            frameborder="0"
          ></iframe>
        </div>
      </div>

      {/* Kuis Kedua */}
      <QuizKedua onComplete={handleQuiz2Complete} />

      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handleBack}
          className="flex items-center px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
        >
          <img src={backIcon} alt="Kembali" className="w-5 h-5 mr-2" />
          Kembali
        </button>
        {quiz2Completed && (
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

export default PernyataanBreakdanContinue;
