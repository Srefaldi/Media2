import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import styled from "styled-components";
import ProgressBar from "../../../components/Home/Materi/ProgressBarComponents";
import daftarBab from "./daftarBab.json"; // Ensure this path is correct

// Import images
import pendahuluanIcon from "./style/img/pendahuluan.png";
import variabelIcon from "./style/img/variabel.png";
import tipeDataIcon from "./style/img/tipedata.png";
import operatorIcon from "./style/img/operator.png";
import kontrolAlurIcon from "./style/img/kontrol.png";
import methodIcon from "./style/img/method.png";
import lockIcon from "./style/img/lock.png"; // Import lock icon
import unlockIcon from "./style/img/unlock.png"; // Import unlock icon

const ScrollableList = styled.ul`
  overflow-y: auto; /* Pastikan overflow-y diatur ke auto */
  &::-webkit-scrollbar {
    display: none; /* Sembunyikan scrollbar */
  }
  scrollbar-width: none; /* Sembunyikan scrollbar di Firefox */
`;

const MateriSidebar = ({ completedLessons, progress }) => {
  const [openBab, setOpenBab] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const activeBab = daftarBab.find((bab) =>
      bab.subBab.some((sub) => sub.path === currentPath)
    );

    if (activeBab) {
      setOpenBab(activeBab.id); // Buka dropdown bab yang aktif
    } else {
      setOpenBab(null); // Tutup semua dropdown jika tidak ada bab aktif yang ditemukan
    }
  }, [location.pathname]);

  const toggleDropdown = (babId) => {
    setOpenBab(openBab === babId ? null : babId);
  };

  // Map icon names to imported images
  const iconMap = {
    pendahuluanIcon,
    variabelIcon,
    tipeDataIcon,
    operatorIcon,
    kontrolAlurIcon,
    methodIcon,
  };

  return (
    <div className="w-full p-4 overflow-hidden text-gray-900 bg-white">
      <h2 className="mb-4 text-xl font-bold text-center">DAFTAR MATERI</h2>
      <ProgressBar progress={progress} />
      <ul className="mt-4 space-y-2">
        {daftarBab.map((bab) => (
          <li key={bab.id}>
            <button
              onClick={() => toggleDropdown(bab.id)}
              className="flex items-center justify-between w-full p-4 text-left transition duration-200 rounded"
              style={{
                backgroundColor: "#68217A",
                color: "white",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#4A5B6D")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#68217A")
              }
            >
              <span>
                <img
                  src={iconMap[bab.icon]} // Use the mapping here
                  alt={bab.judul}
                  className="inline-block w-8 h-8 mr-2"
                />
                {bab.judul}
              </span>
              <span>{openBab === bab.id ? "▲" : "▼"}</span>
            </button>
            <ScrollableList
              className={classNames("pl-4 transition-all duration-300", {
                "max-h-[300px] overflow-y-auto": openBab === bab.id,
                "max-h-0 overflow-hidden": openBab !== bab.id,
              })}
            >
              {bab.subBab.map((sub, index) => (
                <li key={index} className="flex items-center justify-between">
                  <Link
                    to={sub.path}
                    className={`text-gray-900 block p-2 hover:bg-gray-300 rounded ${
                      completedLessons.includes(sub.path)
                        ? ""
                        : "opacity-50 cursor-not-allowed"
                    }`}
                    onClick={(e) => {
                      if (!completedLessons.includes(sub.path)) {
                        e.preventDefault();
                      } else {
                        window.scrollTo(0, 0); // Scroll ke atas saat sub-menu diklik
                      }
                    }}
                  >
                    {sub.label}
                  </Link>
                  {/* Tampilkan ikon lock atau unlock berdasarkan status penyelesaian */}
                  <img
                    src={
                      completedLessons.includes(sub.path)
                        ? unlockIcon
                        : lockIcon
                    }
                    alt={
                      completedLessons.includes(sub.path)
                        ? "Unlocked"
                        : "Locked"
                    }
                    className="w-5 h-5 mb-5"
                  />
                </li>
              ))}
            </ScrollableList>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Link
          to="/dashboard"
          className="block text-center bg-[#68217A] text-white py-2 px-4 rounded-full hover:bg-[#4A5B6D] transition"
        >
          Kembali ke Dashboard
        </Link>
      </div>
    </div>
  );
};

export default MateriSidebar;
