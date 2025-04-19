import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Landing/NavbarLogin/NavbarLogin";
import Footer from "../../components/Landing/Footer";
import backIcon from "../../assets/img/kembali.png";

const Informasi = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          PERIHAL
        </h1>
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600 mb-2"
        >
          <img src={backIcon} alt="Kembali" className="w-5 h-5 mr-2" />
          Kembali
        </button>
        <section
          className="bg-white shadow rounded-lg p-6 mb-6"
          style={{ border: "4px solid #6E2A7F" }}
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <i className="fas fa-info-circle mr-2"></i> INFORMASI MEDIA
          </h2>
          <p className="text-gray-700 mb-4">
            Media pembelajaran ini dibuat untuk memenuhi persyaratan dalam
            menyelesaikan program Strata-1 Pendidikan Komputer dengan judul:
          </p>
          <p className="text-center font-bold text-gray-800 mb-4">
            PENGEMBANGAN MEDIA PEMBELAJARAN INTERAKTIF BERBASIS WEB PADA MATERI
            DASAR-DASAR PEMROGRAMAN C# DENGAN MODEL TUTORIAL
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-gray-700">
              <tbody>
                <tr>
                  <td className="py-2">Nama</td>
                  <td className="py-2">: SOPIA REFALDI</td>
                </tr>
                <tr>
                  <td className="py-2">Email</td>
                  <td className="py-2">
                    :{" "}
                    <a
                      href="mailto:sopiarefaldii@gmail.com"
                      className="text-purple-600"
                    >
                      sopiarefaldii@gmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-2">Dosen Pembimbing 1</td>
                  <td className="py-2">: Dr. R. Ati Sukmawati, M.Kom</td>
                </tr>
                <tr>
                  <td className="py-2">Dosen Pembimbing 2</td>
                  <td className="py-2">: Muhammad Hifdzi Adini, S.Kom., M.T</td>
                </tr>
                <tr>
                  <td className="py-2">Program Studi</td>
                  <td className="py-2">: S-1 Pendidikan Komputer</td>
                </tr>
                <tr>
                  <td className="py-2">Fakultas</td>
                  <td className="py-2">
                    : Fakultas Keguruan dan Ilmu Pendidikan (FKIP)
                  </td>
                </tr>
                <tr>
                  <td className="py-2">Instansi</td>
                  <td className="py-2">: Universitas Lambung Mangkurat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section
          className="bg-white shadow rounded-lg p-6 "
          style={{ border: "4px solid #6E2A7F" }}
        >
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <i className="fas fa-book mr-2"></i> DAFTAR PUSTAKA DAN ATRIBUSI
          </h2>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Informasi;
