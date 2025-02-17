import React, { useEffect } from "react";
import logo from "../../assets/img/logo-nav.png";
import iconHamburger from "../../assets/img/icon-hamburger.svg";
import iconClose from "../../assets/img/icon-close.svg";
import heroImage from "../../assets/img/logo-hero.png";
import { Link } from "react-router-dom";
import Footer from "../../components/Landing/Footer";

function Landing() {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");

    // Fungsi untuk toggle menu
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
    } else {
      console.error("Elemen hamburger atau menu tidak ditemukan.");
    }

    return () => {
      if (hamburger) {
        hamburger.removeEventListener("click", toggleMenu);
      }
    };
  }, []);

  return (
    <div>
      <div className="landing-page" style={{ backgroundColor: "white" }}>
        {/* Navbar */}
        <nav
          className="h-22 overflow-hidden"
          style={{ backgroundColor: "#001F3F" }}
        >
          <div className="px-6 container mx-auto flex items-center justify-between landing-navbar">
            <a href="/" className="w-25">
              <img src={logo} alt="Logo" className="h-18 w-auto" />
            </a>
            <div className="hidden md:inline space-x-6 font-semibold">
              <a
                href="/"
                style={{ color: "white" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "black")}
                onMouseOut={(e) => (e.currentTarget.style.color = "white")}
              >
                Beranda
              </a>
              <a
                href="/daftar-materi"
                style={{ color: "white" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "black")}
                onMouseOut={(e) => (e.currentTarget.style.color = "white")}
              >
                Materi
              </a>
              <a
                href="/informasi"
                style={{ color: "white" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "black")}
                onMouseOut={(e) => (e.currentTarget.style.color = "white")}
              >
                Informasi
              </a>
            </div>
            <button
              className="hidden md:inline px-4 py-2 rounded-3xl font-semibold"
              style={{ backgroundColor: "white" }}
            >
              <Link
                to="/login"
                style={{ color: "#001F3F", textDecoration: "none" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "black")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#001F3F")}
              >
                Login
              </Link>
            </button>
            <img
              src={iconHamburger}
              className="hamburger md:hidden"
              alt="Menu"
            />
          </div>

          {/* Nav Mobile */}
          <div className="menu absolute container hidden flex-col bg-white shadow-md inset-x-0 mx-auto px-6 py-5">
            <a className="text-black hover:text-red-500" href="#">
              Beranda
            </a>
            <a className="text-black hover:text-red-500" href="#">
              Materi
            </a>
            <a className="text-black hover:text-red-500" href="#">
              Informasi
            </a>
            <button
              className="block w-full text-white px-4 py-2 rounded-3xl mt-4"
              style={{ backgroundColor: "#001F3F" }}
            >
              <Link to="/login" className="text-white no-underline">
                Login
              </Link>
            </button>
          </div>
        </nav>

        {/* Tampilan Utama */}
        <section className="px-6 container mx-auto md:flex md:justify-between items-center my-6 space-x-6 landing-main h-115">
          <div className="md:w-3/6 text-center md:text-left">
            <h4 className="text-black text-xl font-bold">Media Pembelajaran</h4>
            <h3 className="text-black text-5xl font-bold mb-5">CSharp Learn</h3>
            <p className="text-gray-500 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              deserunt!
            </p>
            <button
              style={{ backgroundColor: "#001F3F" }}
              className="text-white px-4 py-2 rounded-3xl"
            >
              <Link to="/login" className="text-white no-underline">
                Mulai Belajar
              </Link>
            </button>
          </div>
          <img src={heroImage} className="md:w-3/6" alt="Hero Image" />
        </section>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Landing;
