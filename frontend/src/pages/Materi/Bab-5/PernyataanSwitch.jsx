import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import nextIcon from "../../../assets/img/selanjutnya.png"; // Pastikan path ini sesuai
import backIcon from "../../../assets/img/kembali.png"; // Pastikan path ini sesuai
import { useOutletContext } from "react-router-dom";
import QuizSwitch from "./Quiz-bab5/Quiz4";
const PernyataanSwitch = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigate = useNavigate();
  const { handleLessonComplete } = useOutletContext();

  const handleNext = () => {
    handleLessonComplete("/materi/bab5/pernyataan-switch");
    window.scrollTo(0, 0);
    navigate("/materi/bab5/pernyataan-perulangan"); // Ganti dengan rute topik berikutnya
  };

  const handleBack = () => {
    window.scrollTo(0, 0);
    navigate("/materi/bab5/pernyataan-if-else"); // Ganti dengan rute topik sebelumnya
  };

  const handleQuizComplete = () => {
    setQuizCompleted(true);
  };

  return (
    <div className="mt-4 mb-4">
      <h1 className="mb-4 text-2xl font-bold text-center">
        BAB 5 - KONTROL ALUR
      </h1>
      <h2 className="mt-2 mb-4 text-2xl font-bold">5.3 Pernyataan Switch</h2>

      <div className="p-4 mt-2 mb-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <p className="mb-2">
          Selain menggunakan if untuk melakukan seleksi dapat menggunakan
          switch. Meskipun sederet statement if bersarang dapat melakukan
          pengujian cabang jamak, dalam banyak situasi statement switch
          merupakan pendekatan yang lebih efisien.
        </p>
        <p className="mb-2">
          Switch statement memastikan persamaan antara sebuah nilai dengan nilai
          - nilai yang ada pada case di dalam sebuah switch. Apabila nilai sama,
          maka operasi akan dieksekusi.{" "}
          <strong>Format umum atas switch statement, seperti berikut :</strong>
        </p>
        <pre className="p-2 mb-4 font-mono bg-gray-100 rounded">
          <code>{`switch (ekspresi) 
{ 
    case konstanta1: 
        runtun statemen; 
        break; 
    case konstanta2: 
        runtun statemen; 
        break; 
    case konstanta3: 
        runtun statemen; 
        break; 
    . . . 
  default: 
        runtun statemen; 
        break; 
} `}</code>
        </pre>
        <p className="mb-2">
          Ekspresi dalam <strong>switch </strong>harus bertipe integer, seperti
          <strong>
            char, byte, short atau int, bertipe enumerasi, atau bertipe string
          </strong>
          . Konstanta case harus bertipe yang kompatibel dengan ekspresi. Dua
          konstanta <strong>case</strong> di dalam <strong>switch </strong>yang
          sama tidak boleh memiliki nilai identik.
        </p>
        <p className="mb-2">
          Runtun statemen dalam <strong>default </strong>akan dieksekusi jika
          tidak ada konstanta <strong>case </strong>yang cocok dengan ekspresi.
          <strong> default </strong>bersifat opsional (sama seperti{" "}
          <strong>else </strong>pada
          <strong> if </strong>); jika tidak ada, maka tidak ada aksi yang
          dieksekusi bila semua konstanta <strong>case </strong>tidak cocok
          dengan ekspresi.
        </p>
        <p className="mb-2">
          Ketika kecocokan ditemukan, statemen-statemen yang berkaitan dengan
          <stron>case </stron>tersebut akan dieksekusi sampai ditemukannya
          statemen <strong>break</strong>.
        </p>
        <p className="mb-2">
          Berikut contoh program yang mendemonstrasikan switch:
        </p>
        <p className="mb-2 font-bold">Cobalah kode program pada complier :</p>
        <div className="flex justify-center mb-4">
          <iframe
            width="100%"
            height="475"
            src="https://dotnetfiddle.net/Widget/AS9Wjm"
            frameborder="0"
          ></iframe>
        </div>
        <h3 className="font-bold">Switch Statement Bersarang</h3>
        <p className="mb-2">
          Pada sebuah pemrograman sangat memungkinkan untuk memiliki sebuah
          <strong> switch </strong>yang merupakan bagian dari statemen{" "}
          <strong>switch </strong> sebelah luar/lainnya. Konstanta{" "}
          <strong>case </strong>dari <strong>switch </strong> sebelah dalam dan
          sebelah luar dapat memiliki nilai sama dan tidak menimbulkan konflik
          penamaan.
        </p>
        <p className="mb-2">
          Berikut contoh potongan kode dari statemen switch bersarang:
        </p>
        <p className="mb-2 font-bold">Cobalah kode program pada complier :</p>
        <div className="flex justify-center mb-4">
          <iframe
            width="100%"
            height="475"
            src="https://dotnetfiddle.net/Widget/idXrJF"
            frameborder="0"
          ></iframe>
        </div>
      </div>

      {/* Kuis */}
      {!quizCompleted && <QuizSwitch onComplete={handleQuizComplete} />}

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

export default PernyataanSwitch;
