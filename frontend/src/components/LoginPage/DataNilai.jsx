import React, { useState, useEffect } from "react";
import axios from "axios";

const ScoreList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedClass, setSelectedClass] = useState("");
  const [classes, setClasses] = useState([]);
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
      const response = await axios.get("http://localhost:5000/users", {
        withCredentials: true,
      });
      const uniqueClasses = [
        ...new Set(
          response.data.map((user) => user.class).filter((cls) => cls)
        ),
      ].sort(); // Sort classes alphabetically
      console.log("Daftar kelas unik:", uniqueClasses);
      setClasses(uniqueClasses);
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
      const meResponse = await axios.get("http://localhost:5000/me", {
        withCredentials: true,
      });
      console.log("Pengguna saat ini:", meResponse.data);

      const response = await axios.get("http://localhost:5000/users", {
        params: { class: selectedClass || undefined },
        withCredentials: true,
      });

      const filteredUsers = response.data.filter(
        (user) => user.role === "user"
      );
      console.log("Pengguna dengan role=user:", filteredUsers);

      const usersWithScores = await Promise.all(
        filteredUsers.map(async (user) => {
          try {
            const scoreResponse = await axios.get(
              `http://localhost:5000/scores/${user.uuid}`,
              {
                withCredentials: true,
              }
            );
            console.log(
              `Nilai untuk pengguna ${user.nis}:`,
              scoreResponse.data.scores
            );
            return { ...user, scores: scoreResponse.data.scores };
          } catch (error) {
            console.error(
              `Gagal mengambil nilai untuk pengguna ${user.nis}:`,
              error.response?.data?.msg || error.message
            );
            return { ...user, scores: [] };
          }
        })
      );
      console.log("Pengguna dengan nilai:", usersWithScores);
      setUsers(usersWithScores);
      setError(null);
    } catch (error) {
      console.error(
        "Gagal mengambil pengguna:",
        error.response?.data?.msg || error.message
      );
      setError(error.response?.data?.msg || "Terjadi kesalahan");
    }
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch = [user.name, user.class || ""]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass
      ? user.class?.toLowerCase() === selectedClass.toLowerCase()
      : true;
    return matchesSearch && matchesClass;
  });

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const currentUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getScore = (scores, type, chapter) => {
    const score = scores.find(
      (s) =>
        s.type === type &&
        (type === "evaluasi_akhir" ? true : s.chapter === chapter)
    );
    return score ? Math.floor(score.score) : "-";
  };

  const renderHeader = () => (
    <thead>
      <tr className="border-b border-gray-200">
        <th
          rowSpan={2}
          className="px-3 py-2 text-base font-semibold text-center align-middle select-none"
        >
          NIS
        </th>
        <th
          rowSpan={2}
          className="px-3 py-2 text-base font-semibold text-center align-middle select-none"
        >
          Nama
        </th>
        <th
          rowSpan={2}
          className="px-3 py-2 text-base font-semibold text-center align-middle select-none"
        >
          Kelas
        </th>
        <th
          colSpan={6}
          className="px-3 py-2 text-base font-semibold text-center select-none"
        >
          LATIHAN BAB
        </th>
        <th
          colSpan={6}
          className="px-3 py-2 text-base font-semibold text-center select-none"
        >
          KUIS BAB
        </th>
        <th
          rowSpan={2}
          className="px-3 py-2 text-base font-semibold text-center align-middle select-none"
        >
          EVALUASI AKHIR
        </th>
      </tr>
      <tr className="border-b border-gray-200">
        {[...Array(6)].map((_, i) => (
          <th
            key={`latihan-sub-${i}`}
            className="px-3 py-2 text-base font-semibold text-center select-none"
          >
            {i + 1}
          </th>
        ))}
        {[...Array(6)].map((_, i) => (
          <th
            key={`evaluasi-sub-${i}`}
            className="px-3 py-2 text-base font-semibold text-center select-none"
          >
            {i + 1}
          </th>
        ))}
      </tr>
    </thead>
  );

  const renderBody = () => (
    <tbody>
      {currentUsers.length === 0 ? (
        <tr>
          <td
            colSpan={16}
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
            {[...Array(6)].map((_, i) => (
              <td
                key={`latihan-data-${i}`}
                className="px-3 py-2 font-mono text-base text-center select-text"
              >
                {getScore(user.scores, "latihan", i + 1)}
              </td>
            ))}
            {[...Array(6)].map((_, i) => (
              <td
                key={`evaluasi-data-${i}`}
                className="px-3 py-2 font-mono text-base text-center select-text"
              >
                {getScore(user.scores, "evaluasi", i + 1)}
              </td>
            ))}
            <td className="px-3 py-2 font-mono text-base text-center select-text">
              {getScore(user.scores, "evaluasi_akhir", null)}
            </td>
          </tr>
        ))
      )}
    </tbody>
  );

  const renderPagination = () => (
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
          className={`px-3 py-1 text-xs font-semibold text-white bg-gray-500 ${
            currentPage === index + 1 ? "bg-gray-700" : ""
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
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
  );

  return (
    <div className="flex flex-col min-h-screen text-gray-800 bg-white">
      <main className="flex flex-1 overflow-hidden">
        <section className="flex-1 p-8 overflow-auto">
          <h1 className="mb-5 text-3xl font-semibold text-gray-800">
            Daftar Nilai Siswa
          </h1>

          {error && <p className="mb-4 text-center text-red-500">{error}</p>}

          <div className="flex flex-col mb-6 space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="flex items-center mt-4 space-x-2 text-sm text-gray-700">
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
            <div className="flex space-x-2">
              <select
                value={selectedClass}
                onChange={(e) => {
                  setSelectedClass(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md md:w-64 focus:outline-none focus:ring-1 focus:ring-purple-600"
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
                placeholder="Cari nama atau kelas..."
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md md:w-64 focus:outline-none focus:ring-1 focus:ring-purple-600"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full mt-5 text-base text-center text-gray-700 bg-white border">
              {renderHeader()}
              {renderBody()}
            </table>
          </div>

          {renderPagination()}
        </section>
      </main>
    </div>
  );
};

export default ScoreList;
