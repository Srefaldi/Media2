import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Swal from "sweetalert2";
import nextIcon from "../../../assets/img/selanjutnya.png";
import backIcon from "../../../assets/img/kembali.png";
import iconBook from "../../../assets/img/book.png";
import iconTujuan from "../../../assets/img/tujuan.png";
import iconKonten from "../../../assets/img/konten.png";
import QuizSintaksInput from "./Quiz-bab2/Quiz7";
import image1 from "./img-bab2/sintaks-input1.png";
import image2 from "./img-bab2/sintaks-input2.png";
import image3 from "./img-bab2/sintaks-input3.png";
import image4 from "./img-bab2/sintaks-input4.png";
import image5 from "./img-bab2/sintaks-input5.png";
import image6 from "./img-bab2/sintaks-input6.png";

const SintaksInput = () => {
  const navigate = useNavigate();
  const { handleLessonComplete } = useOutletContext();
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false);

  const handleQuizComplete = (isPassed) => {
    handleLessonComplete("/materi/bab2/latihan-bab2");
    setQuizCompleted(true);
    setQuizPassed(isPassed);
  };

  const handleNext = () => {
    handleLessonComplete("/materi/bab2/sintaks-input");
    window.scrollTo(0, 0);
    navigate("/materi/bab2/latihan-bab2");
  };

  const handleBack = () => {
    window.scrollTo(0, 0);
    navigate("/materi/bab2/variabel-konstanta");
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold text-center">BAB 2 - VARIABEL</h1>

      {/* Pendahuluan Materi */}
      <div className="w-full mb-2 border border-gray-300 rounded-lg shadow-md">
        <h3
          className="flex items-center p-4 font-bold text-white cursor-pointer"
          style={{ backgroundColor: "#68217A" }}
        >
          <img src={iconBook} alt="Icon" className="w-8 h-8 mr-2" />
          PENDAHULUAN MATERI
          <span className="ml-2">▼</span>
        </h3>
        <div className="p-4 text-justify text-gray-700 bg-white rounded-b-lg">
          <p>
            Pada bab ini, kita akan mempelajari tentang sintaks input dalam
            bahasa pemrograman C#. Sintaks input memungkinkan program untuk
            menerima data dari pengguna, yang kemudian dapat diproses untuk
            menghasilkan output. Memahami cara menggunakan fungsi input seperti{" "}
            <code>ReadLine()</code>,<code>Read()</code>, dan{" "}
            <code>ReadKey()</code> sangat penting untuk membangun program
            interaktif. Setelah mempelajari materi ini, diharapkan pembaca dapat
            menggunakan sintaks input dengan benar dan memahami konsep
            penyimpanan data input ke dalam variabel.
          </p>
        </div>
      </div>

      {/* Tujuan Pembelajaran */}
      <div className="w-full mb-2 border border-gray-300 rounded-lg shadow-md">
        <h3
          className="flex items-center p-4 font-bold text-white cursor-pointer"
          style={{ backgroundColor: "#68217A" }}
        >
          <img src={iconTujuan} alt="Icon" className="w-8 h-8 mr-2" />
          TUJUAN PEMBELAJARAN
          <span className="ml-2">▼</span>
        </h3>
        <ul className="p-4 pl-6 text-justify text-gray-700 list-disc bg-white rounded-b-lg">
          <li>Mampu memahami fungsi dan penggunaan sintaks input dalam C#</li>
          <li>
            Dapat menggunakan <code>ReadLine()</code>, <code>Read()</code>, dan{" "}
            <code>ReadKey()</code> dengan benar
          </li>
          <li>Memahami cara menyimpan data input ke dalam variabel</li>
          <li>
            Mampu menggunakan placeholder dan string interpolation untuk
            menampilkan output
          </li>
        </ul>
      </div>

      {/* Konten Materi */}
      <div className="w-full mb-2 border border-gray-300 rounded-lg shadow-md">
        <h3
          className="flex items-center p-4 font-bold text-white cursor-pointer"
          style={{ backgroundColor: "#68217A" }}
        >
          <img src={iconKonten} alt="Icon" className="w-8 h-8 mr-2" />
          KONTEN MATERI
          <span className="ml-2">▼</span>
        </h3>
        <ul className="p-4 pl-6 text-justify text-gray-700 list-none bg-white rounded-b-lg">
          <li>2.1 Pengertian Variabel</li>
          <li>2.2 Penamaan Variabel</li>
          <li>2.3 Kategori Variabel</li>
          <li>2.4 Deklarasi dan Inisialisasi Variabel</li>
          <li>2.5 Deklarasi Banyak Variabel</li>
          <li>2.6 Variabel Konstanta</li>
          <li>2.7 Sintaks Input</li>
          <li>Rangkuman</li>
        </ul>
      </div>

      {/* Sintaks Input */}
      <div className="p-4 mb-6 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">2.7 Sintaks Input</h2>

        <p className="mt-4 text-xl font-bold">
          Memasukan Data Menggunakan Sintaks Input
        </p>
        <p className="mt-1 mb-6">
          Untuk memasukan data, kita dapat menggunakan fungsi{" "}
          <code>Read()</code>, <code>ReadKey()</code>, dan{" "}
          <code>ReadLine()</code>. Fungsi <code>ReadLine()</code> akan membaca
          teks yang kita ketik dalam satu baris (teks). Fungsi{" "}
          <code>Read()</code> dan <code>ReadKey()</code> akan membaca satu huruf
          saja dari teks yang kita ketik.
          <code>Read()</code> akan menghasilkan tipe data <code>int</code>{" "}
          sedangkan <code>ReadKey()</code> akan menghasilkan data dengan tipe{" "}
          <code>character</code>.
        </p>
        <h3 className="mt-4 mb-2 font-bold">
          Cobalah Kode Program Pada Compiler:
        </h3>
        <iframe
          width="100%"
          height="475"
          src="https://dotnetfiddle.net/Widget/wAhlLN"
          frameBorder="0"
        ></iframe>
        <p className="mt-4 mb-2 italic">
          Dari program di atas, maka berikut hasilnya:
        </p>

        <figure className="p-0 md:p-4 my-3 md:my-0 text-center w-full mt-4">
          <img
            src={image1}
            alt="Gambar 2.3 Output program"
            className="w-full max-w-md mx-auto rounded-lg"
          />
          <div className="mt-3">
            <figcaption className="text-gray-600 text-sm sm:text-base">
              Gambar 2.3. Output program
            </figcaption>
          </div>
        </figure>

        <p className="mt-4">
          Jika kita perhatikan kode program di atas, di sana kita menggunakan
          variabel <code>nama</code> untuk menyimpan teks yang diinputkan.
        </p>

        <figure className="p-0 md:p-4 my-3 md:my-0 text-center w-full mt-4">
          <img
            src={image2}
            alt="Gambar 2.4 Variabel nama dari kode program"
            className="w-full max-w-md mx-auto rounded-lg"
          />
          <div className="mt-3">
            <figcaption className="text-gray-600 text-sm sm:text-base">
              Gambar 2.4. Variabel nama dari kode program
            </figcaption>
          </div>
        </figure>

        <p className="mt-4">Kemudian menampilkannya dengan cara seperti ini:</p>

        <figure className="p-0 md:p-4 my-3 md:my-0 text-center w-full mt-4">
          <img
            src={image3}
            alt="Gambar 2.5 Kode perintah cetak dari kode program"
            className="w-full max-w-md mx-auto rounded-lg"
          />
          <div className="mt-3">
            <figcaption className="text-gray-600 text-sm sm:text-base">
              Gambar 2.5. Kode perintah cetak dari kode program
            </figcaption>
          </div>
        </figure>

        <p className="mt-4">
          Selain dengan cara di atas, kita dapat menggunakan sebuah placeholder
          untuk menampilkan sebuah variabel seperti ini:
        </p>

        <figure className="p-0 md:p-4 my-3 md:my-0 text-center w-full mt-4">
          <img
            src={image4}
            alt="Gambar 2.6 Cara menggunakan placeholder"
            className="w-full max-w-md mx-auto rounded-lg"
          />
          <div className="mt-3">
            <figcaption className="text-gray-600 text-sm sm:text-base">
              Gambar 2.6. Cara menggunakan placeholder
            </figcaption>
          </div>
        </figure>

        <p className="mt-4">
          Simbol <code>{`{0}`}</code> pada baris kode di atas adalah sebuah
          placeholder yang nantinya akan digantikan dengan isi dari variabel.
        </p>

        <p className="mt-4">
          Selain itu terdapat juga teknik yang disebut dengan string
          interpolation, yang menggunakan sebuah placeholder dan diawali dengan
          simbol <code>$</code> seperti ini:
        </p>

        <figure className="p-0 md:p-4 my-3 md:my-0 text-center w-full mt-4">
          <img
            src={image5}
            alt="Gambar 2.7 Cara menggunakan string interpolation"
            className="w-full max-w-md mx-auto rounded-lg"
          />
          <div className="mt-3">
            <figcaption className="text-gray-600 text-sm sm:text-base">
              Gambar 2.7. Cara menggunakan string interpolation
            </figcaption>
          </div>
        </figure>

        <p className="mt-4">
          Mengapa harus menggunakan variabel? Jika kita lihat dari konsep dasar
          sebuah program komputer, di sana terdapat input, process, dan output.
        </p>

        <figure className="p-0 md:p-4 my-3 md:my-0 text-center w-full mt-4">
          <img
            src={image6}
            alt="Gambar 2.8 Konsep program komputer"
            className="w-full max-w-md mx-auto rounded-lg"
          />
          <div className="mt-3">
            <figcaption className="text-gray-600 text-sm sm:text-base">
              Gambar 2.8. Konsep program komputer
            </figcaption>
          </div>
        </figure>

        <p className="mt-4">
          Variabel berperan sebagai penampung data yang akan kita proses di
          dalam sebuah program. Pada contoh program sebelumnya, kita membutuhkan
          sebuah variabel karena kita akan menampilkannya ke layar.
        </p>
      </div>

      {/* Kuis Sintaks Input */}
      {!quizCompleted && <QuizSintaksInput onComplete={handleQuizComplete} />}

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

export default SintaksInput;
