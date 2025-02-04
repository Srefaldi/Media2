import React, { useState } from "react";
import { Link } from "react-router-dom";

const MateriSidebar = () => {
  const [openBab, setOpenBab] = useState(null); // Menyimpan bab yang sedang terbuka

  const toggleDropdown = (bab) => {
    setOpenBab(openBab === bab ? null : bab); // Jika bab yang sama diklik, tutup dropdown, jika berbeda, buka yang baru
  };

  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4 fixed overflow-auto">
      <h2 className="text-xl font-bold mb-4">📚 Materi C#</h2>
      <ul className="space-y-2">
        {/* Bab 1 */}
        <li>
          <button
            onClick={() => toggleDropdown("bab1")}
            className="w-full text-left p-2 hover:bg-gray-700 rounded"
          >
            🗂 Bab 1: Pendahuluan
          </button>
          {openBab === "bab1" && (
            <ul className="pl-4 space-y-1">
              <li>
                <Link to="/materi/bab1/pengenalan" className="block p-2 hover:bg-gray-700 rounded">
                  🔹 Pengenalan C#
                </Link>
              </li>
              <li>
                <Link to="/materi/bab1/instalasi" className="block p-2 hover:bg-gray-700 rounded">
                  🛠 Instalasi Setup .NET dan Visual Studio Code
                </Link>
              </li>
              <li>
                <Link to="/materi/bab1/struktur-kode" className="block p-2 hover:bg-gray-700 rounded">
                  📝 Struktur Kode Bahasa Pemrograman C#
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Bab 2 */}
        <li>
          <button
            onClick={() => toggleDropdown("bab2")}
            className="w-full text-left p-2 hover:bg-gray-700 rounded"
          >
            🗂 Bab 2: Variabel
          </button>
          {openBab === "bab2" && (
            <ul className="pl-4 space-y-1">
              <li>
                <Link to="/materi/bab2/pengertian-variabel" className="block p-2 hover:bg-gray-700 rounded">
                  🔹 Pengertian Variabel
                </Link>
              </li>
              <li>
                <Link to="/materi/bab2/penamaan-variabel" className="block p-2 hover:bg-gray-700 rounded">
                  🔹 Penamaan Variabel
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Bab 3 */}
        <li>
          <button
            onClick={() => toggleDropdown("bab3")}
            className="w-full text-left p-2 hover:bg-gray-700 rounded"
          >
            🗂 Bab 3: Tipe Data
          </button>
          {openBab === "bab3" && (
            <ul className="pl-4 space-y-1">
              <li>
                <Link to="/materi/bab3/pengertian-tipe-data" className="block p-2 hover:bg-gray-700 rounded">
                  🔹 Pengertian Tipe Data
                </Link>
              </li>
              <li>
                <Link to="/materi/bab3/klasifikasi-tipe-data" className="block p-2 hover:bg-gray-700 rounded">
                  🔹 Klasifikasi Tipe Data
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Bab 4 */}
        <li>
          <button
            onClick={() => toggleDropdown("bab4")}
            className="w-full text-left p-2 hover:bg-gray-700 rounded"
          >
            🗂 Bab 4: Operator
          </button>
          {openBab === "bab4" && (
            <ul className="pl-4 space-y-1">
              <li>
                <Link to="/materi/bab4/pengertian-operator" className="block p-2 hover:bg-gray-700 rounded">
                  🔹 Pengertian Operator
                </Link>
              </li>
              <li>
                <Link to="/materi/bab4/operator-arithmetic" className="block p-2 hover:bg-gray-700 rounded">
                  🔹 Operator Arithmetic (Aritmatika)
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Bab 5 */}
        <li>
          <button
            onClick={() => toggleDropdown("bab5")}
            className="w-full text-left p-2 hover:bg-gray-700 rounded"
          >
            🗂 Bab 5: Kontrol Alur
          </button>
          {openBab === "bab5" && (
            <ul className="pl-4 space-y-1">
              <li>
                <Link to="/materi/bab5/pengertian-kontrol-alur" className="block p-2 hover:bg-gray-700 rounded">
                  🔹 Pengertian Kontrol Alur
                </Link>
              </li>
              <li>
                <Link to="/materi/bab5/if-else" className="block p-2 hover:bg-gray-700 rounded">
                  🔹 Pernyataan If-Else
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Bab 6 */}
        <li>
          <button
            onClick={() => toggleDropdown("bab6")}
            className="w-full text-left p-2 hover:bg-gray-700 rounded"
          >
            🗂 Bab 6: Method
          </button>
          {openBab === "bab6" && (
            <ul className="pl-4 space-y-1">
              <li>
                <Link to="/materi/bab6/pengenalan-method" className="block p-2 hover:bg-gray-700 rounded">
                  🔹 Pengenalan Method
                </Link>
              </li>
              <li>
                <Link to="/materi/bab6/method-void" className="block p-2 hover:bg-gray-700 rounded">
                  🔹 Method Void
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default MateriSidebar;
