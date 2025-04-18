import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizPenamaanVariabel from "./Quiz-bab2/Quiz2";
import nextIcon from "../../../assets/img/selanjutnya.png";
import backIcon from "../../../assets/img/kembali.png";

const PenamaanVariabel = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigate = useNavigate();
  const handleQuizComplete = () => {
    setQuizCompleted(true);
  };

  const handleNext = () => {
    // Logika untuk menyelesaikan pelajaran dan navigasi ke halaman berikutnya
    window.scrollTo(0, 0);
    navigate("/materi/bab2/kategori-variabel");
  };

  const handleBack = () => {
    // Navigasi kembali ke halaman sebelumnya
    window.scrollTo(0, 0);
    navigate("/materi/bab2/variabel");
  };

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold text-center">BAB 2 - VARIABEL</h1>
      <h2 className="mt-2 text-2xl font-bold">2.2 Penamaan Variabel</h2>

      <div className="p-4 mt-3 mb-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <p className="mb-4">
          Penamaan variabel adalah aspek penting dalam pemrograman karena
          membantu membuat kode lebih mudah dibaca, dipahami, dan dikelola.
          Dalam bahasa pemrograman C#, ada beberapa aturan dan konvensi yang
          harus diikuti untuk memastikan nama variabel yang baik dan benar. Nama
          variabel yang baik tidak hanya mematuhi aturan sintaksis tetapi juga
          mencerminkan tujuan dan makna dari variabel tersebut.
        </p>
        <ul className="pl-6 mb-4 list-disc">
          <li>Nama variabel terdiri dari huruf, angka dan under score (_).</li>
          <li>
            Nama harus diawali dengan huruf. Under score juga dapat digunakan
            untuk mengawali nama suatu variabel tetapi ini tidak disarankan.
          </li>
          <li>
            C# adalah bahasa yang case sensitif, variabel dengan nama umur tidak
            sama dengan Umur.
          </li>
          <li>
            Keyword tidak bisa digunakan sebagai nama variabel, kecuali kalau
            keyword ini diawali dengan karakter @.
          </li>
        </ul>
        <p className="mb-4 font-bold">
          Pada tabel berikut adalah contoh penulisan variabel yang benar dan
          salah.
        </p>
        <div className="flex justify-center mb-4">
          <table className="border border-gray-300">
            <thead className="bg-[#68217A] text-white text-center">
              <tr>
                <th className="p-2 text-white border border-gray-300">Nama</th>
                <th className="p-2 text-white border border-gray-300">
                  Benar/Salah
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-gray-300">
                  nomorIndukMahasiswa
                </td>
                <td className="p-2 border border-gray-300">Benar</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">nama_mahasiswa</td>
                <td className="p-2 border border-gray-300">Benar</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">TotalNilai</td>
                <td className="p-2 border border-gray-300">Benar</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">Public</td>
                <td className="p-2 border border-gray-300">
                  Salah; karena public adalah keyword
                </td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">total#nilai</td>
                <td className="p-2 border border-gray-300">
                  Salah; karena menggunakan karakter #
                </td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">_total_nilai</td>
                <td className="p-2 border border-gray-300">
                  Benar; tetapi tidak dianjurkan
                </td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">@int</td>
                <td className="p-2 border border-gray-300">
                  Benar; keyword diawali dengan @
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4">
          Banyak konvensi yang digunakan untuk memformat penamaan variabel ini.
          Ada yang disebut dengan notasi Pascal, dimana setiap kata yang
          digunakan sebagai nama variabel akan selalu dimulai dengan huruf
          besar. Notasi Camel memiliki kesamaan dengan notasi Pascal hanya saja
          huruf pertama dalam notasi ini selalu dimulai dengan huruf kecil.
          Sedangkan notasi Hungarian mirip dengan notasi Camel tetapi setiap
          variabel akan dimulai dengan kode yang menyatakan tipe data dari
          variabel tersebut.
        </p>
        <p className="mb-4">
          Penggunaan konvensi dalam penamaan variabel ini bisa disesuai dengan
          selera masing-masing, belakangan ini yang banyak digunakan adalah
          notasi Camel. Yang terpenting dari penamaan variabel ini adalah
          gunakanlah nama yang dapat memudahkan program untuk dibaca.
        </p>
      </div>

      {/* Kuis */}
      {!quizCompleted && (
        <QuizPenamaanVariabel onComplete={handleQuizComplete} />
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

export default PenamaanVariabel;
