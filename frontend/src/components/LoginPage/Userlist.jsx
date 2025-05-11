import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Userlist = () => {
  const [users, setUsers] = useState([]);
  const [classes, setClasses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editUser, setEditUser] = useState({ uuid: "", name: "", class: "" });
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getClasses();
    getUsers();
  }, []);

  const getClasses = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_ENDPOINT}/classes`,
        {
          withCredentials: true,
        }
      );
      setClasses(response.data);
    } catch (error) {
      console.error(
        "Error fetching classes:",
        error.response?.data || error.message
      );
    }
  };

  const getUsers = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_ENDPOINT}/users`,
        {
          params: { class: selectedClass },
          withCredentials: true,
        }
      );
      setUsers(response.data); // Data sudah difilter di backend
    } catch (error) {
      console.error(
        "Error fetching users:",
        error.response?.data || error.message
      );
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_ENDPOINT}/users/${userId}`,
        {
          withCredentials: true,
        }
      );
      await Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Siswa berhasil dihapus.",
        timer: 1500,
        showConfirmButton: false,
      });
      getUsers();
    } catch (error) {
      console.error(
        "Error deleting user:",
        error.response?.data || error.message
      );
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text:
          error.response?.data?.msg ||
          "Terjadi kesalahan saat menghapus siswa.",
      });
    }
  };

  const openEditModal = (user) => {
    setEditUser({
      uuid: user.uuid,
      name: user.name,
      class: user.class || "",
    });
    setMsg("");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditUser({ uuid: "", name: "", class: "" });
    setMsg("");
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `${import.meta.env.VITE_API_ENDPOINT}/users/${editUser.uuid}`,
        {
          name: editUser.name,
          class: editUser.class,
        },
        {
          withCredentials: true,
        }
      );
      await Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Data siswa berhasil diperbarui.",
        timer: 1500,
        showConfirmButton: false,
      });
      closeModal();
      getUsers();
    } catch (error) {
      console.error(
        "Error updating user:",
        error.response?.data || error.message
      );
      setMsg(
        error.response?.data?.msg || "Terjadi kesalahan saat memperbarui siswa."
      );
    }
  };

  // Update users when selectedClass changes
  useEffect(() => {
    getUsers();
  }, [selectedClass]);

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
            Data Siswa
          </h1>

          <div className="flex flex-col mb-6 space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-700">
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
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
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
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari nama..."
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md md:w-64 focus:outline-none focus:ring-1 focus:ring-purple-600"
              />
            </div>
          </div>

          <table className="w-full mt-5 text-base text-gray-700 border">
            <thead>
              <tr className="text-center border-b border-gray-200">
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
                  Status Belajar
                </th>
                <th className="px-3 py-2 font-semibold text-center select-none">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr
                  key={user.uuid}
                  className="items-center text-center border-b border-gray-200"
                >
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
                    {user.status === "BELUM SELESAI" ? (
                      <span className="px-2 py-1 text-white bg-red-500 rounded">
                        BELUM SELESAI
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-white bg-green-500 rounded">
                        SELESAI
                      </span>
                    )}
                  </td>
                  <td className="flex justify-center px-3 py-2 space-x-2 font-mono text-base text-center select-text">
                    <button
                      onClick={() => openEditModal(user)}
                      className="px-3 py-1 text-sm font-semibold text-white bg-green-500 rounded hover:bg-green-600"
                    >
                      Perbarui
                    </button>
                    <button
                      onClick={() => deleteUser(user.uuid)}
                      className="px-3 py-1 text-sm font-semibold text-white bg-red-600 rounded hover:bg-red-700"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Modal for Editing User */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h2 className="mb-4 text-xl font-semibold text-gray-800">
                  Perbarui Data Siswa
                </h2>
                <form onSubmit={updateUser}>
                  {msg && (
                    <p className="mb-4 text-center text-red-500">{msg}</p>
                  )}
                  <div className="mb-4">
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Nama
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600"
                      value={editUser.name}
                      onChange={(e) =>
                        setEditUser({ ...editUser, name: e.target.value })
                      }
                      placeholder="Nama Lengkap"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Kelas
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600"
                      value={editUser.class}
                      onChange={(e) =>
                        setEditUser({ ...editUser, class: e.target.value })
                      }
                      placeholder="Contoh: 10A"
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                    >
                      Simpan
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

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

export default Userlist;
