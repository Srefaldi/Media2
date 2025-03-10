import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Quiz from "./Quiz-bab1/Quiz1"; // Pastikan path ini sesuai
// import alur from "./img-bab1/alur.png"; // Gambar yang digunakan
// import logoc from "./img-bab1/logo.png"; // Gambar yang digunakan
import nextIcon from "../../../assets/img/selanjutnya.png";
import backIcon from "../../../assets/img/kembali.png";

const TipeData = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isPendahuluanOpen, setPendahuluanOpen] = useState(false);
  const [isTujuanOpen, setTujuanOpen] = useState(false);
  const [isKontenOpen, setKontenOpen] = useState(false);
  const navigate = useNavigate();

  const handleQuizComplete = () => {
    setQuizCompleted(true);
  };

  const handleNext = () => {
    navigate("/materi/bab2/penamaan-variabel");
  };

  const togglePendahuluan = () => setPendahuluanOpen(!isPendahuluanOpen);
  const toggleTujuan = () => setTujuanOpen(!isTujuanOpen);
  const toggleKonten = () => setKontenOpen(!isKontenOpen);

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold text-center">BAB 2 - VARIABEL</h1>

      {/* Pendahuluan Materi */}
      <div>
        <h3
          className="flex items-center font-bold cursor-pointer"
          onClick={togglePendahuluan}
        >
          PENDAHULUAN MATERI
          <span className="ml-2">{isPendahuluanOpen ? "▲" : "▼"}</span>
        </h3>
        {isPendahuluanOpen && (
          <div className="p-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
            <p>
              Pada bab ini, kita akan mempelajari tentang variabel dalam bahasa
              pemrograman C#. Variabel merupakan elemen penting dalam
              pemrograman yang digunakan untuk menyimpan data. Memahami cara
              mendeklarasikan dan menggunakan variabel dengan benar akan
              membantu dalam pengembangan program yang efisien. Setelah
              mempelajari materi ini, diharapkan pembaca dapat membedakan antara
              variabel dan konstanta, serta menghindari kesalahan dalam penamaan
              variabel.
            </p>
          </div>
        )}
      </div>

      {/* Tujuan Pembelajaran */}
      <div>
        <h3
          className="flex items-center font-bold cursor-pointer"
          onClick={toggleTujuan}
        >
          TUJUAN PEMBELAJARAN
          <span className="ml-2">{isTujuanOpen ? "▲" : "▼"}</span>
        </h3>
        {isTujuanOpen && (
          <ul className="p-4 pl-6 text-justify text-gray-700 list-disc bg-white rounded-lg shadow-md">
            <li>Mampu memahami konsep variabel data dan klasifikasinya</li>
            <li>
              Dapat memahami konsep variabel serta dapat mendeklarasikan dan
              menginisialisasikannya
            </li>
            <li>Mampu menggunakan fungsi input pada pemrograman</li>
            <li>Dapat menghindari kesalahan dalam penulisan variabel</li>
          </ul>
        )}
      </div>

      {/* Konten Materi */}
      <div>
        <h3
          className="flex items-center font-bold cursor-pointer"
          onClick={toggleKonten}
        >
          KONTEN MATERI
          <span className="ml-2">{isKontenOpen ? "▲" : "▼"}</span>
        </h3>
        {isKontenOpen && (
          <ul className="p-4 pl-6 text-justify text-gray-700 list-decimal bg-white rounded-lg shadow-md">
            <li>2.1 Pengertian Variabel</li>
            <li>2.2 Penamaan Variabel</li>
            <li>2.3 Tipe Data dalam Variabel</li>
            <li>2.4 Variabel dan Konstanta</li>
            <li>2.5 Rangkuman</li>
          </ul>
        )}
      </div>

      {/* Pengertian Variabel */}
      <div>
        <h2 className="text-2xl font-bold">2.1 Pengertian Variabel</h2>
        <div className="p-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
          <p>
            Variabel adalah suatu data yang nilainya dapat berubah-ubah.
            Variabel sangat erat kaitannya dengan tipe data. Karena keberadaan
            suatu data perlu ditentukan tipe datanya untuk pengenalan jenis dari
            data dan penentuan cara pengolahan data tersebut. Contohnya dari
            variabel seperti script di bawah ini.
          </p>
        </div>

        <div className="flex justify-center p-4">
          <img
            // src={logoc}
            alt="Gambar 2.1 Contoh script variabel"
            className="h-auto w-60"
          />
        </div>
        <p className="font-bold text-center">
          Gambar 2.1 Contoh script variabel
        </p>

        <div className="p-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
          <p>
            Maksud dari satu baris script di atas ialah memberi instruksi untuk
            membuat variabel "s" yang dialokasikan pada memori sebesar bit tipe
            data integer dengan nilai NULL (tidak terisi apapun). Dalam
            mempelajari bahasa pemrograman selain Assembly, kita tidak perlu
            memikirkan dimana alamat memori untuk menyimpan variabel tersebut.
            Namun yang perlu dipahami ialah kapan dan untuk apa kita memilih
            tipe data untuk suatu variabel. Dengan kata lain, kita harus tahu
            dan paham dalam penggunaan tipe data pada variabel.
          </p>
        </div>

        <div className="flex justify-center p-4">
          <img
            // src={alur}
            alt="Gambar 2.2 Ilustrasi Data ke Variabel"
            className="h-auto w-100"
          />
        </div>
        <p className="font-bold text-center">
          Gambar 2.2 Ilustrasi Data ke Variabel
        </p>

        <div className="p-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
          <p>
            Data atau nilai yang disimpan pada sebuah variabel akan disimpan ke
            dalam memori (RAM). Semakin banyak variabel atau nilai yang dibuat,
            semakin banyak ruang memori yang digunakan.
          </p>
        </div>

        <div className="flex justify-center p-4">
          <img
            // src={alur}
            alt="Gambar 2.3 Contoh Bagaimana String 'CsharpLearn' Disimpan di Memori Komputer"
            className="h-auto w-100"
          />
        </div>
        <p className="font-bold text-center">
          Gambar 2.3 Contoh Bagaimana String "CsharpLearn" Disimpan di Memori
          Komputer
        </p>
      </div>

      {/* Kuis */}
      {/* {!quizCompleted && <Quiz onComplete={handleQuizComplete} />} */}

      {/* Tombol Navigasi */}
      {quizCompleted && (
        <div className="flex justify-between mt-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
          >
            <img src={backIcon} alt="Kembali" className="w-5 h-5 mr-2" />
            Kembali
          </button>
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
            <img
              src={nextIcon}
              alt="Selanjutnya"
              className="w-5 h-5 ml-2"
            />{" "}
            {/* Ikon di pojok kanan */}
          </button>
        </div>
      )}
    </div>
  );
};

export default TipeData;
