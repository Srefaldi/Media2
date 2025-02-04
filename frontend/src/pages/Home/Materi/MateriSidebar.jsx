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
            🗂 Bab 1: PENDAHULUAN
          </button>
          {openBab === "bab1" && (
            <ul className="pl-4 space-y-1">
              <li><Link to="/materi/bab1/pengenalan" className="block p-2 hover:bg-gray-700 rounded">1.1 Pengenalan C#</Link></li>
              <li><Link to="/materi/bab1/instalasi" className="block p-2 hover:bg-gray-700 rounded">1.2 Instalasi Setup .NET dan Visual Studio Code</Link></li>
              <li><Link to="/materi/bab1/struktur-kode" className="block p-2 hover:bg-gray-700 rounded">1.3 Struktur Kode Bahasa Pemrograman C#</Link></li>
              <li><Link to="/materi/bab1/struktur-esekusi" className="block p-2 hover:bg-gray-700 rounded">1.4 Struktur Esekusi Kode</Link></li>
              <li><Link to="/materi/bab1/sintaks-print" className="block p-2 hover:bg-gray-700 rounded">1.5 Sintaks Print</Link></li>
              <li><Link to="/materi/bab1/sintaks-komentar" className="block p-2 hover:bg-gray-700 rounded">1.6 Sintaks Komentar</Link></li>
              <li><Link to="/materi/bab1/error" className="block p-2 hover:bg-gray-700 rounded">1.7 Error Pada C#</Link></li>
              <li><Link to="/materi/bab1/latihan" className="block p-2 hover:bg-gray-700 rounded">Latihan</Link></li>
              <li><Link to="/materi/bab1/kuis" className="block p-2 hover:bg-gray-700 rounded">KUIS</Link></li>
              <li><Link to="/materi/bab1/rangkuman" className="block p-2 hover:bg-gray-700 rounded">RANGKUMAN</Link></li>
            </ul>
          )}
        </li>

        {/* Bab 2 */}
        <li>
          <button
            onClick={() => toggleDropdown("bab2")}
            className="w-full text-left p-2 hover:bg-gray-700 rounded"
          >
            🗂 Bab 2: VARIABEL
          </button>
          {openBab === "bab2" && (
            <ul className="pl-4 space-y-1">
              <li><Link to="/materi/bab2/pengertian-variabel" className="block p-2 hover:bg-gray-700 rounded">2.1 Pengertian Variabel</Link></li>
              <li><Link to="/materi/bab2/penamaan-variabel" className="block p-2 hover:bg-gray-700 rounded">2.2 Penamaan Variabel</Link></li>
              <li><Link to="/materi/bab2/kategori-variabel" className="block p-2 hover:bg-gray-700 rounded">2.3 Kategori Variabel</Link></li>
              <li><Link to="/materi/bab2/deklarasi-inialisasi" className="block p-2 hover:bg-gray-700 rounded">2.4 Deklarasi dan Inialisasi Variabel</Link></li>
              <li><Link to="/materi/bab2/deklarasi-banyak" className="block p-2 hover:bg-gray-700 rounded">2.5 Deklarasi Banyak Variabel</Link></li>
              <li><Link to="/materi/bab2/variabel-konstanta" className="block p-2 hover:bg-gray-700 rounded">2.6 Variabel Konstanta</Link></li>
              <li><Link to="/materi/bab2/sintaks-input" className="block p-2 hover:bg-gray-700 rounded">2.7 Sintaks Input</Link></li>
              <li><Link to="/materi/bab2/latihan" className="block p-2 hover:bg-gray-700 rounded">Latihan</Link></li>
              <li><Link to="/materi/bab2/kuis" className="block p-2 hover:bg-gray-700 rounded">KUIS</Link></li>
              <li><Link to="/materi/bab2/rangkuman" className="block p-2 hover:bg-gray-700 rounded">Rangkuman</Link></li>
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
              <li><Link to="/materi/bab3/pengertian-tipe-data" className="block p-2 hover:bg-gray-700 rounded">3.1 Pengertian Tipe Data</Link></li>
              <li><Link to="/materi/bab3/klasifikasi-tipe-data" className="block p-2 hover:bg-gray-700 rounded">3.2 Klasifikasi Tipe Data</Link></li>
              <li><Link to="/materi/bab3/tipe-data-dasar" className="block p-2 hover:bg-gray-700 rounded">3.3 Tipe Data Dasar</Link></li>
              <li><Link to="/materi/bab3/integer" className="block p-2 hover:bg-gray-700 rounded">1. Integer</Link></li>
              <li><Link to="/materi/bab3/floating-point" className="block p-2 hover:bg-gray-700 rounded">2. Floating-point</Link></li>
              <li><Link to="/materi/bab3/boolean" className="block p-2 hover:bg-gray-700 rounded">3. Boolean</Link></li>
              <li><Link to="/materi/bab3/char" className="block p-2 hover:bg-gray-700 rounded">4. Char</Link></li>
              <li><Link to="/materi/bab3/string" className="block p-2 hover:bg-gray-700 rounded">5. String</Link></li>
              <li><Link to="/materi/bab3/latihan" className="block p-2 hover:bg-gray-700 rounded">Latihan</Link></li>
              <li><Link to="/materi/bab3/kuis" className="block p-2 hover:bg-gray-700 rounded">KUIS</Link></li>
              <li><Link to="/materi/bab3/rangkuman" className="block p-2 hover:bg-gray-700 rounded">Rangkuman</Link></li>
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
              <li><Link to="/materi/bab4/pengertian-operator" className="block p-2 hover:bg-gray-700 rounded">4.1 Pengertian Operator</Link></li>
              <li><Link to="/materi/bab4/operator-arithmetic" className="block p-2 hover:bg-gray-700 rounded">Operator Arithmetic</Link></li>
              <li><Link to="/materi/bab4/operator-increment" className="block p-2 hover:bg-gray-700 rounded">Operator Increment dan Decrement</Link></li>
              <li><Link to="/materi/bab4/operator-assignment" className="block p-2 hover:bg-gray-700 rounded">Operator Assignment</Link></li>
              <li><Link to="/materi/bab4/operator-comparison" className="block p-2 hover:bg-gray-700 rounded">Operator Comparison</Link></li>
              <li><Link to="/materi/bab4/operator-logika" className="block p-2 hover:bg-gray-700 rounded">Operator Logika</Link></li>
              <li><Link to="/materi/bab4/operator-conditional" className="block p-2 hover:bg-gray-700 rounded">Operator Conditional</Link></li>
              <li><Link to="/materi/bab4/operator-equality" className="block p-2 hover:bg-gray-700 rounded">Operator Equality</Link></li>
              <li><Link to="/materi/bab4/latihan" className="block p-2 hover:bg-gray-700 rounded">Latihan</Link></li>
              <li><Link to="/materi/bab4/kuis" className="block p-2 hover:bg-gray-700 rounded">KUIS</Link></li>
              <li><Link to="/materi/bab4/rangkuman" className="block p-2 hover:bg-gray-700 rounded">Rangkuman</Link></li>
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
              <li><Link to="/materi/bab5/pengertian-kontrol" className="block p-2 hover:bg-gray-700 rounded">5.1 Pengertian Kontrol Alur</Link></li>
              <li><Link to="/materi/bab5/if-else" className="block p-2 hover:bg-gray-700 rounded">5.2 Pernyataan If-Else</Link></li>
              <li><Link to="/materi/bab5/switch" className="block p-2 hover:bg-gray-700 rounded">5.3 Pernyataan Switch</Link></li>
              <li><Link to="/materi/bab5/perulangan" className="block p-2 hover:bg-gray-700 rounded">5.4 Pernyataan Perulangan (for, while, do-while)</Link></li>
              <li><Link to="/materi/bab5/break-continue" className="block p-2 hover:bg-gray-700 rounded">5.5 Pernyataan Break dan Continue</Link></li>
              <li><Link to="/materi/bab5/perulangan-bersarang" className="block p-2 hover:bg-gray-700 rounded">5.6 Perulangan Bersarang</Link></li>
              <li><Link to="/materi/bab5/latihan" className="block p-2 hover:bg-gray-700 rounded">Latihan</Link></li>
              <li><Link to="/materi/bab5/kuis" className="block p-2 hover:bg-gray-700 rounded">KUIS</Link></li>
              <li><Link to="/materi/bab5/rangkuman" className="block p-2 hover:bg-gray-700 rounded">Rangkuman</Link></li>
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
              <li><Link to="/materi/bab6/pengenalan-method" className="block p-2 hover:bg-gray-700 rounded">6.1 Pengenalan Method</Link></li>
              <li><Link to="/materi/bab6/method-void" className="block p-2 hover:bg-gray-700 rounded">6.2 Method Void</Link></li>
              <li><Link to="/materi/bab6/method-dengan-tipe-data" className="block p-2 hover:bg-gray-700 rounded">6.3 Method Dengan Tipe Data</Link></li>
              <li><Link to="/materi/bab6/parameter-method" className="block p-2 hover:bg-gray-700 rounded">6.4 Parameter Method</Link></li>
              <li><Link to="/materi/bab6/latihan" className="block p-2 hover:bg-gray-700 rounded">Latihan</Link></li>
              <li><Link to="/materi/bab6/kuis" className="block p-2 hover:bg-gray-700 rounded">KUIS</Link></li>
              <li><Link to="/materi/bab6/rangkuman" className="block p-2 hover:bg-gray-700 rounded">Rangkuman</Link></li>
            </ul>
          )}
        </li>

        {/* Evaluasi Akhir */}
        <li>
          <Link
            to="/materi/evaluasi"
            className="block p-2 hover:bg-gray-700 rounded"
          >
            🎓 Evaluasi Akhir
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MateriSidebar;

