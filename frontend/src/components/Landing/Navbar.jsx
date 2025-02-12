import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo-nav.png";
import iconHamburger from "../../assets/img/icon-hamburger.svg";
import iconClose from "../../assets/img/icon-close.svg";

function Navbar() {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");

    const toggleMenu = () => {
      let src = hamburger.src.includes(iconHamburger)
        ? iconClose
        : iconHamburger;
      hamburger.src = src;
      menu.classList.toggle("hidden");
      menu.classList.toggle("flex");
      menu.classList.toggle("text-center");
    };

    if (hamburger && menu) {
      hamburger.addEventListener("click", toggleMenu);
    }

    return () => {
      if (hamburger) {
        hamburger.removeEventListener("click", toggleMenu);
      }
    };
  }, []);

  return (
    <nav className="h-22 overflow-hidden bg-[#001F3F]">
      <div className="px-6 container mx-auto flex items-center justify-between">
        <a href="/" className="w-25">
          <img src={logo} alt="Logo" className="h-18 w-auto" />
        </a>
        <div className="hidden md:inline space-x-6 font-semibold">
          <a href="/" className="text-white hover:text-black">
            Beranda
          </a>
          <a href="/daftar-materi" className="text-white hover:text-black">
            Materi
          </a>
          <a href="/informasi" className="text-white hover:text-black">
            Informasi
          </a>
        </div>
        <button
          className="hidden md:inline px-4 py-2 rounded-3xl font-semibold"
          style={{ backgroundColor: "white" }}
        >
          <Link to="/login" className="text-blue-900 hover:text-black">
            Login
          </Link>
        </button>
        <img src={iconHamburger} className="hamburger md:hidden" alt="Menu" />
      </div>
      <div className="menu absolute container hidden flex-col bg-white shadow-md inset-x-0 mx-auto px-6 py-5">
        <a className="text-black hover:text-red-500" href="/">
          Beranda
        </a>
        <a className="text-black hover:text-red-500" href="/daftar-materi">
          Materi
        </a>
        <a className="text-black hover:text-red-500" href="/informasi">
          Informasi
        </a>
        <Link
          to="/login"
          className="hidden md:inline px-4 py-2 rounded-3xl font-semibold text-blue-900 hover:text-black"
          style={{
            backgroundColor: "white",
            display: "inline-block",
            padding: "8px 16px",
          }}
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
