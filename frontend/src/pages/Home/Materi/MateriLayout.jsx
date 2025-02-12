import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MateriSidebar from "./MateriSidebar";
import Navbar from "./Navbar";
import Footer from "../../../components/Landing/Footer";
import ProgressBar from "../../../components/Home/Materi/ProgressBarComponents";

const MateriLayout = () => {
  const [progress, setProgress] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);

  const totalLessons = 10; // Ganti dengan jumlah total materi

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
      <ProgressBar progress={progress} />
      <div className="flex flex-1">
        <MateriSidebar completedLessons={completedLessons} />
        <div className="flex-1 p-6">
          {/* Konten Materi */}
          <Outlet context={{ handleLessonComplete }} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MateriLayout;
