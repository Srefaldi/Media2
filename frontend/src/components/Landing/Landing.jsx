import React, { useEffect, useState } from "react";
import iconHamburger from "../../assets/img/icon-hamburger.svg";
import iconClose from "../../assets/img/icon-close.svg";
import heroImage from "../../assets/img/logo-hero.png";
import guruIcon from "../../assets/img/icon-guru.png"; // Import your guru icon here
import { Link } from "react-router-dom";
import Footer from "./Footer";
import InfoModal from "./InfoModal";

const daftarMateri = [
  {
    bab: "BAB 1",
    judul: "PENDAHULUAN",
    subMateri: [
      "Pengenalan C#",
      "Instalasi C#",
      "Struktur Kode Pemrograman C#",
      "Struktur Eksekusi Kode",
      "Sintaks Print",
      "Sintaks Komentar",
      "Error Pada C#",
    ],
  },
  {
    bab: "BAB 2",
    judul: "VARIABEL",
    subMateri: [
      "Pengertian Variabel",
      "Penamaan Variabel",
      "Kategori Variabel",
      "Deklarasi dan Inialisasi Variabel",
      "Deklarasi Banyak Variabel",
      "Variabel Konstanta",
      "Sintaks Input",
    ],
  },
  {
    bab: "BAB 3",
    judul: "TIPE DATA",
    subMateri: [
      "Pengertian Tipe Data",
      "Klasifikasi Tipe Data",
      "Tipe Data Dasar",
      "1. Integer",
      "2. Floating-point",
      "3. Boolean",
      "4. Char",
      "5. String",
    ],
  },
  {
    bab: "BAB 4",
    judul: "OPERATOR",
    subMateri: [
      "Pengertian Operator",
      "Operator Arithmetic",
      "Operator Increment Decrement",
      "Operator Assignment",
      "Operator Comparison",
      "Operator Logika",
      "Operator Conditional",
      "Operator Equality",
    ],
  },
  {
    bab: "BAB 5",
    judul: "KONTROL ALUR",
    subMateri: [
      "Pengertian Kontrol Alur",
      "Pernyataan If-Else",
      "Pernyataan Switch",
      "Pernyataan Perulangan",
      "Pernyataan Break dan Continue",
      "Perulangan Bersarang",
    ],
  },
  {
    bab: "BAB 6",
    judul: "METHOD",
    subMateri: [
      "Pengenalan Method",
      "Method Void",
      "Method Dengan Tipe Data",
      "Parameter Method",
    ],
  },
];

function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <header className="text-gray-700 body-font border-b border-gray-200">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center justify-between">
          <a
            className="flex title-font font-medium items-center text-gray-900 md:mb-0"
            href="/"
          >
            <span className="ml-3 text-xl">
              <span className="font-bold" style={{ color: "#68217A" }}>
                SHARP
              </span>{" "}
              LEARN
            </span>
          </a>

          <div className="flex items-center md:ml-auto">
            <button
              className="md:hidden inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-opacity-80 rounded text-base"
              onClick={toggleMenu}
            >
              <img
                src={isMenuOpen ? iconClose : iconHamburger}
                className="hamburger"
                alt="Menu"
              />
            </button>
            <div
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } absolute top-16 right-0 bg-white shadow-lg rounded-lg md:flex md:static md:bg-transparent md:shadow-none`}
            >
              <button className="inline flex items-center border border-[#68217A] py-1 px-3 focus:outline-none rounded text-base text-black hover:bg-[#68217A] hover:text-white mx-2">
                <Link to="/daftar" className="text-black">
                  DAFTAR
                </Link>
              </button>
              <button
                className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-opacity-80 rounded text-base mx-2"
                style={{ backgroundColor: "#68217A" }}
              >
                <Link to="/login" className="text-white hover:text-gray-200">
                  MASUK
                </Link>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Tampilan Utama */}
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4">
              <span className="font-bold" style={{ color: "#68217A" }}>
                MEDIA PEMBELAJARAN
              </span>
              <br className="hidden lg:inline-block" />
              DASAR - DASAR C#
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
              atque, autem numquam cum, sint aliquid ea doloribus obcaecati,
              sapiente voluptates debitis. Aspernatur, praesentium! Ullam
              repellat excepturi distinctio iusto veniam aperiam eveniet
              asperiores culpa voluptatem ipsa! Quia aperiam est commodi dolor,
              deleniti a quibusdam doloremque laudantium nihil velit nostrum
              suscipit iste.
            </p>
            <div className="flex justify-center flex-wrap">
              <a
                href="#daftar-materi"
                className="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-opacity-80 rounded text-lg font-bold"
                style={{ backgroundColor: "#68217A" }}
              >
                DAFTAR MATERI
              </a>
              <a
                href="/login-guru"
                className="inline-flex ml-4 text-gray-600 border border-gray-400 py-2 px-6 focus:outline-none hover:bg-opacity-80 rounded text-lg font-bold"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                HALAMAN GURU >>
              </a>
            </div>
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded w-full h-auto"
              alt="hero"
              src={heroImage}
            />
          </div>
        </div>
      </section>

      {/* Daftar Materi */}
      <section id="daftar-materi" className="bg-gray-100 py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">
            MATERI PEMBELAJARAN
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {daftarMateri.map((materi, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition relative"
              >
                <div className="absolute top-0 left-0 w-full bg-[#68217A] text-white text-center rounded-t-lg p-4">
                  <h3 className="text-xl font-semibold">{materi.bab}</h3>
                  <p className="text-lg font-bold">{materi.judul}</p>
                </div>
                <div className="pt-20">
                  <ul className="text-gray-600 text-sm mt-2 list-disc list-inside">
                    {materi.subMateri.map((sub, i) => (
                      <li key={i}>{sub}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to="/login"
            className="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-opacity-80 rounded text-lg text-decoration-none"
            style={{ backgroundColor: "#68217A" }}
          >
            MULAI BELAJAR
          </Link>
        </div>
      </section>

      {/* Modal Informasi */}
      <InfoModal isOpen={isModalOpen} toggleModal={toggleModal} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Landing;
