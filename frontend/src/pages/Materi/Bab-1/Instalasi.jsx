import React from "react";
import { useNavigate } from "react-router-dom";

const InstalasiSetup = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/materi/bab1/pengenalan");
  };

  const handleNext = () => {
    navigate("/materi/bab1/struktur-kode");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Instalasi Setup .NET dan Visual Studio Code
      </h2>
      <p className="text-gray-700 bg-white p-4 rounded-lg shadow-md">
        Untuk menginstal C#, kita perlu mengatur .NET SDK dan Visual Studio
        Code...
      </p>
      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handleBack}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
        >
          Kembali
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default InstalasiSetup;
