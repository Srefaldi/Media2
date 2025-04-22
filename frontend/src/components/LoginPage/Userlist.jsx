import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Userlist = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(20); // Set default to 20
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:5000/users/${userId}`);
    getUsers();
  };

  // Filter users based on search term
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
            Data Siswa
          </h1>
          <Link
            to="/users/add"
            className="px-4 py-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            TAMBAH SISWA
          </Link>

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
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari..."
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md md:w-64 focus:outline-none focus:ring-1 focus:ring-purple-600"
            />
          </div>

          <table className="w-full mt-5 text-sm text-left text-gray-700 border border-spacing-y-2">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-3 py-2 font-semibold border-r border-gray-200 select-none">
                  No
                </th>
                <th className="px-3 py-2 font-semibold border-r border-gray-200 select-none">
                  Nama
                </th>
                <th className="px-3 py-2 font-semibold border-r border-gray-200 select-none">
                  NIS
                </th>
                <th className="px-3 py-2 font-semibold border-r border-gray-200 select-none">
                  Kelas
                </th>
                <th className="px-3 py-2 font-semibold border-r border-gray-200 select-none">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, index) => (
                <tr key={user.uuid} className="border-b border-gray-200">
                  <td className="px-3 py-2 font-mono text-xs border-r border-gray-200 select-text">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td className="px-3 py-2 font-mono text-xs border-r border-gray-200 select-text">
                    {user.name}
                  </td>
                  <td className="px-3 py-2 font-mono text-xs border-r border-gray-200 select-text">
                    {user.email}
                  </td>
                  <td className="px-3 py-2 font-mono text-xs border-r border-gray-200 select-text">
                    {user.role}
                  </td>
                  <td className="px-3 py-2 space-x-2 font-mono text-xs border-r border-gray-200 select-text">
                    <Link
                      to={`/users/edit/${user.uuid}`}
                      className="px-3 py-1 text-xs font-semibold text-white bg-green-500 rounded hover:bg-green-600"
                    >
                      Perbarui
                    </Link>
                    <button
                      onClick={() => deleteUser(user.uuid)}
                      className="px-3 py-1 text-xs font-semibold text-white bg-red-600 rounded hover:bg-red-700"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end mt-6 space-x-1 select-none">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="px-3 py-1 text-xs font-semibold text-white bg-gray-500 rounded-l hover:bg-gray-600"
              disabled={currentPage === 1}
            >
              &laquo;
            </button>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="px-3 py-1 text-xs font-semibold text-white bg-gray-500 hover:bg-gray-600"
              disabled={currentPage === 1}
            >
              &lsaquo;
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
              &rsaquo;
            </button>
            <button
              onClick={() => setCurrentPage(totalPages)}
              className="px-3 py-1 text-xs font-semibold text-white bg-gray-500 rounded-r hover:bg-gray-600"
              disabled={currentPage === totalPages}
            >
              &raquo;
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Userlist;
