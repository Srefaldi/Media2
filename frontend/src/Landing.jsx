import React, { useEffect } from 'react';
import './App.css'; 
import logo from './assets/img/logo.png'; 
import iconHamburger from './assets/img/icon-hamburger.svg'; 
import iconClose from './assets/img/icon-close.svg'; 
import heroImage from './assets/img/hero.jpg'; 

function Landing() {
  
  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    // Fungsi untuk toggle menu
    const toggleMenu = () => {
      let src = (hamburger.src.includes(iconHamburger))
        ? iconClose  
        : iconHamburger;  

      hamburger.src = src;
      menu.classList.toggle('hidden');
      menu.classList.toggle('flex');
      menu.classList.toggle('text-center');
    };


    if (hamburger && menu) {
      hamburger.addEventListener('click', toggleMenu);
    } else {
      console.error("Elemen hamburger atau menu tidak ditemukan.");
    }


    return () => {
      if (hamburger) {
        hamburger.removeEventListener('click', toggleMenu);
      }
    };
  }, []); 

  return (
    <div>
      {/* Navbar */}
      <nav>
        <div className="px-6 container mx-auto flex items-center justify-between py-5">
          <a href="#" className="w-32">
            <img src={logo} alt="Logo" />
          </a>
          <div className="hidden md:inline space-x-6 font-semibold">
            <a className="hover:text-red-500" href="#">Beranda</a>
            <a className="hover:text-red-500" href="#">Materi</a>
            <a className="hover:text-red-500" href="#">Informasi</a>
          </div>
          <button className="hidden md:inline bg-red-500 text-white px-4 py-2 rounded-3xl">
            Login
          </button>
          <img src={iconHamburger} className="hamburger md:hidden" alt="Menu" />
        </div>

        {/* Nav Mobile */}
        <div className="menu absolute top-16 container hidden flex-col bg-white shadow-md inset-x-0 mx-auto px-6 py-5">
          <a className="hover:text-red-500" href="#">Beranda</a>
          <a className="hover:text-red-500" href="#">Materi</a>
          <a className="hover:text-red-500" href="#">Informasi</a>
          <button className="bg-red-500 text-white px-4 py-2 rounded-3xl">Login</button>
        </div>
      </nav>

      {/* Tampilan Utama */}
      <section className="px-6 container mx-auto md:flex md:justify-between items-center my-6 space-x-6">
        <div className="md:w-3/6 text-center md:text-left">
          <h4 className="text-xl font-bold">Media Pembelajaran</h4>
          <h3 className="text-5xl font-bold mb-5">CSharp Learn</h3>
          <p className="text-gray-500 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, deserunt!</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded-3xl">Mulai Belajar</button>
        </div>
        <img src={heroImage} className="md:w-3/6" alt="Hero Image" />
      </section>

      {/* Footer */}
      <footer className="bg-black text-center py-4">
        <div className="flex justify-center mt-3 space-x-4">
          <a href="#" className="text-white text-2xl"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-white text-2xl"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-white text-2xl"><i className="fab fa-google-plus"></i></a>
          <a href="#" className="text-white text-2xl"><i className="fab fa-github"></i></a>
          <a href="#" className="text-white text-2xl"><i className="fab fa-linkedin"></i></a>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-gray-400">
            Copyright ©2025{' '}
            <a href="#" className="text-blue-500">CSharpLearn</a>
          </p>
          <div className="mt-3 space-x-3">
            <a href="#" className="text-gray-400 hover:text-white">Beranda</a>
            <a href="#" className="text-gray-400 hover:text-white">Materi</a>
            <a href="#" className="text-gray-400 hover:text-white">Informasi</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
