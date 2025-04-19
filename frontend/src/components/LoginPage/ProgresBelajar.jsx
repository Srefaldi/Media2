import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProgresBelajar = () => {
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
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      <main className="flex flex-1 overflow-hidden">
        <section className="flex-1 p-8 overflow-auto">
          <h1 className="font-semibold text-3xl mb-5 text-gray-800">
            Progres Belajar
          </h1>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 space-y-4 md:space-y-0">
            <div className="mt-4 flex items-center space-x-2 text-gray-700 text-sm">
              <span>Menampilkan</span>
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-purple-600"
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
              className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full md:w-64 focus:outline-none focus:ring-1 focus:ring-purple-600"
            />
          </div>

          <table className="mt-5 w-full text-left text-gray-700 text-sm border border-spacing-y-2">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="font-semibold px-3 py-2 border-r border-gray-200 select-none">
                  No
                </th>
                <th className="font-semibold px-3 py-2 border-r border-gray-200 select-none">
                  Nama
                </th>
                <th className="font-semibold px-3 py-2 border-r border-gray-200 select-none">
                  Kelas
                </th>
                <th className="font-semibold px-3 py-2 border-r border-gray-200 select-none">
                  Progress
                </th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, index) => (
                <tr key={user.uuid} className="border-b border-gray-200">
                  <td className="px-3 py-2 border-r border-gray-200 font-mono text-xs select-text">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td className="px-3 py-2 border-r border-gray-200 font-mono text-xs select-text">
                    {user.name}
                  </td>
                  <td className="px-3 py-2 border-r border-gray-200 font-mono text-xs select-text">
                    {user.class}
                  </td>
                  <td className="px-3 py-2 border-r border-gray-200 font-mono text-xs select-text">
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                            75% {/* Dummy progress value */}
                          </span>
                        </div>
                      </div>
                      <div className=" flex h-2 mb-2 overflow-hidden text-xs bg-gray-200 rounded">
                        <div
                          className="flex flex-col justify-center bg-teal-500 text-center text-white"
                          style={{ width: `75%` }} // Dummy progress width
                        ></div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end mt-6 space-x-1 select-none">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="bg-gray-500 text-white text-xs font-semibold px-3 py-1 rounded-l hover:bg-gray-600"
              disabled={currentPage === 1}
            >
              &laquo;
            </button>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="bg-gray-500 text-white text-xs font-semibold px-3 py-1 hover:bg-gray-600"
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
              className="bg-gray-500 text-white text-xs font-semibold px-3 py-1 hover:bg-gray-600"
              disabled={currentPage === totalPages}
            >
              &rsaquo;
            </button>
            <button
              onClick={() => setCurrentPage(totalPages)}
              className="bg-gray-500 text-white text-xs font-semibold px-3 py-1 rounded-r hover:bg-gray-600"
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

export default ProgresBelajar;
