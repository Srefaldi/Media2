import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2
import nextIcon from "../../../assets/img/selanjutnya.png"; // Pastikan path ini sesuai
import backIcon from "../../../assets/img/kembali.png"; // Pastikan path ini sesuai
import QuizDeklarasiVariabel from "./Quiz-bab2/Quiz4"; // Pastikan path ini sesuai

const DeklarasiBanyak = () => {
  const navigate = useNavigate();
  const { handleLessonComplete } = useOutletContext();
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false); // Menyimpan status apakah kuis sudah benar

  const handleQuizComplete = (isPassed) => {
    setQuizCompleted(true);
    setQuizPassed(isPassed); // Set status kuis
  };

  const handleNext = () => {
    if (!quizPassed) {
      Swal.fire({
        title: "Oops!",
        text: "Anda harus menjawab kuis dengan benar sebelum melanjutkan.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }
    handleLessonComplete("/materi/bab2/deklarasi-inialisasi");
    window.scrollTo(0, 0);
    navigate("/materi/bab2/deklarasi-banyak");
  };

  const handleBack = () => {
    window.scrollTo(0, 0);
    navigate("/materi/bab2/kategori-variabel");
  };

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold text-center">BAB 2 - VARIABEL</h1>
      <h2 className="mt-2 text-2xl font-bold">
        2.4 Deklarasi dan Inisialisasi Variabel
      </h2>

      <div className="p-4 mt-1 mb-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <p className="mb-4">
          Deklarasi variabel adalah suatu proses yang dimaksudkan untuk
          memberitahu kompiler tentang nama variabel dan tipe data yang
          diwakili. Compiler mengalokasikan ruang memori berdasarkan tipe data
          yang diwakili.
        </p>
        <p className="mb-4">
          Inisialisasi variabel adalah proses pemberian nilai awal pada sebuah
          variabel yang dapat dilakukan saat deklarasi variabel atau pada baris
          kode lainnya.
        </p>
        <h3 className="mt-4 text-xl font-bold">Cara Deklarasi Variabel</h3>
        <p className="mb-4">
          Terdapat dua cara untuk mendeklarasikan variabel di C# :
        </p>
        <ul className="pl-6 list-decimal">
          <li>
            <strong className="list-decimal">Eksplisit:</strong> dengan
            menuliskan tipe data lalu diikuti nama variabel.
            <pre className="p-2 bg-gray-200 rounded">
              <code>int namaVariabel;</code>
            </pre>
          </li>
        </ul>
        <ul className="mt-2 mb-4 ml-20 list-disc">
          <li>
            <strong>Mendeklarasikan Variabel Kosong:</strong>
            <pre className="p-2 bg-gray-200 rounded">
              <code>
                string alamat;
                <br />
                int umur;
                <br />
                float beratBadan;
                <br />
                bool isMenikah;
              </code>
            </pre>
          </li>
          <li>
            <strong>Inisialisasi Variabel:</strong>
            <pre className="p-2 bg-gray-200 rounded">
              <code>
                alamat = "Handil Bakti No. 26";
                <br />
                umur = 18;
                <br />
                beratBadan = 49.5;
                <br />
                isMenikah = false;
              </code>
            </pre>
          </li>
          <li>
            <strong>Deklarasi Sekaligus Inisialisasi:</strong>
            <pre className="p-2 bg-gray-200 rounded">
              <code>
                string nama = "Sopia Refaldi";
                <br />
                int angkatan = 10;
                <br />
                float nilaiAkademik = 3.84;
              </code>
            </pre>
          </li>
        </ul>
        <ol className="pl-6 list-decimal" start={2}>
          <li>
            <strong>Implisit:</strong> apabila kita tidak mengetahui tipe data
            yang akan digunakan, maka membuat variabel dapat menggunakan kata
            kunci <code>var</code>.
            <pre className="p-2 bg-gray-200 rounded">
              <code>var namaVariabel = 10;</code>
            </pre>
            <p className="mb-2">
              Perlu diingat, untuk pembuatan variabel dengan <code>var</code>{" "}
              harus kita isi nilainya, karena kalau tidak akan terjadi error.
            </p>
            <p className="mb-2">
              Contoh penggunaan <code>var</code> dalam mendeklarasikan variabel:
            </p>
            <pre className="p-2 bg-gray-200 rounded">
              <code>
                var nama = "Sopia Refaldi";
                <br />
                var umur = 18;
                <br />
                var nilaiAkademik = 3.84;
              </code>
            </pre>
            <p className="mb-4">
              Dalam contoh di atas, kita menggunakan <code>var</code> untuk
              mendeklarasikan variabel <code>nama</code>, <code>umur</code>, dan{" "}
              <code>nilaiAkademik</code> tanpa perlu menyebutkan tipe datanya
              secara eksplisit.
            </p>
          </li>
        </ol>

        <h3 className="mt-4 text-xl font-bold">
          Mencetak Variabel Menggunakan Sintaks Print
        </h3>
        <p className="mb-4">
          Pada pemrograman, mencetak data ke layar merupakan salah satu fungsi
          dasar yang sangat penting untuk menampilkan hasil proses dari program
          kita. Dalam bahasa C#, kita dapat mencetak data yang tersimpan dalam
          variabel menggunakan sintaks print seperti
          <code>Console.WriteLine()</code>. Dengan cara ini, kita tidak hanya
          bisa menampilkan teks statis, tetapi juga nilai variabel seperti nama,
          angka, atau data lainnya. Materi ini akan membahas bagaimana mencetak
          variabel dengan cara yang mudah dan praktis.
        </p>
        <p className="mb-4 font-bold">Cobalah Kode Program Pada Compiler:</p>
        <iframe
          width="100%"
          height="400"
          src="https://dotnetfiddle.net/Widget/ZDE2kr"
          frameBorder="0"
        ></iframe>
      </div>

      {/* Kuis Deklarasi Variabel */}
      {!quizCompleted && (
        <QuizDeklarasiVariabel onComplete={handleQuizComplete} />
      )}

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

export default DeklarasiBanyak;
