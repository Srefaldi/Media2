import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import nextIcon from "../../../assets/img/selanjutnya.png"; // Pastikan path ini sesuai
import backIcon from "../../../assets/img/kembali.png"; // Pastikan path ini sesuai
import { useOutletContext } from "react-router-dom";
import QuizParameterMethod from "./Quiz-bab6/Quiz4"; // Ganti dengan komponen kuis yang sesuai

const ParameterMethod = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigate = useNavigate();
  const { handleLessonComplete } = useOutletContext();

  const handleNext = () => {
    handleLessonComplete("/materi/bab6/parameter-method");
    window.scrollTo(0, 0);
    navigate("/materi/bab6/latihan-bab6"); // Ganti dengan rute topik berikutnya
  };

  const handleBack = () => {
    window.scrollTo(0, 0);
    navigate("/materi/bab6/method-tipe-data"); // Ganti dengan rute topik sebelumnya
  };

  const handleQuizComplete = () => {
    handleLessonComplete("/materi/bab6/latihan-bab6");
    setQuizCompleted(true); // Menandakan kuis selesai
  };

  return (
    <div className="mt-4 mb-4">
      <h1 className="mb-4 text-2xl font-bold text-center">BAB 6 - METHOD</h1>
      <h2 className="mt-2 mb-4 text-2xl font-bold">6.4 Parameter Method</h2>
      {/* Pendahuluan Materi */}
      <div className="p-4 mt-2 mb-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <p className="mb-4">
          Dalam pendeklarasian sebuah metode (method) kita dapat membuat suatu
          variabel untuk menerima nilai yang dikirimkan ke method yang kita
          sebut sebagai parameter.
        </p>
        <p className="mb-4">Perhatikan potongan kode program berikut:</p>
        <pre className="p-2 mb-4 font-mono bg-gray-100 rounded">
          <code>{`void test(string nama) 
{ 
    Console.WriteLine(nama); 
}`}</code>
        </pre>
        <p className="mb-4">
          Method di atas menggunakan parameter <code>nama</code> dengan tipe
          data <code>string</code> sebagai parameternya, kemudian menampilkan
          nilainya.
        </p>
        <p className="mb-4">
          Untuk mengisi nilai pada parameter <code>nama</code> dapat langsung
          saat pemanggilan method <code>Test()</code>, perhatikan kode berikut:
        </p>

        <p className="mb-2 font-bold">Cobalah kode program pada compiler :</p>
        <div className="flex justify-center mb-4">
          <iframe
            width="100%"
            height="475"
            src="https://dotnetfiddle.net/Widget/SwHxeK"
            frameborder="0"
          ></iframe>
        </div>
      </div>

      {/* Method dengan Multiple Parameter */}
      <div className="p-4 mt-2 mb-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <h3 className="mb-3 text-xl font-bold">
          Method dengan Multiple Parameter
        </h3>
        <p className="mb-4">
          Method dapat diisi dengan lebih dari satu parameter, sesuai dengan
          kebutuhan. Dalam pemanggilan method dengan parameter lebih dari satu,
          argumen harus dipisahkan dengan tanda koma <code>,</code>.
        </p>
        <p className="mb-4">
          Berikut contoh penggunaan method dengan parameter lebih dari satu,
          dalam kasus penghitungan luas persegi panjang:
        </p>
        <p className="mb-2 font-bold">Cobalah kode program pada compiler :</p>
        <div className="flex justify-center mb-4">
          <iframe
            width="100%"
            height="475"
            src="https://dotnetfiddle.net/Widget/SwHxeK"
            frameborder="0"
          ></iframe>
        </div>
      </div>

      {/* Kuis Parameter Method */}
      <QuizParameterMethod onComplete={handleQuizComplete} />

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

export default ParameterMethod;
