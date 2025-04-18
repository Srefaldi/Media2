import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizTipeDataDasar from "./Quiz-bab3/Quiz3"; // Import komponen kuis
import nextIcon from "../../../assets/img/selanjutnya.png"; // Pastikan path ini sesuai
import backIcon from "../../../assets/img/kembali.png"; // Pastikan path ini sesuai
import { useOutletContext } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2

const TipeDataDasar = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false); // Menyimpan status apakah kuis sudah benar
  const navigate = useNavigate();
  const { handleLessonComplete } = useOutletContext();

  const handleQuizComplete = (isPassed) => {
    setQuizCompleted(true);
    setQuizPassed(isPassed); // Set status kuis
  };

  const handleNext = () => {
    if (!quizPassed) {
      // Jika kuis belum dijawab dengan benar, tampilkan peringatan
      Swal.fire({
        title: "Oops!",
        text: "Anda harus menjawab kuis dengan benar sebelum melanjutkan.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return; // Hentikan eksekusi jika kuis belum benar
    }
    handleLessonComplete("/materi/bab3/tipe-data-dasar");
    window.scrollTo(0, 0);
    navigate("/materi/bab3/integer");
  };

  const handleBack = () => {
    window.scrollTo(0, 0);
    navigate("/materi/bab3/klasifikasi-tipedata");
  };

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold text-center">BAB 3 - TIPE DATA</h1>
      <h2 className="text-2xl font-bold">3.3 Tipe Data Dasar</h2>

      <div className="p-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <p>
          Dalam bahasa pemrograman C#, tipe data dapat dibagi ke dalam dua
          kategori utama, yaitu Value Types dan Reference Types. Masing-masing
          kategori ini memiliki karakteristik dan kegunaan yang berbeda.
        </p>
      </div>

      <h3 className="mt-4 text-xl font-bold">Tipe Data Nilai (Value Types)</h3>
      <div className="p-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <p>
          Tipe data nilai menyimpan data secara langsung di lokasi memori yang
          dialokasikan untuk variabel tersebut. Mereka biasanya ditempatkan di
          stack, yang membuatnya lebih efisien dalam hal alokasi memori dan
          akses data. Berikut adalah beberapa tipe data nilai dasar yang sering
          digunakan dalam C#:
        </p>
        <ul className="pl-6 list-disc">
          <li>
            <strong>int (Integer)</strong>: Tipe data untuk bilangan bulat
            seperti 1, 2, 3.
          </li>
          <li>
            <strong>float</strong>: Tipe data untuk bilangan pecahan dengan
            presisi tunggal seperti 3.14f, 1.13f, 0.00013f.
          </li>
          <li>
            <strong>double</strong>: Tipe data untuk bilangan pecahan dengan
            presisi ganda seperti 3.14, 1.13, 0.00013.
          </li>
          <li>
            <strong>bool (Boolean)</strong>: Tipe data yang berisi nilai true
            atau false.
          </li>
          <li>
            <strong>char</strong>: Tipe data untuk satu karakter, seperti 'a',
            'Z', atau '%'.
          </li>
        </ul>
        <p className="mt-4 mb-3 font-bold">
          Cobalah kode program tersebut pada compiler:
        </p>
        <div className="flex justify-center mb-4">
          <iframe
            width="100%"
            height="475"
            src="https://dotnetfiddle.net/Widget/JS3e3D"
          ></iframe>
        </div>
        <p className="mt-4">
          Penjelasan: Pada contoh di atas, variabel <code>var1</code> bertipe{" "}
          <code>int</code>, <code>var2</code> bertipe <code>float</code>,{" "}
          <code>var3</code> bertipe <code>double</code>, <code>var4</code>{" "}
          bertipe <code>bool</code>, dan <code>var5</code> bertipe{" "}
          <code>char</code>. Setiap variabel menyimpan nilai secara langsung di
          lokasi memori yang dialokasikan untuk variabel tersebut.
        </p>
      </div>

      <h3 className="mt-4 text-xl font-bold">
        Tipe Data Referensi (Reference Types)
      </h3>
      <div className="p-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <p>
          Tipe data referensi menyimpan referensi (alamat memori) ke lokasi
          memori yang menyimpan data sebenarnya. Mereka biasanya ditempatkan di
          heap dan lebih fleksibel tetapi memerlukan lebih banyak overhead untuk
          alokasi memori dan pengelolaan. Berikut adalah beberapa tipe data
          referensi dasar yang sering digunakan dalam C#:
        </p>
        <ul className="pl-6 list-disc">
          <li>
            <strong>string</strong>: Tipe data untuk kumpulan karakter, seperti
            "Mari Belajar CSharp".
          </li>
          <li>
            <strong>Array</strong>: Tipe data untuk kumpulan tipe data lain yang
            sejenis.
          </li>
          <li>
            <strong>Class</strong>: Tipe data khusus yang bisa menampung beragam
            data, termasuk memiliki method sendiri.
          </li>
        </ul>
      </div>

      {/* Kuis */}
      {!quizCompleted && <QuizTipeDataDasar onComplete={handleQuizComplete} />}

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

export default TipeDataDasar;
