import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../../features/authSlice";
import Navbar from "../Landing/Navbar";
import Footer from "../Landing/Footer";
import loginImage from "../../assets/img/hero-login.png";
import Tooltip from "./Tooltip"; // Import Tooltip

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
      <div className="flex items-center justify-center flex-1 bg-gray-100">
        <div className="flex flex-col w-full max-w-4xl overflow-hidden bg-white rounded-lg shadow-lg md:flex-row">
          {/* Left Section */}
          <div className="items-center justify-center hidden bg-purple-200 md:flex md:flex-1">
            <img
              alt="Illustration"
              className="h-auto max-w-full"
              src={loginImage}
            />
          </div>
          {/* Right Section */}
          <div className="flex-1 p-8">
            <h1 className="text-2xl font-bold mb-10 text-[#68217A]">
              SHARP LEARN
            </h1>
            <p className="mb-3 text-gray-600">
              Silahkan masuk dengan akun yang telah terdaftar ...{" "}
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
              <div className="flex items-center mb-4">
                <input
                  type="password"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="PASSWORD"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="text-center ">
                  <Tooltip message="Silakan hubungi guru untuk mereset password">
                    <a href="/login" className="text-purple-500">
                      Lupa Password?
                    </a>
                  </Tooltip>
                </div>
              </div>
              <button
                type="submit"
                style={{ backgroundColor: "#68217A" }}
                className="w-full py-2 text-white rounded-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {isLoading ? "Memuat..." : "MASUK"}
              </button>
            </form>
            <p className="mt-4 text-gray-600">
              Belum punya akun?{" "}
              <a href="#" className="text-purple-500">
                DAFTAR
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
