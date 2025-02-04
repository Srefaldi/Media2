import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-1/4 bg-gray-100 p-6 shadow-md overflow-auto">
      <h2 className="text-xl font-bold mb-4">Daftar Materi</h2>

      {/* Bab 1 */}
      <h3 className="font-semibold text-lg mt-4">Bab 1: Pendahuluan</h3>
      <Link to="/bab1/pengenalan" className="block py-2 px-4 bg-gray-200 rounded-md mb-2 hover:bg-gray-300">1.1 Pengenalan C#</Link>
      <Link to="/bab1/instalasi" className="block py-2 px-4 bg-gray-200 rounded-md mb-2 hover:bg-gray-300">1.2 Instalasi Setup</Link>
      <Link to="/bab1/struktur" className="block py-2 px-4 bg-gray-200 rounded-md mb-2 hover:bg-gray-300">1.3 Struktur Kode</Link>
      <Link to="/bab1/latihan" className="block py-2 px-4 bg-gray-200 rounded-md mb-2 hover:bg-gray-300">Latihan</Link>
      <Link to="/bab1/kuis" className="block py-2 px-4 bg-gray-200 rounded-md mb-2 hover:bg-gray-300">Kuis</Link>
      <Link to="/bab1/rangkuman" className="block py-2 px-4 bg-gray-200 rounded-md mb-2 hover:bg-gray-300">Rangkuman</Link>


      <h3 className="font-semibold text-lg mt-4">Bab 2: Pendahuluan</h3>
      <Link to="/bab1/pengenalan" className="block py-2 px-4 bg-gray-200 rounded-md mb-2 hover:bg-gray-300">1.1 Pengenalan C#</Link>
      <Link to="/bab1/instalasi" className="block py-2 px-4 bg-gray-200 rounded-md mb-2 hover:bg-gray-300">1.2 Instalasi Setup</Link>
      <Link to="/bab1/struktur" className="block py-2 px-4 bg-gray-200 rounded-md mb-2 hover:bg-gray-300">1.3 Struktur Kode</Link>
      <Link to="/bab1/latihan" className="block py-2 px-4 bg-gray-200 rounded-md mb-2 hover:bg-gray-300">Latihan</Link>
      <Link to="/bab1/kuis" className="block py-2 px-4 bg-gray-200 rounded-md mb-2 hover:bg-gray-300">Kuis</Link>
      <Link to="/bab1/rangkuman" className="block py-2 px-4 bg-gray-200 rounded-md mb-2 hover:bg-gray-300">Rangkuman</Link>
      
      <h3 className="font-semibold text-lg mt-4">Bab 3: Pendahuluan</h3>
      <Link to="/bab1/pengenalan" className="block py-2 px-4 bg-gray-200 rounded-md mb-2 hover:bg-gray-300">1.1 Pengenalan C#</Link>
      <Link to="/bab1/instalasi" className="block py-2 px-4 bg-gray-200 rounded-md mb-2 hover:bg-gray-300">1.2 Instalasi Setup</Link>
      <Link to="/bab1/struktur" className="block py-2 px-4 bg-gray-200 rounded-md mb-2 hover:bg-gray-300">1.3 Struktur Kode</Link>
      <Link to="/bab1/latihan" className="block py-2 px-4 bg-gray-200 rounded-md mb-2 hover:bg-gray-300">Latihan</Link>
      <Link to="/bab1/kuis" className="block py-2 px-4 bg-gray-200 rounded-md mb-2 hover:bg-gray-300">Kuis</Link>
      <Link to="/bab1/rangkuman" className="block py-2 px-4 bg-gray-200 rounded-md mb-2 hover:bg-gray-300">Rangkuman</Link>
    </div>
  );
};

export default Sidebar;
