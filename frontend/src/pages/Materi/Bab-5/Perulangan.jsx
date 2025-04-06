import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import nextIcon from "../../../assets/img/selanjutnya.png"; // Pastikan path ini sesuai
import backIcon from "../../../assets/img/kembali.png"; // Pastikan path ini sesuai
import { useOutletContext } from "react-router-dom";
import QuizPerulangan from "./Quiz-bab5/Quiz4"; // Import komponen kuis

const PernyataanPerulangan = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigate = useNavigate();
  const { handleLessonComplete } = useOutletContext();

  const handleNext = () => {
    handleLessonComplete("/materi/bab5/pernyataan-perulangan");
    window.scrollTo(0, 0);
    navigate("/materi/bab5/penutup"); // Ganti dengan rute topik berikutnya
  };

  const handleBack = () => {
    window.scrollTo(0, 0);
    navigate("/materi/bab5/pernyataan-switch"); // Ganti dengan rute topik sebelumnya
  };

  const handleQuizComplete = () => {
    setQuizCompleted(true);
  };

  return (
    <div className="mt-4 mb-4">
      <h1 className="mb-4 text-2xl font-bold text-center">
        BAB 5 - KONTROL ALUR
      </h1>
      <h2 className="mt-2 mb-4 text-2xl font-bold">
        5.4 Pernyataan Perulangan
      </h2>

      <div className="p-4 mt-2 mb-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <p className="mb-2 text-xl font-bold">Perintah For</p>
        <p className="mb-2">
          <strong>
            Perulangan for biasa digunakan untuk mengulang suatu proses yang
            telah diketahui jumlah perulangannya.
          </strong>{" "}
          Perulangan for juga biasa disebut dengan determinate loop. Dari segi
          penulisannya, struktur perulangan for tampaknya lebih efisien karena
          susunannya lebih simpel dan sederhana.
        </p>
        <p className="mb-2 font-bold text-l">
          Format umum atas perulangan for adalah:
        </p>
        <pre className="p-2 mb-4 font-mono bg-gray-100 rounded">
          <code>{`for (inisialisasi; kondisi; iterasi) 
{ 
    runtun statemen; 
}`}</code>
        </pre>
        <ol className="mt-2 text-justify text-gray-600 list-decimal list-inside">
          <li>
            <strong>Inisialisasi:</strong> Akan dieksekusi terlebih dahulu, dan
            tidak akan diulang, dalam artian inisialisasi tidak masuk dalam
            pengulangan. Inisialisasi biasanya berupa sebuah statemen penugasan
            yang menetapkan nilai awal dari variabel kendali suatu perulangan,
            yang berperan sebagai counter pengendali perulangan.
          </li>
          <li>
            <strong>Kondisi:</strong> Sebuah ekspresi boolean yang menentukan
            apakah sebuah perulangan atau loop akan terus berulang atau
            berhenti.
          </li>
          <li>
            <strong>Iterasi:</strong> Sebuah ekspresi yang mendefinisikan jumlah
            perubahan variabel kendali dari sebuah perulangan setiap kali
            perulangan terjadi.
          </li>
          <li>
            <strong>Eksekusi:</strong> Perulangan for akan terus mengeksekusi
            runtun statemen sepanjang pengujian kondisi bernilai true. Ketika
            kondisi bernilai false, maka perulangan akan berhenti dan eksekusi
            program akan berlanjut ke statemen berikutnya setelah for.
          </li>
        </ol>
        <p className="mb-2">Contoh Penggunaan Perulangan for:</p>
        <p className="mb-2">
          Contoh 1: Apabila kita ingin mencetak kata hello sebanyak 10 kali pada
          sebuah program, dalam kasus tersebut, sudah kita ketahui bahwa
          pengulangan pencetakan kata akan dilakukan sebanyak 10 kali.
        </p>
        <img
          src="path/to/your/image.png"
          alt="Contoh 1 kode perulangan for"
          className="mx-auto mb-4"
        />{" "}
        {/* Ganti dengan path gambar yang sesuai */}
        <p className="mb-2">
          Contoh 2 (increment): Apabila kita ingin mencetak angka 1 hingga 15.
          Dalam kasus tersebut, sudah kita ketahui bahwa pengulangan akan
          dimulai dari angka 1 (satu) sampai dengan 15 (lima belas).
        </p>
        <img
          src="path/to/your/image.png"
          alt="Contoh 2 kode perulangan for"
          className="mx-auto mb-4"
        />{" "}
        {/* Ganti dengan path gambar yang sesuai */}
        <p className="mb-2">
          Contoh 3 (decrement): Jika kita ingin mencetak angka sebaliknya dari
          15 (lima belas) hingga 1 (satu). Maka hal yang perlu kita lakukan
          adalah mengganti nilai awal menjadi 15 pada inisialisasi, mengganti
          kondisi dan mengganti iterasi increment(i++), menjadi decrement(i--).
        </p>
        <img
          src="path/to/your/image.png"
          alt="Contoh 3 kode perulangan for"
          className="mx-auto mb-4"
        />{" "}
        {/* Ganti dengan path gambar yang sesuai */}
        <p className="mb-2">
          Contoh 4 (perulangan for dengan pengkondisian): Jika kita akan
          mencetak angka genap dari 1 hingga 20 (2 4 6 8 10 12 14 16 18 20).
          Dalam kasus tersebut, sudah kita ketahui bahwa pengulangan akan
          dimulai dari angka 1 (satu) sampai dengan 20 (dua puluh), hanya saja
          terdapat statemen pengkondisian untuk mengecek apakah sebuah angka
          merupakan bilangan genap atau ganjil.
        </p>
        <img
          src="path/to/your/image.png"
          alt="Contoh 4 perulangan for"
          className="mx-auto mb-4"
        />{" "}
        {/* Ganti dengan path gambar yang sesuai */}
        <p className="mb-2">
          Hal Penting pada Perulangan for: Satu hal yang penting mengenai
          perulangan for adalah bahwa ekspresi kondisional selalu diuji terlebih
          dahulu. Hal ini berarti bahwa kode di dalam for tidak akan dieksekusi
          bila kondisi tersebut bernilai false.
        </p>
        <img
          src="path/to/your/image.png"
          alt="Penulisan kode yang perlu diperhatikan dalam perulangan for"
          className="mx-auto mb-4"
        />{" "}
        {/* Ganti dengan path gambar yang sesuai */}
        <p className="mb-2">
          Variasi Perulangan For: Perulangan for merupakan salah satu statement
          yang paling fleksibel dalam bahasa C# karena mengizinkan berbagai
          variasi.
        </p>
        <p className="mb-2">
          Menggunakan beberapa variabel kendali: Perulangan for memperbolehkan
          kita untuk menggunakan dua atau lebih variabel untuk mengendalikan
          perulangan.
        </p>
        <img
          src="path/to/your/image.png"
          alt="Kode perulangan for menggunakan variabel kendali"
          className="mx-auto mb-4"
        />{" "}
        {/* Ganti dengan path gambar yang sesuai */}
        <p className="mb-2">
          Ekspresi Kondisional: Ekspresi kondisional pengendali perulangan for
          dapat berupa sembarang ekspresi yang menghasilkan bool. Kondisi ini
          bisa saja tidak melibatkan variabel kendali perulangan.
        </p>
        <img
          src="path/to/your/image.png"
          alt="Kode perulangan for menggunakan ekspresi kondisional"
          className="mx-auto mb-4"
        />{" "}
        {/* Ganti dengan path gambar yang sesuai */}
        <p className="mb-2">
          Bagian yang hilang: Dalam C#, adalah hal yang memungkinkan untuk salah
          satu atau semuanya dari inisialisasi, kondisi, atau iterasi pada
          perulangan for dibiarkan kosong.
        </p>
        <img
          src="path/to/your/image.png"
          alt="Kode perulangan for dibagian iterasi dibiarkan kosong"
          className="mx-auto mb-4"
        />{" "}
        {/* Ganti dengan path gambar yang sesuai */}
        <p className="mb-2">
          Perulangan Tak Berhingga: Kita dapat menciptakan loop tak berhingga
          (perulangan yang tidak pernah berhenti) menggunakan for dengan
          membiarkan ekspresi kondisi kosong.
        </p>
        <img
          src="path/to/your/image.png"
          alt="Format penulisan perulangan for tak terhingga"
          className="mx-auto mb-4"
        />{" "}
        {/* Ganti dengan path gambar yang sesuai */}
      </div>

      {/* Kuis */}
      {!quizCompleted && <QuizPerulangan onComplete={handleQuizComplete} />}

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

export default PernyataanPerulangan;
