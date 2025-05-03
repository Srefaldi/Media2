import React, { useState, useEffect } from "react";
import axios from "axios";

const ProgresBelajar = () => {
  const [users, setUsers] = useState([]);
  const [classes, setClasses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    getClasses();
    getUsers();
  }, [selectedClass]);

  useEffect(() => {
    if (error === "Mohon login ke akun anda") {
      window.location.href = "/login";
    }
  }, [error]);

  const getClasses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/classes", {
        withCredentials: true,
      });
      setClasses(response.data.sort()); // Sort classes alphabetically
      console.log("Daftar kelas unik:", response.data);
    } catch (error) {
      console.error(
        "Gagal mengambil daftar kelas:",
        error.response?.data?.msg || error.message
      );
      setError(error.response?.data?.msg || "Terjadi kesalahan");
    }
  };

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users", {
        params: { class: selectedClass || undefined },
        withCredentials: true,
      });
      console.log("Pengguna dengan role=user:", response.data);
      setUsers(response.data); // Data sudah difilter di backend
      setError(null);
    } catch (error) {
      console.error(
        "Gagal mengambil pengguna:",
        error.response?.data?.msg || error.message
      );
      setError(error.response?.data?.msg || "Terjadi kesalahan");
    }
  };

  // Filter users based on search term for name
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  // Get current users for the current page
  const currentUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col min-h-screen text-gray-800 bg-white">
      <main className="flex flex-1 overflow-hidden">
        <section className="flex-1 p-8 overflow-auto">
          <h1 className="mb-5 text-3xl font-semibold text-gray-800">
            Progres Belajar
          </h1>

          {error && <p className="mb-4 text-center text-red-500">{error}</p>}

          <div className="flex flex-col mb-6 space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <span>Menampilkan</span>
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
              <span>data</span>
            </div>
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
              <select
                value={selectedClass}
                onChange={(e) => {
                  setSelectedClass(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md md:w-40 focus:outline-none focus:ring-1 focus:ring-purple-600"
              >
                <option value="">Semua Kelas</option>
                {classes.map((cls) => (
                  <option key={cls} value={cls}>
                    {cls}
                  </option>
                ))}
              </select>
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Cari nama..."
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md md:w-64 focus:outline-none focus:ring-1 focus:ring-purple-600"
              />
            </div>
          </div>

          <table className="w-full mt-5 text-base text-center text-gray-700 border">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-3 py-2 font-semibold text-center select-none">
                  NIS
                </th>
                <th className="px-3 py-2 font-semibold text-center select-none">
                  Nama
                </th>
                <th className="px-3 py-2 font-semibold text-center select-none">
                  Kelas
                </th>
                <th className="px-3 py-2 font-semibold text-center select-none">
                  Progres Belajar
                </th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.length === 0 ? (
                <tr>
                  <td
                    colSpan="4"
                    className="px-3 py-2 text-base text-center text-gray-500"
                  >
                    Tidak ada data
                  </td>
                </tr>
              ) : (
                currentUsers.map((user) => (
                  <tr key={user.uuid} className="border-b border-gray-200">
                    <td className="px-3 py-2 font-mono text-base text-center select-text">
                      {user.nis}
                    </td>
                    <td className="px-3 py-2 font-mono text-base text-center select-text">
                      {user.name}
                    </td>
                    <td className="px-3 py-2 font-mono text-base text-center select-text">
                      {user.class || "-"}
                    </td>
                    <td className="px-3 py-2 font-mono text-base text-center select-text">
                      <div className="flex flex-col items-center">
                        <div className="w-3/4 h-4 overflow-hidden bg-gray-200 rounded">
                          <div
                            className="flex items-center justify-center h-full text-xs font-semibold text-white bg-blue-500"
                            style={{
                              width: `${user.progress || 0}%`,
                            }}
                          >
                            {user.progress !== null
                              ? `${user.progress.toFixed(2)}%`
                              : "0%"}
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          <div className="flex justify-end mt-6 space-x-1 select-none">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="px-3 py-1 text-xs font-semibold text-white bg-gray-500 rounded-l hover:bg-gray-600"
              disabled={currentPage === 1}
            >
              «
            </button>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="px-3 py-1 text-xs font-semibold text-white bg-gray-500 hover:bg-gray-600"
              disabled={currentPage === 1}
            >
              ‹
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`bg-gray-500 text-white text-xs font-semibold px-3 py-1 ${
                  currentPage === index + 1 ? "bg-gray-700" : ""
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className="px-3 py-1 text-xs font-semibold text-white bg-gray-500 hover:bg-gray-600"
              disabled={currentPage === totalPages}
            >
              ›
            </button>
            <button
              onClick={() => setCurrentPage(totalPages)}
              className="px-3 py-1 text-xs font-semibold text-white bg-gray-500 rounded-r hover:bg-gray-600"
              disabled={currentPage === totalPages}
            >
              »
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProgresBelajar;
