import React, { useState, useEffect } from "react";
import axios from "axios";

const ScoreList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const meResponse = await axios.get("http://localhost:5000/me", {
        withCredentials: true,
      });
      console.log("Current user:", meResponse.data);
      const response = await axios.get("http://localhost:5000/users", {
        withCredentials: true,
      });
      const filteredUsers = response.data.filter(
        (user) => user.role === "user"
      );
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
              `Scores for user ${user.nis}:`,
              scoreResponse.data.scores
            );
            return { ...user, scores: scoreResponse.data.scores };
          } catch (error) {
            console.error(
              `Error fetching scores for user ${user.nis}:`,
              error.response?.data || error.message
            );
            return { ...user, scores: [] };
          }
        })
      );
      console.log("Users with scores:", usersWithScores);
      setUsers(usersWithScores);
    } catch (error) {
      console.error(
        "Error fetching users:",
        error.response?.data || error.message
      );
    }
  };

  const filteredUsers = users.filter((user) =>
    [user.name, user.class || ""]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

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
    return score ? score.score.toFixed(2) : "-";
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
          Latihan Bab
        </th>
        <th
          colSpan={4}
          className="px-3 py-2 text-base font-semibold text-center select-none"
        >
          Evaluasi Bab
        </th>
        <th
          rowSpan={2}
          className="px-3 py-2 text-base font-semibold text-center align-middle select-none"
        >
          Evaluasi Akhir
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
        {[...Array(4)].map((_, i) => (
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
            colSpan={14}
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
            {[...Array(4)].map((_, i) => (
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

          <div className="flex flex-col mb-6 space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="flex items-center mt-4 space-x-2 text-sm text-gray-700">
              <span>Menampilkan</span>
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
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
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari nama atau kelas..."
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md md:w-64 focus:outline-none focus:ring-1 focus:ring-purple-600"
              />
              {/* <button
                onClick={getUsers}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-purple-600"
              >
                Refresh
              </button> */}
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
