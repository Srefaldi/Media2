import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const InstalasiSetup = () => {
  const navigate = useNavigate();
  const { handleLessonComplete } = useOutletContext(); // Ambil fungsi dari konteks

  const handleBack = () => {
    window.scrollTo(0, 0);
    navigate("/materi/bab1/pengenalan");
  };

  const handleNext = () => {
    handleLessonComplete("/materi/bab1/instalasi");
    window.scrollTo(0, 0);
    navigate("/materi/bab1/struktur-kode");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Instalasi Setup .NET dan Visual Studio Code
      </h2>

      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handleBack}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
        >
          Kembali
        </button>
        <button
          onClick={handleNext} // Memanggil handleNext untuk memperbarui progress
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default InstalasiSetup;
