import React, { useState } from "react";
import { Link } from "react-router-dom";
import iconHamburger from "../../assets/img/icon-hamburger.svg";
import iconClose from "../../assets/img/icon-close.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
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
  );
};

export default Navbar;
