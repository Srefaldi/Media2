import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { getMe } from "../../features/authSlice";
import Navbar from "../../components/Landing/NavbarLogin/NavbarLogin";
import Footer from "../../components/Landing/Footer";
import Sidebar from "../../components/LoginPage/Sidebar";
import csharpIcon from "../../assets/img/logo-belajar.png";
import IconNext from "../../assets/img/next.png";
import info from "../../assets/img/info.png";
import InfoModal from "../../components/Home/Dashboard/InfoModal";
import Informasi from "../../components/Home/Dashboard/ModalInformasi";
const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInformasiOpen, setIsInformasiOpen] = useState(false);

  useEffect(() => {
    dispatch(getMe());
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
          <div className="flex-1 p-6 bg-gray-100">
            <div className="relative mb-6">
              <button
                className="absolute top-0 right-0 flex items-center px-4 py-2 rounded-md hover:bg-gray focus:outline-none"
                onClick={handleOpenInformasi}
              >
                <img src={info} alt="Icon" className="w-7 h-7" />
              </button>
              <div className="welcome-card bg-[#68217A] text-white p-4 rounded-lg flex flex-col">
                <h2 className="text-2xl font-bold">
                  Selamat Datang, {user?.name}!
                </h2>
                <p className="mt-2">Mulai belajar lagi, Lanjutkan Progresmu.</p>
                <h4 className="text-lg font-semibold">
                  Progress Terakhir Belajar
                </h4>
                <div className="flex items-center mt-4">
                  <img
                    alt="C# Dasar course icon"
                    className="w-24 h-24 mr-4"
                    src={csharpIcon}
                  />
                  <div>
                    <h5 className="mb-3 text-lg">C# Dasar</h5>
                    <p>Materi</p>
                    <div className="relative mt-2">
                      <div className="h-2 bg-white rounded">
                        <div
                          className="h-2 bg-gray-500 rounded"
                          style={{ width: "5.13%" }}
                        ></div>
                      </div>
                      <p className="absolute top-0 left-0 transform -translate-y-6">
                        5.13%
                      </p>
                    </div>
                    <p>2 / 39 Submateri</p>
                    <button
                      className="mt-3 ml-auto bg-white border border-[#68217A] py-2 px-4 rounded-md hover:bg-[#f0f0f0] focus:outline-none"
                      style={{ color: "#68217A" }}
                      onClick={handleOpenModal}
                    >
                      Lihat Detail Progress
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-end mt-auto">
                  <Link
                    to="/materi"
                    className="flex items-center font-bold text-white"
                  >
                    LANJUTKAN BELAJAR
                    <img src={IconNext} alt="Next" className="w-6 h-6 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center flex-1 p-6 bg-gray-100">
            <h2 className="text-xl font-bold">Konten Admin.</h2>
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
