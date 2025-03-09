import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MateriSidebar from "./MateriSidebar";
import Navbar from "./Navbar";
import Footer from "../../../components/Landing/Footer";
import "./style/MateriLayout.css"; // Impor file CSS

const MateriLayout = () => {
  const [progress, setProgress] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);

  const totalLessons = 10;

  const handleLessonComplete = (lessonId) => {
    if (!completedLessons.includes(lessonId)) {
      const newCompletedLessons = [...completedLessons, lessonId];
      setCompletedLessons(newCompletedLessons);
      setProgress((newCompletedLessons.length / totalLessons) * 100);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 mt-20">
        {/* Tambahkan margin-top untuk konten */}
        <div className="fixed top-20 left-0 w-70 h-[calc(100vh-80px)] overflow-hidden overflow-y-auto bg-[white] text-white">
          <MateriSidebar
            completedLessons={completedLessons}
            progress={progress}
          />
        </div>
        <div className="flex-1 p-6 ml-64 overflow-y-auto">
          {/* Konten Materi */}
          <Outlet context={{ handleLessonComplete }} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MateriLayout;
