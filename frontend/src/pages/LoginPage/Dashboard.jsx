import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { getMe } from "../../features/authSlice";
import Navbar from "../../components/Landing/NavbarLogin/NavbarLogin";
import Footer from "../../components/Landing/Footer";
import Sidebar from "../../components/LoginPage/Sidebar";

import InfoModal from "../../components/Home/Dashboard/InfoModal";
import Informasi from "../../components/Home/Dashboard/ModalInformasi";
import { IoStatsChart, IoArrowUp, IoArrowDown } from "react-icons/io5"; // Import ikon tambahan

// Impor gambar internal
import petunjukImage from "../../assets/img/petunjuk-penggunaan.png"; // Ganti dengan path yang sesuai
import materiImage from "../../assets/img/mulai-belajar.png"; // Ganti dengan path yang sesuai
import informasiImage from "../../assets/img/informasi-icon.png"; // Ganti dengan path yang sesuai

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInformasiOpen, setIsInformasiOpen] = useState(false);
  const [token, setToken] = useState(""); // State untuk menyimpan token

  // Fungsi untuk menghasilkan token baru
  const generateToken = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let token = "";
    for (let i = 0; i < 8; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
  };

  // Fungsi untuk refresh token
  const refreshToken = () => {
    setToken(generateToken());
  };

  useEffect(() => {
    dispatch(getMe());
    // Generate initial token
    setToken(generateToken());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenInformasi = () => {
    setIsInformasiOpen(true);
  };

  const handleCloseInformasi = () => {
    setIsInformasiOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        {/* Tampilkan Sidebar hanya jika user adalah admin */}
        {user?.role === "admin" && <Sidebar />}

        {/* Konten utama hanya muncul jika user bukan admin */}
        {user?.role !== "admin" ? (
          <div className="flex-1 p-6 bg-white">
            {/* Kode baru dimulai di sini */}
            <main className="container px-4 py-4 mx-auto">
              <h1 className="mb-8 text-4xl font-bold text-center text-gray-800">
                DASAR-DASAR PEMROGRAMAN C#
              </h1>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div
                  className="p-8 text-center bg-white rounded-lg shadow-md"
                  style={{ border: "4px solid #6E2A7F" }} // Style inline untuk border
                >
                  <h2 className="mb-4 text-2xl font-bold text-gray-800">
                    PETUNJUK PENGGUNAAN
                  </h2>
                  <img
                    alt="Illustration of a book, glasses, and a cup of coffee"
                    className="mx-auto mb-4"
                    height="350"
                    src={petunjukImage} // Ganti dengan gambar internal
                    width="350"
                  />
                  <button className="px-4 py-2 text-gray-600 bg-transparent border border-gray-600 rounded hover:bg-gray-300">
                    LIHAT PETUNJUK
                  </button>
                </div>
                <div
                  className="p-8 text-center bg-white rounded-lg shadow-md"
                  style={{ border: "4px solid #6E2A7F" }} // Style inline untuk border
                >
                  <h2 className="mb-4 text-2xl font-bold text-gray-800">
                    MATERI
                  </h2>
                  <img
                    alt="Illustration of a person typing on a laptop with code on the screen"
                    className="mx-auto mb-4"
                    height="350"
                    src={materiImage} // Ganti dengan gambar internal
                    width="350"
                  />
                  <Link
                    to="/materi"
                    className="px-4 py-2 text-white rounded hover:bg-gray-300"
                    style={{ backgroundColor: "#6E2A7F" }}
                  >
                    MULAI BELAJAR
                  </Link>
                </div>
                <div
                  className="p-8 text-center bg-white rounded-lg shadow-md"
                  style={{ border: "4px solid #6E2A7F" }} // Style inline untuk border
                >
                  <h2 className="mb-4 text-2xl font-bold text-gray-800">
                    INFORMASI
                  </h2>
                  <img
                    alt="Illustration of people around a large FAQ text"
                    className="mx-auto mb-4"
                    height="350"
                    src={informasiImage} // Ganti dengan gambar internal
                    width="350"
                  />
                  <Link
                    to="/informasi"
                    className="px-4 py-2 text-gray-600 bg-transparent border border-gray-600 rounded hover:bg-gray-300"
                  >
                    LIHAT INFORMASI
                  </Link>
                </div>
              </div>
            </main>
            {/* Kode baru berakhir di sini */}
          </div>
        ) : (
          <div className="flex flex-col flex-1 p-6 bg-gray-100">
            <h2 className="mb-4 text-2xl font-bold text-center">DASHBOARD</h2>
            <div className="p-4 mb-6 bg-gray-100 rounded">
              <div className="flex items-center justify-between p-4 text-black bg-white rounded">
                <div className="flex items-center space-x-2">
                  <i className="text-gray-600 fas fa-key"></i>
                  <span className="font-bold">TOKEN</span>
                </div>
                <div className="mt-2 font-bold text-gray-900">{token}</div>
                {/* <button
                  className="px-4 py-2 ml-4 text-white bg-blue-500 rounded hover:bg-blue-600"
                  onClick={refreshToken}
                >
                  Refresh Token
                </button> */}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center justify-between p-4 text-white bg-purple-600 border rounded">
                <div>
                  <div className="font-bold">JUMLAH SISWA</div>
                  <div className="mt-2">20 SISWA</div>
                </div>
                <i className="text-3xl fas fa-users"></i>
              </div>
              <div className="flex items-center justify-between p-4 text-white bg-yellow-400 rounded">
                <div>
                  <div className="font-bold">PROGRES BELAJAR</div>
                  <div className="mt-2">15/36 SELESAI</div>
                </div>
                <i className="text-3xl fas fa-chart-pie"></i>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 text-white bg-blue-400 rounded">
                <div className="flex items-center">
                  <IoStatsChart className="mr-2" />{" "}
                  <div className="font-bold">NILAI RATA-RATA</div>
                </div>
                <div className="mt-2">
                  <p>Kuis 1: -</p>
                  <p>Kuis 2: -</p>
                  <p>Kuis 3: -</p>
                  <p>Kuis 4: - </p>
                  <p>Kuis 5: -</p>
                  <p>Kuis 6: -</p>
                  <p>Evaluasi: -</p>
                </div>
              </div>
              <div className="p-4 text-white bg-green-400 rounded">
                <div className="flex items-center">
                  <IoArrowUp className="mr-2" />{" "}
                  <div className="font-bold">NILAI TERTINGGI</div>
                </div>
                <div className="mt-2">
                  <p>Kuis 1: -</p>
                  <p>Kuis 2: -</p>
                  <p>Kuis 3: -</p>
                  <p>Kuis 4: - </p>
                  <p>Kuis 5: -</p>
                  <p>Kuis 6: -</p>
                  <p>Evaluasi: -</p>
                </div>
              </div>
              <div className="p-4 text-white bg-red-400 rounded">
                <div className="flex items-center">
                  <IoArrowDown className="mr-2" />{" "}
                  <div className="font-bold">NILAI TERENDAH</div>
                </div>
                <div className="mt-2">
                  <p>Kuis 1: -</p>
                  <p>Kuis 2: -</p>
                  <p>Kuis 3: -</p>
                  <p>Kuis 4: - </p>
                  <p>Kuis 5: -</p>
                  <p>Kuis 6: -</p>
                  <p>Evaluasi: -</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
      <InfoModal isOpen={isModalOpen} toggleModal={handleCloseModal} />
      <Informasi isOpen={isInformasiOpen} toggleModal={handleCloseInformasi} />
    </div>
  );
};

export default Dashboard;
