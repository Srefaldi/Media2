import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom"; // Tambahkan useNavigate
import { useSelector } from "react-redux";
import axios from "axios";
import MateriSidebar from "./MateriSidebar";
import Navbar from "./Navbar";
import Footer from "../../../components/Landing/Footer2";
import Swal from "sweetalert2";
import daftarBab from "./daftarBab.json";

const MateriLayout = () => {
  const [progress, setProgress] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate(); // Tambahkan navigate
  const totalLessons = 60;

  useEffect(() => {
    console.log("Current user:", user);
    const fetchProgress = async () => {
      if (!user?.uuid) {
        console.log("UUID pengguna tidak ditemukan, melewati fetchProgress");
        // Jangan tampilkan alert, langsung arahkan ke login
        navigate("/login");
        return;
      }
      try {
        console.log("Mengambil progres untuk pengguna:", user.uuid);
        const response = await axios.get("http://localhost:5000/me", {
          withCredentials: true,
        });
        console.log("Respon progres:", response.data);
        const fetchedProgress = response.data.progress ?? 0;
        setProgress(fetchedProgress);
        const completedCount = Math.round(
          (fetchedProgress / 100) * totalLessons
        );
        const lessons = daftarBab
          .flatMap((bab) => bab.subBab.map((sub) => sub.path))
          .slice(0, completedCount);
        setCompletedLessons(lessons);
        console.log("Mengatur completedLessons:", lessons);
      } catch (error) {
        console.error(
          "Error mengambil progres:",
          error.response?.data || error.message
        );
        Swal.fire({
          icon: "error",
          title: "Gagal Memuat Progres",
          text:
            error.response?.data?.msg ||
            "Tidak dapat mengambil progres dari server. Silakan coba lagi.",
        });
      }
    };
    fetchProgress();
  }, [user, navigate]);

  const updateProgressInBackend = async (newProgress) => {
    if (!user?.uuid) {
      console.log(
        "UUID pengguna tidak ditemukan, tidak dapat memperbarui progres"
      );
      navigate("/login"); // Arahkan ke login jika user tidak ada
      return;
    }
    try {
      console.log(
        "Memperbarui progres untuk pengguna:",
        user.uuid,
        "ke",
        newProgress
      );
      const response = await axios.patch(
        `http://localhost:5000/users/${user.uuid}/progress`,
        { progress: newProgress },
        { withCredentials: true }
      );
      console.log("Respon pembaruan progres:", response.data);
      setProgress(newProgress);
      const completedCount = Math.round((newProgress / 100) * totalLessons);
      const lessons = daftarBab
        .flatMap((bab) => bab.subBab.map((sub) => sub.path))
        .slice(0, completedCount);
      setCompletedLessons(lessons);
      console.log(
        "Mengatur ulang completedLessons setelah pembaruan:",
        lessons
      );
    } catch (error) {
      console.error(
        "Error memperbarui progres:",
        error.response?.data || error.message
      );
      Swal.fire({
        icon: "error",
        title: "Gagal Memperbarui Progres",
        text:
          error.response?.data?.msg ||
          "Tidak dapat menyimpan progres ke server. Silakan coba lagi.",
      });
    }
  };

  const handleLessonComplete = (lessonId) => {
    console.log("handleLessonComplete dipanggil dengan lessonId:", lessonId);
    if (!completedLessons.includes(lessonId)) {
      const newCompletedLessons = [...completedLessons, lessonId];
      setCompletedLessons(newCompletedLessons);

      const newProgress = (newCompletedLessons.length / totalLessons) * 100;
      const roundedProgress = parseFloat(newProgress.toFixed(2));
      console.log(
        "New completedLessons:",
        newCompletedLessons,
        "New progress:",
        roundedProgress
      );
      updateProgressInBackend(roundedProgress);
    } else {
      console.log("Materi sudah diselesaikan:", lessonId);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 mt-20">
        <div className="fixed top-20 left-0 w-80 h-[calc(100vh-80px)] bg-white">
          <MateriSidebar
            completedLessons={completedLessons}
            progress={progress}
          />
        </div>
        <div className="flex-1 p-6 overflow-y-auto ml-80">
          <Outlet context={{ handleLessonComplete }} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MateriLayout;
