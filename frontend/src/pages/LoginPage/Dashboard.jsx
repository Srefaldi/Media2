import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { getMe } from "../../features/authSlice.js";
import Navbar from "../../components/Landing/NavbarLogin/NavbarLogin";
import Footer from "../../components/Landing/Footer";
import InfoModal from "../../components/Home/Dashboard/InfoModal";
import Informasi from "../../components/Home/Dashboard/ModalInformasi";
import daftarBab from "../Home/Materi/daftarBab.json";

// Impor gambar internal
import petunjukImage from "../../assets/img/petunjuk-penggunaan.png";
import materiImage from "../../assets/img/mulai-belajar.png";
import informasiImage from "../../assets/img/informasi-icon.png";

const UserDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInformasiOpen, setIsInformasiOpen] = useState(false);
  const [lastLessonPath, setLastLessonPath] = useState("/materi");

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);

  useEffect(() => {
    if (user?.progress) {
      const totalLessons = 39;
      const completedCount = Math.round((user.progress / 100) * totalLessons);
      const allLessons = daftarBab.flatMap((bab) =>
        bab.subBab.map((sub) => sub.path)
      );
      // Ambil materi terakhir yang diselesaikan atau berikutnya
      const lastCompletedIndex = Math.min(
        completedCount,
        allLessons.length - 1
      );
      const nextLessonPath = allLessons[lastCompletedIndex] || "/materi";
      setLastLessonPath(nextLessonPath);
      console.log("Last lesson path:", nextLessonPath);
    }
  }, [user]);

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
        <div className="flex-1 p-6 bg-white">
          <main className="container px-4 py-4 mx-auto">
            <h1 className="mb-8 text-4xl font-bold text-center text-gray-800">
              DASAR-DASAR PEMROGRAMAN C#
            </h1>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div
                className="p-8 text-center bg-white rounded-lg shadow-md"
                style={{ border: "4px solid #6E2A7F" }}
              >
                <h2 className="mb-4 text-2xl font-bold text-gray-800">
                  PETUNJUK PENGGUNAAN
                </h2>
                <img
                  alt="Illustration of a book, glasses, and a cup of coffee"
                  className="mx-auto mb-4"
                  height="350"
                  src={petunjukImage}
                  width="350"
                />
                <button
                  className="px-4 py-2 text-gray-600 bg-transparent border border-gray-600 rounded hover:bg-gray-300"
                  onClick={handleOpenModal}
                >
                  LIHAT PETUNJUK
                </button>
              </div>
              <div
                className="p-8 text-center bg-white rounded-lg shadow-md"
                style={{ border: "4px solid #6E2A7F" }}
              >
                <h2 className="mb-4 text-2xl font-bold text-gray-800">
                  MATERI
                </h2>
                <img
                  alt="Illustration of a person typing on a laptop with code on the screen"
                  className="mx-auto mb-4"
                  height="350"
                  src={materiImage}
                  width="350"
                />
                <Link
                  to={lastLessonPath}
                  className="px-4 py-2 text-white rounded hover:bg-gray-300"
                  style={{ backgroundColor: "#6E2A7F" }}
                >
                  MULAI BELAJAR
                </Link>
              </div>
              <div
                className="p-8 text-center bg-white rounded-lg shadow-md"
                style={{ border: "4px solid #6E2A7F" }}
              >
                <h2 className="mb-4 text-2xl font-bold text-gray-800">
                  INFORMASI
                </h2>
                <img
                  alt="Illustration of people around a large FAQ text"
                  className="mx-auto mb-4"
                  height="350"
                  src={informasiImage}
                  width="350"
                />
                <Link
                  to="/informasi"
                  className="px-4 py-2 text-gray-600 bg-transparent border border-gray-600 rounded hover:bg-gray-300"
                  onClick={handleOpenInformasi}
                >
                  LIHAT INFORMASI
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
      <InfoModal isOpen={isModalOpen} toggleModal={handleCloseModal} />
      <Informasi isOpen={isInformasiOpen} toggleModal={handleCloseInformasi} />
    </div>
  );
};

export default UserDashboard;
