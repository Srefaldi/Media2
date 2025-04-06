import React, { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2

const Quiz1 = ({ onComplete }) => {
  const [inputCondition, setInputCondition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Cek jawaban
    const correctCondition = 'jenisHewan == "Kucing"'; // Kondisi yang benar

    if (inputCondition.trim() === correctCondition) {
      window.scrollTo(0, document.body.scrollHeight);

      Swal.fire({
        title: "Jawaban Anda Benar",
        text: "Silahkan lanjut pelajari materi pernyataan if bersarang",
        icon: "success",
        confirmButtonText: "OK",
      });

      onComplete(true);
    } else {
      // Scroll ke atas ketika jawaban salah
      window.scrollTo(0, 0);
      setInputCondition("");

      Swal.fire({
        title: "Jawaban Salah!",

        text: "Baca Kembali Materi dan Coba Lagi",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleReset = () => {
    setInputCondition("");
  };

  return (
    <div className="max-w-full p-6 mx-auto mt-4 bg-white rounded-lg shadow-lg">
      <h2
        className="text-lg font-semibold text-center"
        style={{ color: "#6E2A7F" }}
      >
        UJI PENGETAHUAN
      </h2>
      <form onSubmit={handleSubmit}>
        <p className="mb-4 text-gray-700">
          Terdapat program mengenai penentuan makanan hewan berdasarkan
          jenisnya. Dengan kondisi berikut:
          <br />
          <p className="ml-2">
            • Jika jenis hewan adalah kucing maka diberikan makan ikan.
          </p>
          <p className="ml-2">
            • Jika jenis hewan lain maka diberikan makan sayur.
          </p>
          <p>Lengkapilah potongan kode di bawah ini:</p>
        </p>
        <div className="p-4 mt-3 mb-4 font-mono text-sm bg-gray-100 rounded-lg">
          <pre style={{ whiteSpace: "pre-wrap" }}>
            <code>
              {`string jenisHewan == "Kucing"; \n\nif (`}
              <input
                type="text"
                value={inputCondition}
                onChange={(e) => setInputCondition(e.target.value)}
                className="ml-1 mr-1 border border-gray-400 px-1 py-1 w-40 mb-2 rounded-md focus:ring-2 focus:ring-[#6E2A7F]"
                placeholder="Jawaban ..."
              />
              {`) \n{ \n    Console.WriteLine("diberikan makan ikan"); \n} \nelse \n{ \n    Console.WriteLine("diberikan makan sayur"); \n}`}
            </code>
          </pre>
        </div>

        {/* Tombol Submit */}
        <button
          type="submit"
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
          Cek Jawaban
        </button>

        {/* Tombol Reset (Hapus Jawaban) */}
        <button
          type="button"
          onClick={handleReset}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            transition: "background-color 0.2s",
            marginLeft: "1rem",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#c0392b")
          }
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "red")}
        >
          Hapus Jawaban
        </button>
      </form>
    </div>
  );
};

export default Quiz1;
