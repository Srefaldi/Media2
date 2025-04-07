import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import nextIcon from "../../../assets/img/selanjutnya.png"; // Pastikan path ini sesuai
import backIcon from "../../../assets/img/kembali.png"; // Pastikan path ini sesuai
import { useOutletContext } from "react-router-dom";
import QuizKedua from "./Quiz-bab5/Quiz8";

const PernyataanBersarang = () => {
  const [quiz2Completed, setQuiz2Completed] = useState(false);
  const navigate = useNavigate();
  const { handleLessonComplete } = useOutletContext();

  const handleNext = () => {
    handleLessonComplete("/materi/bab5/perulangan-bersarang");
    window.scrollTo(0, 0);
    navigate("/materi/bab5/latihan-bab5"); // Ganti dengan rute topik berikutnya
  };

  const handleBack = () => {
    window.scrollTo(0, 0);
    navigate("/materi/bab5/pernyataan-break-continue"); // Ganti dengan rute topik sebelumnya
  };

  const handleQuiz2Complete = () => {
    setQuiz2Completed(true); // Menandakan Quiz2 selesai
  };

  return (
    <div className="mt-4 mb-4">
      <h1 className="mb-4 text-2xl font-bold text-center">
        BAB 5 - KONTROL ALUR
      </h1>
      <h2 className="mt-2 mb-4 text-2xl font-bold">5.6 Perulangan Bersarang</h2>

      <div className="p-4 mt-2 mb-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <p className="mb-3 text-xl font-bold">Perulangan Bersarang</p>
        <p className="mb-3">
          Perulangan bersarang (nested loop) adalah{" "}
          <strong>perulangan yang berada di dalam perulangan lain.</strong>
          Dalam C#, perulangan bersarang{" "}
          <strong>for, while, dan do while</strong> diperbolehkan dan kita juga
          <strong>
            dapat meletakkan perulangan bersarang di dalam jenis perulangan lain
          </strong>
          , seperti dalam perulangan <strong>for</strong> kita diperbolehkan
          untuk meletakkan perulangan <strong>while</strong> bersarang.
        </p>
      </div>

      <div className="p-4 mt-2 mb-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <p className="mb-3 text-xl font-bold">Perulangan for Bersarang</p>
        <p className="mb-3">
          Fungsi dari perulangan for pada dasarnya digunakan ketika berapa kali
          pernyataan perulangan akan dieksekusi dengan jumlah yang diketahui
          sebelumnya.{" "}
          <strong>Perulangan bersarang dari for diperbolehkan</strong>, yang
          berarti kita dapat menggunakan perulangan for di dalam perulangan
          lainnya.
        </p>
        <p className="mb-2 font-bold">
          Format umum atas perulangan for bersarang adalah :
        </p>
        <pre className="p-2 mb-4 font-mono bg-gray-100 rounded">
          <code>{`for (inisialisasi; kondisi; iterasi) 
{ 
    for (inisialisasi; kondisi; iterasi) 
    { 
        runtun statemen; 
    } 
}`}</code>
        </pre>
        <p className="mb-2 font-bold">Cobalah kode program pada compiler :</p>
        <div className="flex justify-center mb-4">
          <iframe
            width="100%"
            height="475"
            src="https://dotnetfiddle.net/Widget/WPfbcE"
            frameborder="0"
          ></iframe>
        </div>
      </div>

      <div className="p-4 mt-2 mb-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <p className="mb-3 text-xl font-bold">Perulangan while Bersarang</p>
        <p className="mb-3">
          Dalam perulangan while, kondisi pengujian diberikan pada awal
          perulangan, dan semua pernyataan dieksekusi bernilai true dan ketika
          sampai kondisi kondisi <strong>boolean</strong> yang menjadi false,
          kontrol akan keluar dari perulangan while.{" "}
          <strong>Perulangan while bersarang diperbolehkan</strong>, yang
          berarti Anda dapat menggunakan perulangan while di dalam perulangan
          lainnya. Namun, tidak disarankan untuk menggunakan perulangan while
          bersarang karena sulit untuk di-maintaince dan di-debug.
        </p>
        <p className="mb-2 font-bold">
          Format umum atas perulangan while bersarang adalah :
        </p>
        <pre className="p-2 mb-4 font-mono bg-gray-100 rounded">
          <code>{`while (kondisi) 
{ 
    runtun statemen; 

    while (kondisi) 
    { 
        runtun statemen; 
    } 
}`}</code>
        </pre>
        <p className="mb-2 font-bold">Cobalah kode program pada compiler :</p>
        <div className="flex justify-center mb-4">
          <iframe
            width="100%"
            height="475"
            src="https://dotnetfiddle.net/Widget/9PtXZV"
            frameborder="0"
          ></iframe>
        </div>
      </div>

      <div className="p-4 mt-2 mb-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <p className="mb-3 text-xl font-bold">Perulangan do-while Bersarang</p>
        <p className="mb-3">
          Dalam C#, perulangan do while mirip dengan perulangan while dengan
          satu-satunya perbedaan yaitu, Ia memeriksa kondisi setelah
          mengeksekusi pernyataan.{" "}
          <strong>Perulangan do-while bersarang diperbolehkan</strong>, yang
          berarti Anda dapat menggunakan perulangan do-while di dalam perulangan
          lainnya.
        </p>
        <p className="mb-2 font-bold">
          Format umum atas perulangan do-while bersarang adalah :
        </p>
        <pre className="p-2 mb-4 font-mono bg-gray-100 rounded">
          <code>{`do 
{ 
    runtun statemen; 

    do 
    { 
        runtun statemen; 
    } while (kondisi); 
} while (kondisi);`}</code>
        </pre>
        <p className="mb-2 font-bold">Cobalah kode program pada compiler :</p>
        <div className="flex justify-center mb-4">
          <iframe
            width="100%"
            height="475"
            src="https://dotnetfiddle.net/Widget/LhMiDU"
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

export default PernyataanBersarang;
