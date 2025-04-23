import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../../features/authSlice";
import Navbar from "../../../components/Landing/NavbarLogin/NavbarLogin";
import Footer from "../../../components/Landing/Footer";
import Sidebar from "../../../components/LoginPage/Sidebar";
import { IoStatsChart, IoArrowUp, IoArrowDown } from "react-icons/io5";

const AdminDashboard = () => {
  const dispatch = useDispatch();

  const [token, setToken] = useState("");

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
    setToken(generateToken());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
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
                <IoStatsChart className="mr-2" />
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
                <IoArrowUp className="mr-2" />
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
                <IoArrowDown className="mr-2" />
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
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
