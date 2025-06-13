import React, { useState, useEffect, useRef } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import MateriSidebar from "./MateriSidebar";
import Navbar from "./Navbar";
import Footer from "../../../components/Landing/Footer2";
import Swal from "sweetalert2";
import daftarBab from "./daftarBab.json";
import { getMe, validateLesson } from "../../../features/authSlice";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const MateriLayout = () => {
  const [progress, setProgress] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, isError, isLoading, completedLessons } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const totalLessons = 56;
  const previousPathRef = useRef(location.pathname);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    if (!user && !isLoading) {
      dispatch(getMe());
    }
  }, [dispatch, user, isLoading]);

  useEffect(() => {
    const fetchProgress = async () => {
      if (!user?.uuid || !isAuthenticated) {
        console.log("UUID pengguna tidak ditemukan atau tidak terautentikasi");
        return;
      }
      try {
        console.log("Mengambil progres untuk pengguna:", user.uuid);
        const response = await axios.get(
          `${import.meta.env.VITE_API_ENDPOINT}/me`,
          {
            withCredentials: true,
          }
        );
        console.log("Respon progres:", response.data);
        setProgress(response.data.progress ?? 0);
      } catch (error) {
        console.error(
          "Error mengambil progres:",
          error.response?.data || error.message
        );
        if (error.response?.status === 401) {
          setIsAuthenticated(false);
          dispatch(getMe());
        } else {
          Swal.fire({
            icon: "error",
            title: "Gagal Memuat Progres",
            text:
              error.response?.data?.msg ||
              "Tidak dapat mengambil progres dari server. Silakan coba lagi.",
          });
        }
      }
    };
    fetchProgress();
  }, [user?.uuid, isAuthenticated, dispatch]);

  useEffect(() => {
    if (isError && !isLoading && !user) {
      console.log("Error autentikasi, mengarahkan ke login");
      navigate("/login");
    }
  }, [isError, isLoading, user, navigate]);

  useEffect(() => {
    const restrictAccess = async () => {
      const currentPath = location.pathname;
      const allLessons = daftarBab.flatMap((bab) =>
        bab.subBab.map((sub) => sub.path)
      );
      const currentIndex = allLessons.indexOf(currentPath);
      const previousPath = previousPathRef.current;

      console.log("Restrict Access - Current Path:", currentPath);
      console.log("Restrict Access - Previous Path:", previousPath);
      console.log("Restrict Access - Completed Lessons:", completedLessons);

      // Jika path tidak valid, arahkan ke materi terakhir yang diselesaikan
      if (currentIndex === -1) {
        const startLesson = getStartLesson();
        console.log("Navigating to start lesson (invalid path):", startLesson);
        navigate(startLesson);
        return;
      }

      try {
        const response = await dispatch(
          validateLesson({ lessonPath: currentPath })
        ).unwrap();
        console.log("Validate Lesson Response:", response);
        if (!response.isAccessible) {
          Swal.fire({
            icon: "error",
            title: "Akses Ditolak",
            text: "Anda harus menyelesaikan materi sebelumnya terlebih dahulu.",
          });
          // Periksa apakah previousPath valid dan diizinkan
          const previousIndex = allLessons.indexOf(previousPath);
          if (
            previousIndex !== -1 &&
            (completedLessons.includes(previousPath) ||
              previousIndex === 0 ||
              (previousIndex > 0 &&
                completedLessons.includes(allLessons[previousIndex - 1])))
          ) {
            console.log("Navigating back to previous path:", previousPath);
            navigate(previousPath);
          } else {
            const startLesson = getStartLesson();
            console.log(
              "Previous path invalid, navigating to start lesson:",
              startLesson
            );
            navigate(startLesson);
          }
        } else {
          // Jika akses diizinkan, update previousPath
          console.log("Access allowed, updating previous path:", currentPath);
          previousPathRef.current = currentPath;
        }
      } catch (error) {
        console.error("Error validasi akses materi:", error);
        Swal.fire({
          icon: "error",
          title: "Gagal Memvalidasi Akses",
          text:
            error.message || "Terjadi kesalahan saat memvalidasi akses materi.",
        });
        // Coba kembali ke previousPath jika valid
        const previousIndex = allLessons.indexOf(previousPath);
        if (
          previousIndex !== -1 &&
          (completedLessons.includes(previousPath) ||
            previousIndex === 0 ||
            (previousIndex > 0 &&
              completedLessons.includes(allLessons[previousIndex - 1])))
        ) {
          console.log(
            "Error - Navigating back to previous path:",
            previousPath
          );
          navigate(previousPath);
        } else {
          const startLesson = getStartLesson();
          console.log(
            "Error - Previous path invalid, navigating to start lesson:",
            startLesson
          );
          navigate(startLesson);
        }
      }
    };

    if (user && completedLessons) {
      restrictAccess();
    }
  }, [location.pathname, user, completedLessons, dispatch, navigate]);

  const updateProgressInBackend = async (newProgress, newCompletedLessons) => {
    if (!user?.uuid || !isAuthenticated) {
      console.log("UUID pengguna tidak ditemukan atau tidak terautentikasi");
      return;
    }
    try {
      console.log(
        "Memperbarui progres untuk pengguna:",
        user.uuid,
        "ke",
        newProgress,
        "dengan completedLessons:",
        newCompletedLessons
      );
      const response = await axios.patch(
        `${import.meta.env.VITE_API_ENDPOINT}/users/${user.uuid}/progress`,
        { progress: newProgress, completedLessons: newCompletedLessons },
        { withCredentials: true }
      );
      console.log("Respon pembaruan progres:", response.data);
      setProgress(newProgress);
      dispatch(getMe());
    } catch (error) {
      console.error(
        "Error memperbarui progres:",
        error.response?.data || error.message
      );
      if (error.response?.status === 401) {
        setIsAuthenticated(false);
        dispatch(getMe());
      } else {
        Swal.fire({
          icon: "error",
          title: "Gagal Memperbarui Progres",
          text:
            error.response?.data?.msg ||
            "Tidak dapat menyimpan progres ke server. Silakan coba lagi.",
        });
      }
    }
  };

  const getNextLesson = (currentLessonId) => {
    const allLessons = daftarBab.flatMap((bab) =>
      bab.subBab.map((sub) => sub.path)
    );
    const currentIndex = allLessons.indexOf(currentLessonId);
    if (currentIndex === -1 || currentIndex === allLessons.length - 1) {
      return null;
    }
    return allLessons[currentIndex + 1];
  };

  const getStartLesson = () => {
    const allLessons = daftarBab.flatMap((bab) =>
      bab.subBab.map((sub) => sub.path)
    );
    if (progress >= 100) {
      return allLessons[allLessons.length - 1];
    }
    // Kembalikan materi terakhir yang DISLESAIKAN (ada di completedLessons)
    if (completedLessons.length > 0) {
      return completedLessons[completedLessons.length - 1];
    }
    // Jika belum ada yang diselesaikan, kembalikan materi pertama
    return allLessons[0];
  };

  const handleLessonComplete = (lessonId) => {
    console.log("handleLessonComplete dipanggil dengan lessonId:", lessonId);
    if (!completedLessons.includes(lessonId)) {
      const newCompletedLessons = [...completedLessons, lessonId];
      const newProgress = (newCompletedLessons.length / totalLessons) * 100;
      const roundedProgress = parseFloat(newProgress.toFixed(2));
      console.log(
        "New completedLessons:",
        newCompletedLessons,
        "New progress:",
        roundedProgress
      );
      updateProgressInBackend(roundedProgress, newCompletedLessons);
    } else {
      console.log("Materi sudah diselesaikan:", lessonId);
    }
  };

  const handleQuizComplete = (currentLessonId) => {
    console.log(
      "handleQuizComplete dipanggil dengan currentLessonId:",
      currentLessonId
    );
    const nextLessonId = getNextLesson(currentLessonId);
    const newLessonsToComplete = [currentLessonId];

    if (nextLessonId && !completedLessons.includes(nextLessonId)) {
      newLessonsToComplete.push(nextLessonId);
    }

    const newCompletedLessons = [
      ...new Set([...completedLessons, ...newLessonsToComplete]),
    ];

    if (newCompletedLessons.length > completedLessons.length) {
      const newProgress = (newCompletedLessons.length / totalLessons) * 100;
      const roundedProgress = parseFloat(newProgress.toFixed(2));
      console.log(
        "New completedLessons setelah kuis:",
        newCompletedLessons,
        "New progress:",
        roundedProgress
      );
      updateProgressInBackend(roundedProgress, newCompletedLessons);
    } else {
      console.log(
        "Tidak ada perubahan pada completedLessons:",
        currentLessonId
      );
    }
  };

  const handleStartLearningAgain = () => {
    const startLesson = getStartLesson();
    console.log("Memulai belajar lagi, mengarahkan ke:", startLesson);
    navigate(startLesson);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar />
      <div style={{ display: "flex", flex: 1, marginTop: "80px" }}>
        <div
          style={{
            position: "fixed",
            top: "80px",
            left: 0,
            height: "calc(100vh - 80px)",
            backgroundColor: "white",
            transition: "transform 0.3s",
            zIndex: 50,
            width: isSidebarOpen ? "100%" : "320px",
            transform: isSidebarOpen
              ? "translateX(0)"
              : window.innerWidth >= 768
              ? "translateX(0)"
              : "translateX(-100%)",
            maxWidth: "320px",
          }}
        >
          <MateriSidebar
            completedLessons={completedLessons}
            progress={progress}
            toggleSidebar={toggleSidebar}
            handleStartLearningAgain={handleStartLearningAgain}
          />
        </div>
        {isSidebarOpen && window.innerWidth < 768 && (
          <div
            style={{
              position: "fixed",
              top: "80px",
              left: 0,
              width: "100%",
              height: "calc(100vh - 80px)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 40,
            }}
            onClick={toggleSidebar}
          />
        )}
        <div
          style={{
            flex: 1,
            padding: window.innerWidth >= 640 ? "24px" : "16px",
            marginLeft: window.innerWidth >= 768 ? "320px" : "0px",
            overflowY: "auto",
          }}
        >
          <button
            style={{
              position: "fixed",
              top: "92px",
              right: "16px",
              padding: "8px",
              color: "white",
              backgroundColor: "#6b7280",
              borderRadius: "8px",
              zIndex: 30,
              width: "40px",
              height: "40px",
              display: window.innerWidth >= 768 ? "none" : "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
          <Outlet context={{ handleLessonComplete, handleQuizComplete }} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MateriLayout;
