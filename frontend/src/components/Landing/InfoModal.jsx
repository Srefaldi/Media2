import React, { useState } from "react";
import { Link } from "react-router-dom";
const InfoModal = ({ isOpen, toggleModal }) => {
  const [isMediaOpen, setIsMediaOpen] = useState(false);
  const [isDaftarPustakaOpen, setIsDaftarPustakaOpen] = useState(false);
  const [isAtribusiOpen, setIsAtribusiOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      id="timeline-modal"
      className="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full bg-black bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-3xl mx-auto">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700 max-h-[80vh] overflow-y-auto">
          {" "}
          {/* Tambahkan max-h dan overflow-y-auto */}
          {/* Modal header */}
          <div className="text-center flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              INFORMASI
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={toggleModal}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-4 md:p-5">
            {/* Sub-dropdown: Informasi Media */}
            <div className="mb-4">
              <button
                onClick={() => setIsMediaOpen(!isMediaOpen)}
                className="w-full text-left font-semibold text-gray-900 dark:text-white flex items-center justify-between"
              >
                <span>Informasi Media</span>
                <span>{isMediaOpen ? "▼" : "▲"}</span>
              </button>
              {isMediaOpen && (
                <div className="border border-gray-200 rounded-md p-2 mt-2">
                  <p className="font-bold text-center mt-2">PERIHAL</p>
                  <p className="text-center mt-2">
                    Media pembelajaran ini dibuat untuk memenuhi persyaratan
                    dalam menyelesaikan program Strata-1 Pendidikan Komputer
                    dengan judul:
                  </p>
                  <p className="font-bold text-center mt-2">
                    PENGEMBANGAN MEDIA PEMBELAJARAN INTERAKTIF BERBASIS WEB PADA
                    MATERI DASAR-DASAR PEMROGRAMAN C# DENGAN MODEL TUTORIAL
                  </p>
                  <ul className="list-disc list-inside mt-3">
                    <li>
                      <strong>Nama:</strong> Sopia Refaldi
                    </li>
                    <li>
                      <strong>Email:</strong> sopiarefaldii@gmail.com
                    </li>
                    <li>
                      <strong>Dosen Pembimbing 1:</strong> Dr. R. Ati Sukmawati,
                      M.Kom
                    </li>
                    <li>
                      <strong>Dosen Pembimbing 2:</strong> Muhammad Hifdzi
                      Adini, S.Kom., M.T
                    </li>
                    <li>
                      <strong>Program Studi:</strong> S-1 Pendidikan Komputer
                    </li>
                    <li>
                      <strong>Fakultas:</strong> Fakultas Keguruan dan Ilmu
                      Pendidikan (FKIP)
                    </li>
                    <li>
                      <strong>Instansi:</strong> Universitas Lambung Mangkurat
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Sub-dropdown: Informasi Daftar Pustaka */}
            <div className="mb-4">
              <button
                onClick={() => setIsDaftarPustakaOpen(!isDaftarPustakaOpen)}
                className="w-full text-left font-semibold text-gray-900 dark:text-white flex items-center justify-between"
              >
                <span>Informasi Daftar Pustaka</span>
                <span>{isDaftarPustakaOpen ? "▼" : "▲"}</span>
              </button>
              {isDaftarPustakaOpen && (
                <div className="border border-gray-200 rounded-md p-2 mt-2">
                  <p>Daftar pustaka yang digunakan dalam media ini:</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Referensi 1: </li>
                    <li>Referensi 2: </li>
                    <li>Referensi 3: </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Sub-dropdown: Atribusi dan Petunjuk Penggunaan */}
            <div className="mb-4">
              <button
                onClick={() => setIsAtribusiOpen(!isAtribusiOpen)}
                className="w-full text-left font-semibold text-gray-900 dark:text-white flex items-center justify-between"
              >
                <span>Petunjuk Penggunaan</span>
                <span>{isAtribusiOpen ? "▼" : "▲"}</span>
              </button>
              {isAtribusiOpen && (
                <div className="border border-gray-200 rounded-md p-2 mt-2">
                  <p>Petunjuk penggunaan media :</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>1.</li>
                    <li>2.</li>
                    <li>3.</li>
                  </ul>
                </div>
              )}
            </div>

            <button className="text-white inline-flex w-full justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <Link to="/login" className="text-white hover:text-gray-200">
                Mulai Belajar
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
