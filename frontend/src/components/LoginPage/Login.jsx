import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../../features/authSlice";
import Navbar from "../Landing/Navbar";
import Footer from "../Landing/Footer";
import loginImage from "../../assets/img/hero-login.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      <div className="flex flex-1 items-center justify-center bg-gray-100">
        <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Left Section */}
          <div className="hidden md:flex md:flex-1 items-center justify-center bg-purple-200">
            {" "}
            {/* Ganti bg-gray-200 menjadi bg-purple-200 */}
            <img
              alt="Illustration"
              className="max-w-full h-auto"
              src={loginImage}
            />
          </div>
          {/* Right Section */}
          <div className="flex-1 p-8">
            <h1 className="text-2xl font-bold mb-4 text-[#68217A]">MASUK</h1>
            {/* Ganti warna teks menjadi text-purple-700 */}
            <p className="mb-6 text-gray-600">
              Media Pembelajaran Dasar - Dasar C#
            </p>
            {isError && <p className="text-red-500">{message}</p>}
            <form onSubmit={Auth}>
              <div className="mb-4">
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4 flex items-center">
                <input
                  type="password"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="PASSWORD"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <a href="#" className="text-purple-500 ml-2">
                  {" "}
                  {/* Ganti text-blue-500 menjadi text-purple-500 */}
                  Lupa Password?
                </a>
              </div>
              <button
                type="submit"
                style={{ backgroundColor: "#68217A" }}
                className="w-full text-white py-2 rounded-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {isLoading ? "Memuat..." : "MASUK"}
              </button>
            </form>
            <p className="mt-4 text-gray-600">
              Belum punya akun?{" "}
              <a href="#" className="text-purple-500">
                {" "}
                {/* Ganti text-blue-500 menjadi text-purple-500 */}
                DAFTAR
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
