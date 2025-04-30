import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getMe } from "../../../features/authSlice";
import Navbar from "../../../components/Landing/NavbarLogin/NavbarLogin";
import Footer from "../../../components/Landing/Footer";
import Sidebar from "../../../components/LoginPage/Sidebar";
import { IoStatsChart, IoArrowUp, IoArrowDown } from "react-icons/io5";

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

  // Fungsi untuk mengambil jumlah siswa, progres belajar, dan data nilai
  const getScoresData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Ambil daftar pengguna
      const usersResponse = await axios.get("http://localhost:5000/users", {
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
            ? (
                averages[i].reduce((sum, val) => sum + val, 0) /
                averages[i].length
              ).toFixed(2)
            : "-";
      }
      formattedAverages.final =
        averages.final.length > 0
          ? (
              averages.final.reduce((sum, val) => sum + val, 0) /
              averages.final.length
            ).toFixed(2)
          : "-";

      // Format tertinggi dan terendah
      const formattedHighest = {};
      const formattedLowest = {};
      for (let i = 1; i <= 6; i++) {
        formattedHighest[i] = highest[i]
          ? `${highest[i].name} (${highest[i].score.toFixed(2)})`
          : "-";
        formattedLowest[i] = lowest[i]
          ? `${lowest[i].name} (${lowest[i].score.toFixed(2)})`
          : "-";
      }
      formattedHighest.final = highest.final
        ? `${highest.final.name} (${highest.final.score.toFixed(2)})`
        : "-";
      formattedLowest.final = lowest.final
        ? `${lowest.final.name} (${lowest.final.score.toFixed(2)})`
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
    getScoresData();
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex flex-col flex-1 p-6 bg-gray-100">
          <h2 className="mb-4 text-2xl font-bold text-center">DASHBOARD</h2>
          {isLoading && (
            <p className="mb-4 text-center text-gray-500">Memuat data...</p>
          )}
          {error && <p className="mb-4 text-center text-red-500">{error}</p>}
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
                <div className="mt-2">{studentCount} SISWA</div>
              </div>
              <i className="text-3xl fas fa-users"></i>
            </div>
            <div className="flex items-center justify-between p-4 text-white bg-yellow-400 rounded">
              <div>
                <div className="font-bold">PROGRES BELAJAR</div>
                <div className="mt-2">{completedStudents} SISWA SELESAI</div>
              </div>
              <i className="text-3xl fas fa-chart-pie"></i>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 text-white bg-blue-400 rounded">
              <div className="flex items-center">
                <IoStatsChart className="mr-2" />
                <div className="font-bold">NILAI RATA-RATA</div>
              </div>
              <div className="mt-2">
                <p>Kuis 1: {averageScores[1]}</p>
                <p>Kuis 2: {averageScores[2]}</p>
                <p>Kuis 3: {averageScores[3]}</p>
                <p>Kuis 4: {averageScores[4]}</p>
                <p>Kuis 5: {averageScores[5]}</p>
                <p>Kuis 6: {averageScores[6]}</p>
                <p>Evaluasi: {averageScores.final}</p>
              </div>
            </div>
            <div className="p-4 text-white bg-green-400 rounded">
              <div className="flex items-center">
                <IoArrowUp className="mr-2" />
                <div className="font-bold">NILAI TERTINGGI</div>
              </div>
              <div className="mt-2">
                <p>Kuis 1: {highestScores[1]}</p>
                <p>Kuis 2: {highestScores[2]}</p>
                <p>Kuis 3: {highestScores[3]}</p>
                <p>Kuis 4: {highestScores[4]}</p>
                <p>Kuis 5: {highestScores[5]}</p>
                <p>Kuis 6: {highestScores[6]}</p>
                <p>Evaluasi: {highestScores.final}</p>
              </div>
            </div>
            <div className="p-4 text-white bg-red-400 rounded">
              <div className="flex items-center">
                <IoArrowDown className="mr-2" />
                <div className="font-bold">NILAI TERENDAH</div>
              </div>
              <div className="mt-2">
                <p>Kuis 1: {lowestScores[1]}</p>
                <p>Kuis 2: {lowestScores[2]}</p>
                <p>Kuis 3: {lowestScores[3]}</p>
                <p>Kuis 4: {lowestScores[4]}</p>
                <p>Kuis 5: {lowestScores[5]}</p>
                <p>Kuis 6: {lowestScores[6]}</p>
                <p>Evaluasi: {lowestScores.final}</p>
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
