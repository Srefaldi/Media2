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
        <Link to="/" className="w-25">
          <img src={logo} alt="Logo" className="h-18 w-auto" />
        </Link>
        <div className="hidden md:inline space-x-6 font-semibold">
          <Link to="/" className="text-white hover:text-black">
            Beranda
          </Link>
          <Link to="/daftar-materi" className="text-white hover:text-black">
            Materi
          </Link>
          <Link to="/informasi" className="text-white hover:text-black">
            Informasi
          </Link>
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
    </nav>
  );
}

export default Navbar;
