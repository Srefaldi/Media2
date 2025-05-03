import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getMe } from "../../../features/authSlice";
import Navbar from "../../../components/Landing/NavbarLogin/NavbarLogin";
import Footer from "../../../components/Landing/Footer";
import Sidebar from "../../../components/LoginPage/Sidebar";
import {
  IoStatsChart,
  IoArrowUp,
  IoArrowDown,
  IoRefresh,
} from "react-icons/io5";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  const [studentCount, setStudentCount] = useState(0);
  const [completedStudents, setCompletedStudents] = useState(0);
  const [averageScores, setAverageScores] = useState({});
  const [highestScores, setHighestScores] = useState({});
  const [lowestScores, setLowestScores] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedClass, setSelectedClass] = useState("");
  const [classes, setClasses] = useState([]);

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

  // Fungsi untuk mengambil daftar kelas
  const getClasses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/classes", {
        withCredentials: true,
      });
      setClasses(response.data);
    } catch (error) {
      console.error("Error fetching classes:", error.message);
      setError(
        error.response?.data?.msg ||
          "Terjadi kesalahan saat mengambil daftar kelas"
      );
    }
  };

  // Fungsi untuk mengambil jumlah siswa, progres belajar, dan data nilai
  const getScoresData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Ambil daftar pengguna dengan filter kelas
      const usersResponse = await axios.get("http://localhost:5000/users", {
        params: { class: selectedClass || undefined },
        withCredentials: true,
      });
      const students = usersResponse.data.filter(
        (user) => user.role === "user"
      );
      setStudentCount(students.length);

      // Hitung siswa dengan progres 100%
      const completed = students.filter(
        (student) => student.progress === 100
      ).length;
      setCompletedStudents(completed);

      // Ambil nilai untuk setiap siswa
      const scoresPromises = students.map(async (student) => {
        try {
          const scoreResponse = await axios.get(
            `http://localhost:5000/scores/${student.uuid}`,
            { withCredentials: true }
          );
          return {
            name: student.name,
            scores: scoreResponse.data.scores,
          };
        } catch (error) {
          console.error(
            `Gagal mengambil nilai untuk ${student.name}:`,
            error.message
          );
          return { name: student.name, scores: [] };
        }
      });

      const studentsWithScores = await Promise.all(scoresPromises);

      // Proses data untuk rata-rata, tertinggi, dan terendah
      const averages = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], final: [] };
      const highest = {
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
        final: null,
      };
      const lowest = {
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
        final: null,
      };

      studentsWithScores.forEach(({ name, scores }) => {
        // Evaluasi Bab 1-6
        for (let i = 1; i <= 6; i++) {
          const score = scores.find(
            (s) => s.type === "evaluasi" && s.chapter === i
          );
          if (score) {
            averages[i].push(score.score);
            if (!highest[i] || score.score > highest[i].score) {
              highest[i] = { name, score: score.score };
            }
            if (!lowest[i] || score.score < lowest[i].score) {
              lowest[i] = { name, score: score.score };
            }
          }
        }
        // Evaluasi Akhir
        const finalScore = scores.find((s) => s.type === "evaluasi_akhir");
        if (finalScore) {
          averages.final.push(finalScore.score);
          if (!highest.final || finalScore.score > highest.final.score) {
            highest.final = { name, score: finalScore.score };
          }
          if (!lowest.final || finalScore.score < lowest.final.score) {
            lowest.final = { name, score: finalScore.score };
          }
        }
      });

      // Hitung rata-rata
      const formattedAverages = {};
      for (let i = 1; i <= 6; i++) {
        formattedAverages[i] =
          averages[i].length > 0
            ? Math.floor(
                averages[i].reduce((sum, val) => sum + val, 0) /
                  averages[i].length
              )
            : "-";
      }
      formattedAverages.final =
        averages.final.length > 0
          ? Math.floor(
              averages.final.reduce((sum, val) => sum + val, 0) /
                averages.final.length
            )
          : "-";

      // Format tertinggi dan terendah
      const formattedHighest = {};
      const formattedLowest = {};
      for (let i = 1; i <= 6; i++) {
        formattedHighest[i] = highest[i]
          ? `${highest[i].name} (${Math.floor(highest[i].score)})`
          : "-";
        formattedLowest[i] = lowest[i]
          ? `${lowest[i].name} (${Math.floor(lowest[i].score)})`
          : "-";
      }
      formattedHighest.final = highest.final
        ? `${highest.final.name} (${Math.floor(highest.final.score)})`
        : "-";
      formattedLowest.final = lowest.final
        ? `${lowest.final.name} (${Math.floor(lowest.final.score)})`
        : "-";

      setAverageScores(formattedAverages);
      setHighestScores(formattedHighest);
      setLowestScores(formattedLowest);
    } catch (error) {
      console.error("Error fetching scores data:", error.message);
      setError(
        error.response?.data?.msg ||
          "Terjadi kesalahan saat mengambil data nilai"
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    dispatch(getMe());
    setToken(generateToken());
    getClasses();
    getScoresData();
  }, [dispatch]);

  useEffect(() => {
    getScoresData();
  }, [selectedClass]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex flex-col flex-1 w-full p-6 mx-auto md:p-8 max-w-7xl">
          <h2 className="mb-6 text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
            DASHBOARD GURU
          </h2>
          {isLoading && (
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2 text-gray-600">
                <div className="w-6 h-6 border-4 border-purple-600 rounded-full border-t-transparent animate-spin"></div>
                <p className="text-lg">Memuat data...</p>
              </div>
            </div>
          )}
          {error && (
            <p className="p-4 mb-6 text-lg text-center text-red-700 bg-red-100 rounded-lg shadow">
              {error}
            </p>
          )}
          <div className="mb-8">
            <label className="block mb-2 text-lg font-semibold text-gray-800">
              Pilih Kelas
            </label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full md:w-80 px-4 py-3 text-lg bg-white border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:scale-[1.02] transform"
            >
              <option value="">Semua Kelas</option>
              {classes.map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
          </div>
          <div className="p-6 mb-8 rounded-lg shadow-lg bg-gradient-to-br from-purple-100 to-blue-100">
            <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center space-x-3">
                <i className="text-2xl text-purple-600 fas fa-key"></i>
                <span className="text-xl font-bold text-gray-800">TOKEN</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-xl font-semibold text-gray-900">
                  {token}
                </div>
                <button
                  className="flex items-center px-4 py-2 text-white transition-colors duration-200 bg-purple-600 rounded-lg shadow hover:bg-purple-700"
                  onClick={refreshToken}
                >
                  <IoRefresh className="mr-2" />
                  Refresh
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2">
            <div className="flex items-center justify-between p-6 text-white transition-shadow duration-200 rounded-lg shadow-lg bg-gradient-to-r from-purple-600 to-purple-800 hover:shadow-xl">
              <div>
                <div className="text-xl font-bold">JUMLAH SISWA</div>
                <div className="mt-3 text-2xl">
                  {studentCount > 0
                    ? `${studentCount} SISWA`
                    : "Tidak ada siswa"}
                </div>
              </div>
              <i className="text-4xl fas fa-users"></i>
            </div>
            <div className="flex items-center justify-between p-6 text-white transition-shadow duration-200 rounded-lg shadow-lg bg-gradient-to-r from-yellow-500 to-yellow-700 hover:shadow-xl">
              <div>
                <div className="text-xl font-bold">PROGRES BELAJAR</div>
                <div className="mt-3 text-2xl">
                  {studentCount > 0
                    ? `${completedStudents} SISWA SELESAI`
                    : "Tidak ada data"}
                </div>
              </div>
              <i className="text-4xl fas fa-chart-pie"></i>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="p-6 text-white transition-shadow duration-200 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:shadow-xl">
              <div className="flex items-center">
                <IoStatsChart className="mr-3 text-2xl" />
                <div className="text-xl font-bold">NILAI RATA-RATA</div>
              </div>
              <div className="mt-4 text-lg">
                {studentCount > 0 ? (
                  <>
                    <p className="mb-2">Kuis 1: {averageScores[1]}</p>
                    <p className="mb-2">Kuis 2: {averageScores[2]}</p>
                    <p className="mb-2">Kuis 3: {averageScores[3]}</p>
                    <p className="mb-2">Kuis 4: {averageScores[4]}</p>
                    <p className="mb-2">Kuis 5: {averageScores[5]}</p>
                    <p className="mb-2">Kuis 6: {averageScores[6]}</p>
                    <p>Evaluasi: {averageScores.final}</p>
                  </>
                ) : (
                  <p>Tidak ada data</p>
                )}
              </div>
            </div>
            <div className="p-6 text-white transition-shadow duration-200 rounded-lg shadow-lg bg-gradient-to-r from-green-500 to-green-700 hover:shadow-xl">
              <div className="flex items-center">
                <IoArrowUp className="mr-3 text-2xl" />
                <div className="text-xl font-bold">NILAI TERTINGGI</div>
              </div>
              <div className="mt-4 text-lg">
                {studentCount > 0 ? (
                  <>
                    <p className="mb-2">Kuis 1: {highestScores[1]}</p>
                    <p className="mb-2">Kuis 2: {highestScores[2]}</p>
                    <p className="mb-2">Kuis 3: {highestScores[3]}</p>
                    <p className="mb-2">Kuis 4: {highestScores[4]}</p>
                    <p className="mb-2">Kuis 5: {highestScores[5]}</p>
                    <p className="mb-2">Kuis 6: {highestScores[6]}</p>
                    <p>Evaluasi: {highestScores.final}</p>
                  </>
                ) : (
                  <p>Tidak ada data</p>
                )}
              </div>
            </div>
            <div className="p-6 text-white transition-shadow duration-200 rounded-lg shadow-lg bg-gradient-to-r from-red-500 to-red-700 hover:shadow-xl">
              <div className="flex items-center">
                <IoArrowDown className="mr-3 text-2xl" />
                <div className="text-xl font-bold">NILAI TERENDAH</div>
              </div>
              <div className="mt-4 text-lg">
                {studentCount > 0 ? (
                  <>
                    <p className="mb-2">Kuis 1: {lowestScores[1]}</p>
                    <p className="mb-2">Kuis 2: {lowestScores[2]}</p>
                    <p className="mb-2">Kuis 3: {lowestScores[3]}</p>
                    <p className="mb-2">Kuis 4: {lowestScores[4]}</p>
                    <p className="mb-2">Kuis 5: {lowestScores[5]}</p>
                    <p className="mb-2">Kuis 6: {lowestScores[6]}</p>
                    <p>Evaluasi: {lowestScores.final}</p>
                  </>
                ) : (
                  <p>Tidak ada data</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
