import React from "react";

function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a
            href="https://flowbite.com/"
            className="hover:no-underline"
            style={{ color: "#68217A" }}
          >
            Sharp
          </a>{" "}
          Learn. Pilkommedia.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="#"
              className="text-gray-500 hover:no-underline me-4 md:me-6"
            >
              Beranda
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 hover:no-underline me-4 md:me-6"
            >
              Informasi
            </a>
          </li>
          <li>
            <a
              href="#daftar-materi"
              className="text-gray-500 hover:no-underline me-4 md:me-6"
            >
              Daftar Materi
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
