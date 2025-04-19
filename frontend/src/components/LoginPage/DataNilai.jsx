import React, { useState, useEffect } from "react";
import axios from "axios";

const DataNilai = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10); // Set default to 10
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    const response = await axios.get("http://localhost:5000/users"); // Ganti dengan endpoint yang sesuai
    setStudents(response.data);
  };

  // Filter students based on search term
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);

  // Get current students for the current page
  const currentStudents = filteredStudents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      <main className="flex flex-1 overflow-hidden">
        <section className="flex-1 p-6">
          <h1 className="font-semibold text-3xl mb-5 text-gray-800">
            Nilai Siswa
          </h1>
          <p className="text-gray-400 text-sm mb-6 select-none">
            Klik pada data untuk melihat detail nilai siswa
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center mb-6 justify-between">
            <div className="flex items-center space-x-2">
              <label
                htmlFor="nilai"
                className="text-gray-700 text-sm select-none"
              >
                Pilih nilai:
              </label>
              <select
                id="nilai"
                name="nilai"
                className="border border-gray-300 rounded text-gray-700 text-sm px-2 py-1 cursor-pointer w-24"
              >
                <option>---</option>
                <option>Pendahuluan</option>
                <option>Variabel</option>
                <option>Tipe Data</option>
                <option>Operator</option>
                <option>Kontrol Alur</option>
                <option>Method</option>
              </select>
            </div>
            <input
              type="search"
              placeholder="Cari..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded text-gray-700 text-sm px-3 py-2 w-full sm:w-80 mt-2 sm:mt-0 sm:ml-4" // Menambahkan margin kiri untuk jarak
              aria-label="Cari"
            />
          </div>

          <table className="w-full text-left text-gray-800 text-sm border-collapse border border-gray-200">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="font-semibold px-3 py-2 border-r border-gray-200 select-none">
                  NIS
                </th>
                <th className="font-semibold px-3 py-2 border-r border-gray-200 select-none">
                  Nama <i className="fas fa-sort-up text-xs"></i>
                </th>
                <th className="font-semibold px-3 py-2 border-r border-gray-200 select-none">
                  Kelas <i className="fas fa-sort text-xs"></i>
                </th>
                <th className="font-semibold px-3 py-2 select-none">
                  Nilai Terakhir <i className="fas fa-sort text-xs"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentStudents.map((student, index) => (
                <tr key={student.nis} className="border-b border-gray-200">
                  <td className="px-3 py-2 border-r border-gray-200 font-mono text-xs select-text">
                    {student.nis}
                  </td>
                  <td className="px-3 py-2 border-r border-gray-200 select-text">
                    {student.name}
                  </td>
                  <td className="px-3 py-2 border-r border-gray-200 select-text">
                    {student.class}
                  </td>
                  <td className="px-3 py-2 select-text">-</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between items-center mt-6 text-gray-700 text-sm select-none">
            <div className="flex items-center space-x-2">
              <span>Menampilkan</span>
              <select
                className="border border-gray-300 rounded text-gray-700 text-sm px-3 py-1 cursor-pointer w-20"
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
              </select>
              <span>Data</span>
            </div>
            <nav className="flex space-x-1">
              <button
                onClick={() => setCurrentPage(1)}
                className="bg-gray-500 text-white px-3 py-1 rounded-l select-none cursor-pointer"
                disabled={currentPage === 1}
              >
                &laquo;&laquo;
              </button>
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="bg-gray-500 text-white px-3 py-1 select-none cursor-pointer"
                disabled={currentPage === 1}
              >
                &laquo;
              </button>
              <button
                className="bg-gray-700 text-white px-3 py-1 select-none cursor-default cursor-not-allowed"
                aria-current="page"
              >
                {currentPage}
              </button>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className="bg-gray-500 text-white px-3 py-1 select-none cursor-pointer"
                disabled={currentPage === totalPages}
              >
                &raquo;
              </button>
              <button
                onClick={() => setCurrentPage(totalPages)}
                className="bg-gray-500 text-white px-3 py-1 rounded-r select-none cursor-pointer"
                disabled={currentPage === totalPages}
              >
                &raquo;&raquo;
              </button>
            </nav>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DataNilai;
